import { DrumType } from '../types';

export const Drums: Record<DrumType, string> = {
  Kick: 'kick',
  Snare: 'snare',
  Tom1: 'tom1',
  Tom2: 'tom2',
  Tom3: 'tom3',
  HiHat: 'hihat',
  Crash: 'crash',
  Ride: 'ride',
};

export type Drums = typeof Drums;
