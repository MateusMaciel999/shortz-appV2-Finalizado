# Shortz — Plataforma de Vídeos Curtos e Engajadores

Aplicação web para publicação e consumo de vídeos curtos, com cadastro, login, sessão autenticada e edição de perfil.
Projeto individual da disciplina de **Gerenciamento, Configuração e Processos de Software** (Católica SC).

**Autor:** Mateus Silveira Maciel

## Documentação de GCS

- 📄 **Plano de Gerenciamento de Configuração (PGCS) — Enfoque DevOps:** [`docs/PGCS-Shortz.pdf`](docs/PGCS-Shortz.pdf)
- 📸 **Evidências (push recusado na `main`, PR com revisão, environments):** [`docs/evidencias/`](docs/evidencias/)

## Stack

Node.js · Express · Sequelize (MySQL) · EJS · Docker · GitHub Actions

## Estrutura do repositório

```
/bin                  ponto de entrada do servidor HTTP (www)
/config               configuração do banco (Sequelize)
/middlewares          autenticação por sessão e upload de arquivos
/modules/user         módulo de usuário (controller + model)
/public               arquivos estáticos
/routes               rotas Express
/views                templates EJS
/tests                testes automatizados
/infra                Infraestrutura como Código (Terraform)
/docs                 PGCS e evidências
/.github/workflows    pipelines de CI (ci.yml) e CD (cd.yml)
Dockerfile, docker-compose.yml, .env.example   na raiz
```

## Como rodar localmente

```bash
cp .env.example .env        # ajuste os valores
npm ci
npm run dev                 # ou: npm start
```

Com Docker (aplicação + MySQL):

```bash
cp .env.example .env
docker compose up --build
```

A aplicação sobe em http://localhost:3000.

## Testes

```bash
npm test
```

## Fluxo de trabalho (resumo do PGCS)

1. Abrir uma Issue → criar branch `feature/<descrição-curta>` a partir da `main`.
2. Commits no padrão *Conventional Commits* (`feat(perfil): ...`, `fix(auth): ...`).
3. Abrir Pull Request → o pipeline de **CI** roda automaticamente.
4. Merge somente com **CI verde** e **1 aprovação** de outro colaborador (a `main` não aceita push direto).
5. O merge na `main` dispara o **CD**: imagem publicada no GHCR → deploy em **staging** → aprovação manual → deploy em **production** + tag de release (SemVer).

## Ambientes

| Ambiente | Gatilho | Proteção |
|---|---|---|
| `staging` | merge na `main` | automático |
| `production` | após staging | **revisor obrigatório** (Mateus Silveira Maciel) |
