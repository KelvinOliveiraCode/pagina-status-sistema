import { describe, it, expect } from 'vitest';
import { INCIDENTS } from '../src/data/incidents';
import type { Incident, IncidentStatus } from '../src/types';

const VALID_STATUSES: IncidentStatus[] = [
  'investigando',
  'identificado',
  'monitorando',
  'resolvido',
];

describe('INCIDENTS (dados sintéticos determinísticos)', () => {
  it('é uma lista não vazia de incidentes', () => {
    expect(Array.isArray(INCIDENTS)).toBe(true);
    expect(INCIDENTS.length).toBeGreaterThan(0);
  });

  it('todo incidente tem campos obrigatórios com tipos válidos', () => {
    for (const incident of INCIDENTS) {
      expect(typeof incident.id).toBe('string');
      expect(incident.id.length).toBeGreaterThan(0);
      expect(typeof incident.title).toBe('string');
      expect(VALID_STATUSES).toContain(incident.status);
      expect(typeof incident.startedAt).toBe('string');
      expect(new Date(incident.startedAt).getTime()).not.toBeNaN();
      if (incident.resolvedAt) {
        expect(new Date(incident.resolvedAt).getTime()).not.toBeNaN();
      }
      expect(Array.isArray(incident.serviceIds)).toBe(true);
      expect(Array.isArray(incident.updates)).toBe(true);
      expect(incident.updates.length).toBeGreaterThan(0);
      for (const update of incident.updates) {
        expect(typeof update.id).toBe('string');
        expect(typeof update.message).toBe('string');
        expect(VALID_STATUSES).toContain(update.status);
        expect(typeof update.createdAt).toBe('string');
        expect(new Date(update.createdAt).getTime()).not.toBeNaN();
      }
    }
  });

  it('não há ids de incidente duplicados', () => {
    const ids = INCIDENTS.map((incident) => incident.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
