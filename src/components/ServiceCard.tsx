import type { Service } from '../types';
import { StatusBadge } from './StatusBadge';
import { statusLabel, statusVariant } from '../logic/status';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps): JSX.Element {
  return (
    <article className="card">
      <div className="card-header">
        <span className="card-title">{service.name}</span>
        <StatusBadge
          label={statusLabel(service.status)}
          variant={statusVariant(service.status)}
        />
      </div>
      <div className="card-meta">
        <span>Uptime: {service.uptime.toFixed(2)}%</span>
        <span>Resposta: {service.responseTimeMs} ms</span>
      </div>
    </article>
  );
}
