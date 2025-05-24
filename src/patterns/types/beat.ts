import { DrumType } from './';

export interface Beat {
  position: number;
  instruments: Record<DrumType, boolean>;
}
