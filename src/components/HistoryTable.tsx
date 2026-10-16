import type { HistoryEntry, ServiceStatus } from '../types';
import { StatusBadge } from './StatusBadge';

const HISTORY_LABEL: Record<ServiceStatus, string> = {
  operacional: 'Operacional',
  degradado: 'Degradado',
  'indisponível': 'Indisponível',
};

const HISTORY_VARIANT: Record<ServiceStatus, 'ok' | 'warn' | 'bad'> = {
  operacional: 'ok',
  degradado: 'warn',
  'indisponível': 'bad',
};

interface HistoryTableProps {
  history: HistoryEntry[];
}

export function HistoryTable({ history }: HistoryTableProps): JSX.Element {
  const ordered = [...history].sort(
    (a, b) => b.timestamp.localeCompare(a.timestamp),
  );

  return (
    <table className="history-table">
      <thead>
        <tr>
          <th>Data/Hora</th>
          <th>Serviço</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {ordered.map((entry) => (
          <tr key={entry.id}>
            <td>{new Date(entry.timestamp).toLocaleString('pt-BR')}</td>
            <td>{entry.serviceId}</td>
            <td>
              <StatusBadge
                label={HISTORY_LABEL[entry.status]}
                variant={HISTORY_VARIANT[entry.status]}
              />
            </td>
          </tr>
        ))}
        {ordered.length === 0 && (
          <tr>
            <td colSpan={3} className="empty">
              Sem histórico disponível.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
