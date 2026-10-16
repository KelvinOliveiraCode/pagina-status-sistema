import type { Incident } from '../types';
import { IncidentCard } from './IncidentCard';

interface IncidentsListProps {
  incidents: Incident[];
}

export function IncidentsList({ incidents }: IncidentsListProps): JSX.Element {
  return (
    <div>
      {incidents.length === 0 ? (
        <div className="empty">Nenhum incidente registrado.</div>
      ) : (
        incidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))
      )}
    </div>
  );
}
