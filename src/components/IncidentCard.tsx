import type { Incident } from '../types';
import { StatusBadge } from './StatusBadge';

const INCIDENT_LABEL: Record<Incident['status'], string> = {
  investigando: 'Investigando',
  identificado: 'Identificado',
  monitorando: 'Monitorando',
  resolvido: 'Resolvido',
};

const INCIDENT_VARIANT: Record<Incident['status'], 'ok' | 'warn' | 'bad'> = {
  investigando: 'warn',
  identificado: 'bad',
  monitorando: 'ok',
  resolvido: 'ok',
};

interface IncidentCardProps {
  incident: Incident;
}

export function IncidentCard({ incident }: IncidentCardProps): JSX.Element {
  return (
    <section className="incident">
      <div className="incident-header">
        <div>
          <div className="incident-title">{incident.title}</div>
          <div className="incident-meta">
            Iniciado em:{' '}
            {new Date(incident.startedAt).toLocaleString('pt-BR')}
          </div>
        </div>
        <StatusBadge
          label={INCIDENT_LABEL[incident.status]}
          variant={INCIDENT_VARIANT[incident.status]}
        />
      </div>
      {incident.updates.length > 0 && (
        <div className="updates">
          {[...incident.updates].reverse().map((update) => (
            <div key={update.id} className="update">
              {new Date(update.createdAt).toLocaleString('pt-BR')} —{' '}
              {update.message}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
