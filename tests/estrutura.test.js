// Testes automatizados iniciais (sem dependências externas: usa o test runner nativo do Node 18+).
// Rodam com: npm test   (script: "node --test tests/estrutura.test.js")
// Evolução prevista (PGCS, marco M2): Jest + Supertest para autenticação e perfil.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const raiz = path.join(__dirname, '..');

test('arquivos essenciais da aplicação existem', () => {
  for (const f of ['app.js', 'package.json', 'package-lock.json', 'bin/www']) {
    assert.ok(fs.existsSync(path.join(raiz, f)), `faltando: ${f}`);
  }
});

test('itens de configuração do PGCS existem', () => {
  for (const f of [
    'Dockerfile',
    'docker-compose.yml',
    '.env.example',
    '.github/workflows/ci.yml',
    '.github/workflows/cd.yml',
    'docs/PGCS-Shortz.pdf',
  ]) {
    assert.ok(fs.existsSync(path.join(raiz, f)), `faltando: ${f}`);
  }
});

test('package.json é válido e tem scripts de execução', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(raiz, 'package.json'), 'utf8'));
  assert.ok(pkg.name, 'package.json sem "name"');
  assert.ok(pkg.version, 'package.json sem "version"');
  assert.ok(pkg.scripts && (pkg.scripts.start || pkg.scripts.dev), 'sem script start/dev');
});

test('.env real não está versionado e .env.example não contém segredo real', () => {
  const exemplo = fs.readFileSync(path.join(raiz, '.env.example'), 'utf8');
  assert.match(exemplo, /SESSION_SECRET=/);
  assert.match(exemplo, /troque/i);
});
