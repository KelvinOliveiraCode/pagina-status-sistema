import type { HistoryEntry, ServiceStatus } from '../types';

// Referência de tempo fixa: dados determinísticos, nunca Date.now().
const NOW = new Date('2026-10-16T12:00:00Z');

function iso(offsetMinutes: number): string {
  return new Date(NOW.getTime() + offsetMinutes * 60000).toISOString();
}

function entry(
  id: string,
  serviceId: string,
  status: ServiceStatus,
  offsetMinutes: number,
): HistoryEntry {
  return { id, serviceId, status, timestamp: iso(offsetMinutes) };
}

export const HISTORY: HistoryEntry[] = [
  entry('h1', 'banco-dados', 'degradado', -180),
  entry('h2', 'cdn', 'indisponível', -150),
  entry('h3', 'api-gateway', 'operacional', -120),
  entry('h4', 'banco-dados', 'operacional', -90),
  entry('h5', 'auth-service', 'operacional', -60),
  entry('h6', 'cdn', 'indisponível', -30),
];
