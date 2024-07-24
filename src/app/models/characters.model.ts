export type CharacterAvailability =
  | 'Starter'
  | 'Unlockable'
  | 'Custom'
  | 'Downloadable';

export interface Character {
  alsoAppearsIn: Array<'SSB' | 'Melee' | 'Brawl' | 'SSB4'>;
  availability: string;
  images: {
    icon: string;
    portrait: string;
  };
  name: string;
  order: number;
  series: {
    icon: string;
    name: string;
  };
}
