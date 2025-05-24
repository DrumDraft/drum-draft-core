/**
 * Преобразует строковое значение TTL в миллисекунды
 * @param ttl - Строка в формате "1d", "2h", "30m", "45s"
 * @returns Количество миллисекунд
 * @example
 * ttlToMs('1d') // 86400000
 * ttlToMs('2h') // 7200000
 * ttlToMs('30m') // 1800000
 * ttlToMs('45s') // 45000
 */
export function ttlToMs(ttl: string): number {
  const match = ttl.match(/^(\d+)([dhms])$/);

  if (!match) {
    throw new Error(`Invalid TTL format: ${ttl}. Expected format: "1d", "2h", "30m", "45s"`);
  }

  const [, value, unit] = match;
  const numericValue = parseInt(value, 10);

  switch (unit) {
    case 'd':
      return numericValue * 24 * 60 * 60 * 1000; // days
    case 'h':
      return numericValue * 60 * 60 * 1000; // hours
    case 'm':
      return numericValue * 60 * 1000; // minutes
    case 's':
      return numericValue * 1000; // seconds
    default:
      throw new Error(`Invalid time unit: ${unit}. Expected: d, h, m, s`);
  }
}
