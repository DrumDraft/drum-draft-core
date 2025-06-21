

export type ValidSignatureMeasure = 4 | 8;

export const SignatureMeasureRegistry: Record<ValidSignatureMeasure, number> = {
  4: 4,
  8: 8,
} as const;
