import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'api-gateway',
    name: 'API Gateway',
    status: 'operacional',
    uptime: 99.99,
    responseTimeMs: 45,
  },
  {
    id: 'auth-service',
    name: 'Serviço de Autenticação',
    status: 'operacional',
    uptime: 99.95,
    responseTimeMs: 120,
  },
  {
    id: 'banco-dados',
    name: 'Banco de Dados',
    status: 'degradado',
    uptime: 98.70,
    responseTimeMs: 310,
  },
  {
    id: 'fila-eventos',
    name: 'Fila de Eventos',
    status: 'operacional',
    uptime: 99.90,
    responseTimeMs: 80,
  },
  {
    id: 'cdn',
    name: 'CDN de Assets',
    status: 'indisponível',
    uptime: 95.40,
    responseTimeMs: 500,
  },
];

export const SERVICES_BY_ID: Record<string, Service> = Object.fromEntries(
  SERVICES.map((service) => [service.id, service]),
);
