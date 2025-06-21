import { Beat } from './beat';

export interface Pattern {
  id: number;
  signatureBits: number;
  signatureMeasure: number;
  beats: Beat[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
