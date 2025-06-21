import { Injectable } from '@nestjs/common';

export interface HyperplaneConfig {
  k: number;
  b: number;
}

@Injectable()
export class LshService {
  private hyperplanes: number[][] = [];
  private config: HyperplaneConfig = {
    k: 64,
    b: 96,
  };

  constructor() {
    this.generateHyperplanes();
  }

  private generateHyperplanes(): void {
    this.hyperplanes = [];
    for (let i = 0; i < this.config.k; i++) {
      const hyperplane = [];
      for (let j = 0; j < this.config.b; j++) {
        hyperplane.push(this.generateNormalRandom());
      }
      this.hyperplanes.push(hyperplane);
    }
  }

  private generateNormalRandom(): number {
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0;
  }

  private l2Norm(vector: number[]): number {
    return Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
  }

  normalizeVector(vector: number[]): number[] {
    const norm = this.l2Norm(vector);
    if (norm === 0) return vector.map(() => 0);
    return vector.map((val) => val / norm);
  }

  dotProduct(v1: number[], v2: number[]): number {
    if (v1.length !== v2.length) {
      throw new Error('Vectors must have the same length');
    }
    return v1.reduce((sum, val, i) => sum + val * v2[i], 0);
  }

  generateHash(normalizedVector: number[]): number[] {
    if (normalizedVector.length !== this.config.b) {
      throw new Error(`Vector length must be ${this.config.b}`);
    }

    const hash = [];
    for (let i = 0; i < this.config.k; i++) {
      const dot = this.dotProduct(this.hyperplanes[i], normalizedVector);
      hash.push(dot >= 0 ? 1 : 0);
    }
    return hash;
  }

  cosineSimilarity(v1: number[], v2: number[]): number {
    return this.dotProduct(v1, v2);
  }

  hammingDistance(hash1: number[], hash2: number[]): number {
    if (hash1.length !== hash2.length) {
      throw new Error('Hashes must have the same length');
    }
    return hash1.reduce((distance, bit, i) => distance + Math.abs(bit - hash2[i]), 0);
  }

  getConfig(): HyperplaneConfig {
    return { ...this.config };
  }

  setConfig(config: Partial<HyperplaneConfig>): void {
    this.config = { ...this.config, ...config };
    this.generateHyperplanes();
  }
}
