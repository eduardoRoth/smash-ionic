import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, of, pipe, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { Character } from '../models/characters.model';

export type CharactersState = {
  characters: Array<Character>;
};

export const InitialState: CharactersState = {
  characters: [],
};

export const CharactersStore = signalStore(
  { providedIn: 'root' },
  withState<CharactersState>(InitialState),
  withComputed((store) => ({
    total: computed(() => store.characters().length),
  })),
  withMethods((store, http = inject(HttpClient)) => ({
    loadAll: rxMethod<void>(
      pipe(
        tap(() => {
          try {
            const characters = JSON.parse(
              localStorage.getItem('smash-characters') ?? '',
            );
            patchState(store, { characters });
          } catch (err) {
            console.warn('No data could be fetched from localStorage');
          }
        }),
        switchMap(() =>
          http
            .get<
              Array<Character>
            >(`https://smashbrosapi.com/api/v1/ultimate/characters`)
            .pipe(
              tap((characters) => {
                localStorage.setItem(
                  'smash-characters',
                  JSON.stringify(characters),
                );
              }),
              catchError((err) => {
                console.error(err);
                return of(null);
              }),
            ),
        ),
        tap((characters) => {
          if (characters) {
            patchState(store, { characters });
          }
        }),
      ),
    ),
  })),
  withComputed(() => ({})),
  withHooks((store) => ({
    onInit: () => {
      store.loadAll();
    },
  })),
);
