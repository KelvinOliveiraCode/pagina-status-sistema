import { describe, it, expect } from 'vitest';
import { SERVICES } from '../src/data/services';
import type { Service } from '../src/types';

const VALID_STATUSES: Service['status'][] = [
  'operacional',
  'degradado',
  'indisponível',
];

describe('SERVICES (dados sintéticos determinísticos)', () => {
  it('é uma lista não vazia de serviços', () => {
    expect(Array.isArray(SERVICES)).toBe(true);
    expect(SERVICES.length).toBeGreaterThan(0);
  });

  it('todo serviço tem id, nome, status válido, uptime e tempo de resposta', () => {
    for (const service of SERVICES) {
      expect(typeof service.id).toBe('string');
      expect(service.id.length).toBeGreaterThan(0);
      expect(typeof service.name).toBe('string');
      expect(VALID_STATUSES).toContain(service.status);
      expect(typeof service.uptime).toBe('number');
      expect(service.uptime).toBeGreaterThanOrEqual(0);
      expect(service.uptime).toBeLessThanOrEqual(100);
      expect(typeof service.responseTimeMs).toBe('number');
      expect(service.responseTimeMs).toBeGreaterThanOrEqual(0);
    }
  });

  it('não há ids duplicados (determinístico)', () => {
    const ids = SERVICES.map((service) => service.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('contém ao menos um serviço de cada categoria de status', () => {
    const statuses = SERVICES.map((service) => service.status);
    expect(statuses).toContain('operacional');
    expect(statuses).toContain('degradado');
    expect(statuses).toContain('indisponível');
  });
});
