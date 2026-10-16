import type { Service, ServiceStatus } from '../types';

const STATUS_SEVERITY: Record<ServiceStatus, number> = {
  operacional: 0,
  degradado: 1,
  'indisponível': 2,
};

const VARIANT_BY_STATUS: Record<ServiceStatus, 'ok' | 'warn' | 'bad'> = {
  operacional: 'ok',
  degradado: 'warn',
  'indisponível': 'bad',
};

const LABEL_BY_STATUS: Record<ServiceStatus, string> = {
  operacional: 'Operacional',
  degradado: 'Degradado',
  'indisponível': 'Indisponível',
};

export function worstStatus(statuses: ServiceStatus[]): ServiceStatus {
  let worst: ServiceStatus = 'operacional';
  for (const status of statuses) {
    if (STATUS_SEVERITY[status] > STATUS_SEVERITY[worst]) {
      worst = status;
    }
  }
  return worst;
}

export function overallStatus(services: Service[]): ServiceStatus {
  if (services.length === 0) {
    return 'operacional';
  }
  return worstStatus(services.map((service) => service.status));
}

export function servicesByStatus(
  services: Service[],
  status: ServiceStatus,
): Service[] {
  return services.filter((service) => service.status === status);
}

export function averageUptime(services: Service[]): number {
  if (services.length === 0) {
    return 100;
  }
  const sum = services.reduce((acc, service) => acc + service.uptime, 0);
  return Math.round((sum / services.length) * 100) / 100;
}

export function statusVariant(status: ServiceStatus): 'ok' | 'warn' | 'bad' {
  return VARIANT_BY_STATUS[status];
}

export function statusLabel(status: ServiceStatus): string {
  return LABEL_BY_STATUS[status];
}
