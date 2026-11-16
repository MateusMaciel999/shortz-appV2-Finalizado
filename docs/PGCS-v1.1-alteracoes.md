# PGCS — Alterações da versão 1.1

Textos prontos para colar no PGCS (no Word/Google Docs de origem), depois exporte de novo para `docs/PGCS-Shortz.pdf`.

## Histórico de revisões (nova linha)

| Data | Versão | Descrição | Autor |
|---|---|---|---|
| 16/11/2026 | 1.1 | Inclusão do revisor colaborador (par de revisão), proteção da branch `main`, environments `staging` e `production` com revisor obrigatório e seção de evidências. | Mateus Silveira Maciel |

## Capa — Repositório principal

https://github.com/MateusMaciel999/shortz-appV2-Finalizado

## 5.2 Política de Pull Request e Revisão de Código (acrescentar)

A branch `main` está protegida: push direto é recusado e todo merge exige Pull Request com **1 aprovação** do colaborador revisor **@<usuario-do-colega>** (papel *Write* no repositório) e pipeline de CI verde. Nem o dono do repositório pode burlar a regra (opção "Do not allow bypassing" ativa).

## 8.2 Comitê de Controle de Mudança (acrescentar)

Para mudanças de alto risco, além do registro no Pull Request, o deploy em **production** exige aprovação do revisor obrigatório do environment (Mateus Silveira Maciel).

## 3.2 Ambientes e Infraestrutura (acrescentar)

Os ambientes `staging` e `production` estão configurados como *GitHub Environments*. O environment `production` possui **revisor obrigatório** (Mateus Silveira Maciel): o job de deploy em produção só executa após a aprovação.

## Nova seção — Evidências

As evidências (push direto recusado na `main`, colaborador com acesso de escrita, Pull Request aprovado e configuração dos environments) estão em `docs/evidencias/` do repositório.

## Ajustes de nomenclatura

- Substituir `shortz-app` por `shortz-appV2-Finalizado` onde se referir ao repositório.
- Imagem de container de exemplo: `ghcr.io/mateusmaciel999/shortz-appv2-finalizado:1.0.0`.
