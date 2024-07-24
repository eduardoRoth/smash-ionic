import { Component, inject } from '@angular/core';

import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CharactersStore } from '../stores/characters.store';
import { CharacterComponent } from '../components/character.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonCard,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonLabel,
    IonCard,
    IonCardContent,
    CharacterComponent,
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Smash Bros Ultimate Characters ({{ totalCharacters() }})
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid fixed>
        <ion-row class="ion-justify-content-center">
          @for (character of characters(); track character.order) {
            <app-character [character]="character" />
          }
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
  styles: ``,
})
export default class HomeComponent {
  private readonly store = inject(CharactersStore);
  characters = this.store.characters;
  totalCharacters = this.store.total;
}
