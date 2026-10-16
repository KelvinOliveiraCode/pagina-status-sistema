import type { Service, ServiceStatus } from '../types';
import { ServiceCard } from './ServiceCard';

interface ServicesListProps {
  services: Service[];
  filter?: ServiceStatus;
}

export function ServicesList({
  services,
  filter,
}: ServicesListProps): JSX.Element {
  const displayed = filter
    ? services.filter((service) => service.status === filter)
    : services;

  return (
    <div className="grid">
      {displayed.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
      {displayed.length === 0 && (
        <div className="empty">Nenhum serviço encontrado.</div>
      )}
    </div>
  );
}
