export interface SearchConfig {
  // LSH параметры
  lsh: {
    k: number; // количество гиперплоскостей (битов в хеше)
    b: number; // количество квантов
  };

  // Параметры поиска
  search: {
    defaultLimit: number;
    minSimilarity: number;
    maxHammingDistance: number;
  };

  // Веса инструментов для разных стилей
  weights: {
    [style: string]: {
      [instrument: string]: number;
    };
  };
}

export const defaultSearchConfig: SearchConfig = {
  lsh: {
    k: 64, // 64 бита в LSH хеше
    b: 96, // 96 квантов (16-е ноты в такте 4/4)
  },

  search: {
    defaultLimit: 50,
    minSimilarity: 0.1,
    maxHammingDistance: 16, // ~25% различий в хеше
  },

  weights: {
    default: {
      Kick: 1.0,
      Snare: 0.8,
      Tom1: 0.6,
      Tom2: 0.6,
      Tom3: 0.6,
      HiHat: 0.4,
      Crash: 0.7,
      Ride: 0.5,
    },

    jazz: {
      Kick: 0.7,
      Snare: 0.9,
      Tom1: 0.8,
      Tom2: 0.8,
      Tom3: 0.8,
      HiHat: 0.6,
      Crash: 0.5,
      Ride: 0.8,
    },

    rock: {
      Kick: 1.0,
      Snare: 0.9,
      Tom1: 0.7,
      Tom2: 0.7,
      Tom3: 0.7,
      HiHat: 0.5,
      Crash: 0.8,
      Ride: 0.6,
    },

    funk: {
      Kick: 0.9,
      Snare: 1.0,
      Tom1: 0.6,
      Tom2: 0.6,
      Tom3: 0.6,
      HiHat: 0.7,
      Crash: 0.6,
      Ride: 0.5,
    },
  },
};
