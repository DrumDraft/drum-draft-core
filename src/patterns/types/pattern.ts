import { SignatureMeasure } from '../../../generated/prisma/client/index.d';
import { Beat } from './beat';

export interface Pattern {
  id: string;
  signatureBits: number;
  signatureMeasure: SignatureMeasure;
  beats: Beat[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
