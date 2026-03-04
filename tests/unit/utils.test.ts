import { describe, expect, it } from 'vitest';
import { formatIsoDate } from '@/lib/utils';

describe('formatIsoDate', () => {
  it('formats a valid iso date', () => {
    const formatted = formatIsoDate('2026-03-01T10:00:00.000Z');
    expect(formatted.length).toBeGreaterThan(0);
  });

  it('throws for invalid date strings', () => {
    expect(() => formatIsoDate('not-a-date')).toThrow('Invalid date string');
  });
});
