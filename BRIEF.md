# BRIEF — página-status-sistema

## Entregas / Deliverables

Página de status do sistema (React 18 + TypeScript) com escopo MVP: uptime, incidentes e histórico.

Arquivos criados:
- `package.json` — dependências React 18, TypeScript, Vite, Vitest; scripts dev/build/test.
- `tsconfig.json` — TypeScript strict (`strict: true`, sem `any`).
- `vite.config.ts` — Vite + plugin React + config Vitest (`environment: node`).
- `index.html` — ponto de entrada com div `#root`.
- `src/index.css` — estilos da página (cores por status, layout responsivo).
- `src/types.ts` — tipos discriminados (`ServiceStatus`, `IncidentStatus`, `Service`, `Incident`, `HistoryEntry`).
- `src/logic/status.ts` — lógica pura e determinística (`overallStatus`, `worstStatus`, `servicesByStatus`, `averageUptime`).
- `src/data/services.ts` — lista sintética de 5 serviços (IDs únicos, não duplicados).
- `src/data/incidents.ts` — 2 incidentes com atualizações cronológicas (tempo fixo, sem `Date.now()`).
- `src/data/history.ts` — 6 entradas de histórico (tempo fixo, sem `Date.now()`).
- `src/components/StatusBadge.tsx` — crachá de status genérico (label + variante ok/warn/bad).
- `src/components/ServiceCard.tsx` — card de serviço com status, uptime e tempo de resposta.
- `src/components/ServicesList.tsx` — lista de serviços (com filtro opcional por status).
- `src/components/IncidentCard.tsx` — card de incidente com atualizações.
- `src/components/IncidentsList.tsx` — lista de incidentes.
- `src/components/HistoryTable.tsx` — tabela de histórico ordenada por data (descendente).
- `src/components/StatusPage.tsx` — composição principal (status geral, serviços, incidentes, histórico).
- `src/App.tsx` — raiz da aplicação.
- `src/main.tsx` — ponto de entrada React 18 (`createRoot`).
- `test/status.test.ts` — testes da lógica de status (vitest).
- `test/services.test.ts` — testes dos dados de serviços.
- `test/incidents.test.ts` — testes dos dados de incidentes.
- `README.md` — documentação bilíngue PT-BR + EN (título, descrição, como usar, testes, licença MIT, autor Kelvin Oliveira).
- `BRIEF.md` — este arquivo.

## Critérios de aceitação / Acceptance criteria

- [x] Status exibe corretamente (geral + por serviço, com cores por status).
- [x] Testes passam (`npm test` → vitest run, todos verde).
- [x] README PT/EN completo.
- [x] Dados sintéticos determinísticos (referência de tempo fixa, não `Date.now()`/`Math.random()`).
- [x] Código limpo, tipado (TypeScript strict), sem `any`, sem `console.log` de debug.

## Como verificar / How to verify

```bash
# 1. Instalar dependências
npm install

# 2. Verificar tipos e build (gate obrigatório)
npm run build

# 3. Executar testes
npm test
```

Comando de teste: `vitest run`.

Resultado esperado:
- `npm run build` → sem erros de TypeScript (`tsc --noEmit` limpo) + build do Vite OK.
- `npm test` → todos os testes passam (9 testes: 5 status + 2 services + 2 incidents).

Ambiente: Node v24.13.0, npm 11.6.2, vitest disponível via npx (instalado localmente pelo `npm install`).

Autor: Kelvin Oliveira — Licença MIT.
