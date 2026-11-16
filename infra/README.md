# infra/

Scripts Terraform (IaC) do projeto Shortz.

- `main.tf` — container da aplicação a partir da imagem do GHCR, parametrizado por ambiente (`staging` / `production`).
- O estado (state file) **não** deve ser versionado nem ficar em máquina local em uso real; está no `.gitignore`.

Alterações aqui seguem o mesmo fluxo de PR + revisão + CI descrito no PGCS (seção 7).
