interface StatusBadgeProps {
  label: string;
  variant: 'ok' | 'warn' | 'bad';
}

export function StatusBadge({ label, variant }: StatusBadgeProps): JSX.Element {
  return <span className={`status-pill ${variant}`}>{label}</span>;
}
