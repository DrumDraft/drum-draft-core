import { SignatureMeasure as SignatureMeasurePrisma } from 'generated/prisma/client';

export const SignatureMeasureRegistry: Record<SignatureMeasurePrisma, number> = {
  ONE: 1,
  TWO: 2,
  FOUR: 4,
  EIGHT: 8,
  SIXTEEN: 16,
  THIRTY_TWO: 32,
} as const;
