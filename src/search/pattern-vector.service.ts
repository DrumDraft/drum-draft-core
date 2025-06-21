import { Beat } from '@/patterns/types/beat';
import { DrumType } from '@/patterns/types/drum-type';
import { Injectable } from '@nestjs/common';
import { defaultSearchConfig } from './search.config';

export interface PatternEvent {
  t: number;
  instruments: number[];
}

export interface WeightVector {
  [key: string]: number;
}

@Injectable()
export class PatternVectorService {
  private readonly drumTypes: DrumType[] = [
    'Kick',
    'Snare',
    'Tom1',
    'Tom2',
    'Tom3',
    'HiHat',
    'Crash',
    'Ride',
  ];

  /**
   * Преобразует события паттерна в булевую матрицу
   */
  buildMatrix(events: PatternEvent[], n: number, b: number): number[][] {
    const M = Array.from({ length: n }, () => Array(b).fill(0));

    events.forEach(({ t, instruments }) => {
      const j = Math.floor(t * b);
      if (j >= 0 && j < b) {
        instruments.forEach((i) => {
          if (i >= 0 && i < n) {
            M[i][j] = 1;
          }
        });
      }
    });

    return M;
  }

  /**
   * Преобразует паттерн в события
   */
  patternToEvents(beats: Beat[]): PatternEvent[] {
    const events: PatternEvent[] = [];

    beats.forEach((beat) => {
      const activeInstruments: number[] = [];

      this.drumTypes.forEach((drumType, index) => {
        if (beat.instruments[drumType]) {
          activeInstruments.push(index);
        }
      });

      if (activeInstruments.length > 0) {
        events.push({
          t: beat.position,
          instruments: activeInstruments,
        });
      }
    });

    return events;
  }

  /**
   * Вычисляет грув-вектор из булевой матрицы
   */
  computeGrooveVector(M: number[][], weights: number[]): number[] {
    const b = M[0].length;
    const v = Array(b).fill(0);

    for (let i = 0; i < weights.length; i++) {
      for (let j = 0; j < b; j++) {
        v[j] += weights[i] * M[i][j];
      }
    }

    return v;
  }

  /**
   * Получает весовой вектор для инструментов
   */
  getWeightVector(style: string = 'default'): number[] {
    const styleWeights = defaultSearchConfig.weights[style] || defaultSearchConfig.weights.default;
    return this.drumTypes.map((drumType) => styleWeights[drumType] || 1.0);
  }

  /**
   * Преобразует паттерн в грув-вектор
   */
  patternToGrooveVector(beats: Beat[], b: number = 96, style?: string): number[] {
    const events = this.patternToEvents(beats);
    const weights = this.getWeightVector(style);
    const matrix = this.buildMatrix(events, this.drumTypes.length, b);
    return this.computeGrooveVector(matrix, weights);
  }

  /**
   * Проверяет валидность паттерна
   */
  validatePattern(beats: Beat[]): boolean {
    if (!Array.isArray(beats)) return false;

    return beats.every((beat) => {
      if (typeof beat.position !== 'number' || beat.position < 0 || beat.position >= 1) {
        return false;
      }

      if (!beat.instruments || typeof beat.instruments !== 'object') {
        return false;
      }

      return this.drumTypes.every((drumType) => typeof beat.instruments[drumType] === 'boolean');
    });
  }

  /**
   * Получает количество инструментов
   */
  getInstrumentCount(): number {
    return this.drumTypes.length;
  }

  /**
   * Получает список типов барабанов
   */
  getDrumTypes(): DrumType[] {
    return [...this.drumTypes];
  }

  /**
   * Получает доступные стили
   */
  getAvailableStyles(): string[] {
    return Object.keys(defaultSearchConfig.weights);
  }
}
