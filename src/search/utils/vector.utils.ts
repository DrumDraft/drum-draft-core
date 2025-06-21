/**
 * Утилиты для работы с векторами
 */

/**
 * Вычисляет L2-норму вектора
 */
export function l2Norm(vector: number[]): number {
  return Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
}

/**
 * Нормализует вектор (L2-нормализация)
 */
export function normalizeVector(vector: number[]): number[] {
  const norm = l2Norm(vector);
  if (norm === 0) return vector.map(() => 0);
  return vector.map((val) => val / norm);
}

/**
 * Вычисляет скалярное произведение двух векторов
 */
export function dotProduct(v1: number[], v2: number[]): number {
  if (v1.length !== v2.length) {
    throw new Error('Vectors must have the same length');
  }
  return v1.reduce((sum, val, i) => sum + val * v2[i], 0);
}

/**
 * Вычисляет косинусную схожесть между двумя векторами
 */
export function cosineSimilarity(v1: number[], v2: number[]): number {
  const norm1 = l2Norm(v1);
  const norm2 = l2Norm(v2);

  if (norm1 === 0 || norm2 === 0) return 0;

  return dotProduct(v1, v2) / (norm1 * norm2);
}

/**
 * Вычисляет евклидово расстояние между двумя векторами
 */
export function euclideanDistance(v1: number[], v2: number[]): number {
  if (v1.length !== v2.length) {
    throw new Error('Vectors must have the same length');
  }

  const sum = v1.reduce((acc, val, i) => acc + Math.pow(val - v2[i], 2), 0);
  return Math.sqrt(sum);
}

/**
 * Вычисляет хеммингово расстояние между двумя битовыми массивами
 */
export function hammingDistance(bits1: number[], bits2: number[]): number {
  if (bits1.length !== bits2.length) {
    throw new Error('Bit arrays must have the same length');
  }

  return bits1.reduce((distance, bit, i) => distance + Math.abs(bit - bits2[i]), 0);
}

/**
 * Генерирует случайное число из нормального распределения (Box-Muller transform)
 */
export function generateNormalRandom(): number {
  const u1 = Math.random();
  const u2 = Math.random();
  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  return z0;
}

/**
 * Генерирует случайный вектор заданной длины из нормального распределения
 */
export function generateRandomVector(length: number): number[] {
  return Array.from({ length }, () => generateNormalRandom());
}

/**
 * Создает матрицу заданного размера, заполненную нулями
 */
export function createZeroMatrix(rows: number, cols: number): number[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

/**
 * Транспонирует матрицу
 */
export function transposeMatrix(matrix: number[][]): number[][] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = createZeroMatrix(cols, rows);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
}
