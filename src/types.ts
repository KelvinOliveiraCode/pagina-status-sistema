export type ServiceStatus = 'operacional' | 'degradado' | 'indisponível';

export interface Service {
  id: string;
  name: string;
  status: ServiceStatus;
  uptime: number; // percentual 0 a 100
  responseTimeMs: number;
}

export type IncidentStatus = 'investigando' | 'identificado' | 'monitorando' | 'resolvido';

export interface IncidentUpdate {
  id: string;
  message: string;
  status: IncidentStatus;
  createdAt: string; // ISO 8601
}

export interface Incident {
  id: string;
  title: string;
  status: IncidentStatus;
  startedAt: string; // ISO 8601
  resolvedAt?: string; // ISO 8601
  serviceIds: string[];
  updates: IncidentUpdate[];
}

export interface HistoryEntry {
  id: string;
  serviceId: string;
  timestamp: string; // ISO 8601
  status: ServiceStatus;
}
