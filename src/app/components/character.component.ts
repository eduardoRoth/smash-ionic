import { Component, input } from '@angular/core';
import {
  IonBadge,
  IonCard,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonText,
} from '@ionic/angular/standalone';
import { Character } from '../models/characters.model';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [
    IonBadge,
    IonCol,
    IonRow,
    IonCard,
    IonItem,
    IonLabel,
    IonText,
    IonIcon,
  ],
  template: `
    <ion-col size-lg="4" size-sm="6" size="12">
      <ion-card>
        <div class="main-card">
          <ion-row
            class="ion-justify-content-center ion-align-items-center picture ion-padding-horizontal"
          >
            <ion-col size="12" class="ion-text-center">
              <div class="badge">
                <img [src]="character().images.icon" [alt]="character().name" />
              </div>
              <img
                class="portrait"
                [src]="character().images.portrait"
                [alt]="character().name"
              />
            </ion-col>
          </ion-row>

          <ion-item lines="none" class="info">
            <ion-label>
              <h2>
                {{ character().name }}
              </h2>
              <p>
                <ion-text color="medium">
                  {{ character().availability }}
                </ion-text>
              </p>
            </ion-label>
            <ion-badge slot="end" class="order" color="secondary">
              {{ character().order }}
            </ion-badge>
          </ion-item>
        </div>
        <ion-item lines="none">
          <ion-icon
            slot="end"
            class="series-icon"
            [src]="character().series.icon"
            [title]="character().series.name"
          ></ion-icon>
          <ion-label class="ion-text-uppercase" color="medium">
            <small>
              <strong>
                {{ character().series.name }}
              </strong>
            </small>
          </ion-label>
        </ion-item>
      </ion-card>
    </ion-col>
  `,
  styles: `
    @media (prefers-color-scheme: light) {
      div.main-card {
        --ion-background-color: white;
      }
    }
    @media (prefers-color-scheme: dark) {
      ion-card {
        ion-row.picture {
          ion-col {
            --ion-color-light: var(--ion-color-light-tint);
          }
        }
      }
      .series-icon {
        fill: var(--ion-color-light-tint);
      }
    }

    ion-card {
      border-radius: 20px;
      --ion-background-color: var(--ion-color-light);

      ion-badge.order {
        --padding-start: 16px;
        --padding-end: 16px;
        --padding-top: 10px;
        --padding-bottom: 10px;
        border-radius: 13px;
        font-size: 1.2rem;
      }
      div.main-card {
        background-color: var(--ion-background-color, white);
        border-bottom-left-radius: 22px;
        border-bottom-right-radius: 22px;
        padding: 24px 0;
        overflow: hidden;
        border-bottom: 1px solid var(--ion-color-light-shade);
        ion-item {
          padding-top: 20px;
          --background: transparent;
        }
      }
      ion-row.picture {
        ion-col {
          background: var(--ion-color-light);
          padding: 36px 8px;
          border-radius: 13px;
        }
        img.portrait {
          width: 250px;
          height: auto;
          object-fit: contain;
          object-position: center;
          max-height: 250px;
        }
        div.badge {
          position: absolute;
          top: -24px;
          right: -24px;
          padding: 24px;
          border-bottom-left-radius: 50px;
          background-color: var(--ion-background-color, white);

          img {
            height: 24px;
            width: 24px;
          }
        }
      }
      ion-item {
        ion-label {
          --ion-font-family: 'Pixelify Sans', sans-serif;
          font-optical-sizing: auto;
        }
        &.info {
          h2 {
            font-size: 1.6rem;
            font-weight: bold;
          }
          p {
            font-size: 0.9rem;
            text-transform: uppercase;
          }
        }
      }
    }
  `,
})
export class CharacterComponent {
  character = input.required<Character>();
}
