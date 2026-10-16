# página-status-sistema

PT-BR: Página de status do sistema com React 18 e TypeScript — uptime, incidentes e histórico.
EN: System status page with React 18 and TypeScript — uptime, incidents and history.

## Descrição / Description

**PT-BR**
Projeto frontend da área Frontend do plano de 50 projetos. Página pública de status que exibe:
- lista de serviços com status (operacional / degradado / indisponível), uptime e tempo de resposta;
- incidentes com atualizações cronológicas;
- histórico de alterações de status dos serviços.

Os dados são sintéticos e determinísticos (referência de tempo fixa, sem `Date.now()`/`Math.random()`), escritos em TypeScript com tipagem estrita (`strict: true`).

**EN**
Frontend project from the 50-project plan (Frontend area). Public status page that displays:
- list of services with status (operational / degraded / unavailable), uptime and response time;
- incidents with chronological updates;
- history of service status changes.

Data is synthetic and deterministic (fixed time reference, no `Date.now()`/`Math.random()`), written in TypeScript with strict typing (`strict: true`).

## Stack / Pilha

- React 18
- TypeScript (strict)
- Vite (dev/build)
- Vitest (testes / tests)

## Como usar / How to use

### Pré-requisitos / Prerequisites

Node.js 18+ e npm. Neste ambiente: Node v24.13.0, npm 11.6.2.

### Instalação / Installation

```bash
npm install
```

### Executar em desenvolvimento / Run in development

```bash
npm run dev
```

Acesse http://localhost:5173

### Build de produção / Production build

```bash
npm run build
```

Executa `tsc --noEmit` (verificação de tipos) e depois `vite build`.

## Testes / Tests

```bash
npm test
```

Comando usado: `vitest run` (definido no script `test` do `package.json`).

Os testes cobrem a camada de lógica pura (determinística, sem DOM):
- `test/status.test.ts` — `overallStatus`, `worstStatus`, `servicesByStatus`, `averageUptime`;
- `test/services.test.ts` — validação dos dados sintéticos de serviços;
- `test/incidents.test.ts` — validação dos dados sintéticos de incidentes.

Resultado esperado: todos os testes passam.

## Licença / License

MIT

## Autor / Author

Kelvin Oliveira
