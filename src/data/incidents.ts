import type { Incident, IncidentStatus, IncidentUpdate } from '../types';

// Referência de tempo fixa: dados determinísticos, nunca Date.now().
const NOW = new Date('2026-10-16T12:00:00Z');

function iso(offsetMinutes: number): string {
  return new Date(NOW.getTime() + offsetMinutes * 60000).toISOString();
}

function update(
  id: string,
  message: string,
  status: IncidentStatus,
  offsetMinutes: number,
): IncidentUpdate {
  return { id, message, status, createdAt: iso(offsetMinutes) };
}

export const INCIDENTS: Incident[] = [
  {
    id: 'inc-001',
    title: 'Lentidão na API Gateway',
    status: 'resolvido',
    startedAt: iso(-120),
    resolvedAt: iso(-60),
    serviceIds: ['api-gateway'],
    updates: [
      update(
        'u1',
        'Investigando aumento de latência.',
        'investigando',
        -120,
      ),
      update(
        'u2',
        'Causa identificada: sobrecarga de conexões.',
        'identificado',
        -90,
      ),
      update(
        'u3',
        'Serviço restaurado e em monitoramento.',
        'monitorando',
        -70,
      ),
      update('u4', 'Incidente resolvido.', 'resolvido', -60),
    ],
  },
  {
    id: 'inc-002',
    title: 'Falha intermitente no CDN de Assets',
    status: 'investigando',
    startedAt: iso(-30),
    serviceIds: ['cdn'],
    updates: [
      update(
        'u5',
        'Recebemos relatos de falha ao carregar assets.',
        'investigando',
        -30,
      ),
    ],
  },
];
