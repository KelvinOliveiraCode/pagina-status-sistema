import { describe, it, expect } from 'vitest';
import {
  overallStatus,
  worstStatus,
  servicesByStatus,
  averageUptime,
} from '../src/logic/status';
import type { Service, ServiceStatus } from '../src/types';

const makeService = (overrides: Partial<Service> = {}): Service => ({
  id: 's1',
  name: 'Serviço Teste',
  status: 'operacional',
  uptime: 99.9,
  responseTimeMs: 50,
  ...overrides,
});

describe('overallStatus', () => {
  it('retorna operacional quando todos estão operacionais', () => {
    const services = [
      makeService(),
      makeService({ id: 's2', status: 'operacional' }),
    ];
    expect(overallStatus(services)).toBe('operacional');
  });

  it('retorna degradado quando há um degradado e nenhum indisponível', () => {
    const services = [
      makeService(),
      makeService({ id: 's2', status: 'degradado' }),
    ];
    expect(overallStatus(services)).toBe('degradado');
  });

  it('retorna indisponível quando há um indisponível (severidade mais alta)', () => {
    const services = [
      makeService(),
      makeService({ id: 's2', status: 'indisponível' }),
    ];
    expect(overallStatus(services)).toBe('indisponível');
  });

  it('retorna operacional para lista vazia', () => {
    expect(overallStatus([])).toBe('operacional');
  });
});

describe('servicesByStatus', () => {
  it('filtra serviços por status informado', () => {
    const services = [
      makeService({ id: 's1', status: 'operacional' }),
      makeService({ id: 's2', status: 'degradado' }),
      makeService({ id: 's3', status: 'operacional' }),
    ];
    const operacionais = servicesByStatus(services, 'operacional');
    expect(operacionais).toHaveLength(2);
    expect(operacionais.map((s) => s.id)).toEqual(['s1', 's3']);
  });
});

describe('averageUptime', () => {
  it('calcula a média de uptime dos serviços', () => {
    const services = [
      makeService({ id: 's1', uptime: 100 }),
      makeService({ id: 's2', uptime: 98 }),
    ];
    expect(averageUptime(services)).toBe(99);
  });

  it('retorna 100 para lista vazia', () => {
    expect(averageUptime([])).toBe(100);
  });
});

describe('worstStatus', () => {
  it('ordena por severidade: indisponível > degradado > operacional', () => {
    expect(worstStatus(['operacional', 'degradado'])).toBe('degradado');
    expect(worstStatus(['operacional', 'indisponível'])).toBe('indisponível');
    expect(worstStatus(['degradado', 'indisponível'])).toBe('indisponível');
    expect(worstStatus(['operacional'])).toBe('operacional');
  });
});
