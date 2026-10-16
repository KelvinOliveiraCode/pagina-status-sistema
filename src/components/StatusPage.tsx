import type { ServiceStatus } from '../types';
import {
  overallStatus,
  servicesByStatus,
  averageUptime,
} from '../logic/status';
import { SERVICES } from '../data/services';
import { INCIDENTS } from '../data/incidents';
import { HISTORY } from '../data/history';
import { ServicesList } from './ServicesList';
import { IncidentsList } from './IncidentsList';
import { HistoryTable } from './HistoryTable';
import { StatusBadge } from './StatusBadge';

const OVERALL_CONFIG: Record<ServiceStatus, { label: string; variant: 'ok' | 'warn' | 'bad' }> = {
  operacional: { label: 'Todos os sistemas operacionais', variant: 'ok' },
  degradado: { label: 'Sistema degradado', variant: 'warn' },
  'indisponível': { label: 'Sistema indisponível', variant: 'bad' },
};

export function StatusPage(): JSX.Element {
  const overall = overallStatus(SERVICES);
  const uptime = averageUptime(SERVICES);
  const indisponiveis = servicesByStatus(SERVICES, 'indisponível');
  const degradados = servicesByStatus(SERVICES, 'degradado');
  const { label: overallLabel, variant: overallVariant } = OVERALL_CONFIG[overall];

  return (
    <div className="page">
      <div className="header">
        <div>
          <h1>Status do Sistema</h1>
          <p>
            Página pública de status — uptime, incidentes e histórico.
          </p>
        </div>
        <div>
          <StatusBadge label={overallLabel} variant={overallVariant} />
          <span style={{ marginLeft: 10, fontSize: '0.875rem', color: '#64748b' }}>
            Uptime médio: {uptime.toFixed(2)}%
          </span>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">Serviços</h2>
        <p>
          {SERVICES.length} serviços monitorados ·
          {indisponiveis.length} indisponível(is) ·
          {degradados.length} degradado(s)
        </p>
        <ServicesList services={SERVICES} />
      </section>

      <section className="section">
        <h2 className="section-title">Incidentes</h2>
        <IncidentsList incidents={INCIDENTS} />
      </section>

      <section className="section">
        <h2 className="section-title">Histórico</h2>
        <HistoryTable history={HISTORY} />
      </section>

      <footer className="footer">
        Status page gerada com dados sintéticos determinísticos.{' '}
        <a
          href="https://github.com/KelvinOliveira"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kelvin Oliveira
        </a>
      </footer>
    </div>
  );
}

export default StatusPage;
