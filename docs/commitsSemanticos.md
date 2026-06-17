# 📋 Commit Semântico - Guia Prático

Um guia rápido para entender e usar **commit semântico** no seu repositório Git.

---

## 🎯 O que é?

Commit semântico é uma forma **padronizada** e **organizada** de escrever mensagens de commit. Facilita entender o histórico do projeto e automatizar processos.

---

## 🎓 Resumo Rápido

| Tipo        | Quando usar         | Exemplo                           |
|-------------|---------------------|-----------------------------------|
| `feat:`     | Funcionalidade nova | `feat: criar função saudacao`     |
| `fix:`      | Corrigir bug        | `fix: corrigir cálculo`           |
| `docs:`     | Documentação        | `docs: atualizar README`          |
| `style:`    | Formatação          | `style: ajustar indentação`       |
| `refactor:` | Reorganizar         | `refactor: simplificar lógica`    |
| `perf:`     | Performance         | `perf: otimizar loop`             |
| `test:`     | Testes              | `test: adicionar testes`          |
| `build:`    | Build/deps          | `build: atualizar package.json`   |
| `ci:`       | CI/CD               | `ci: configurar GitHub Actions`   |
| `chore:`    | Tarefas gerais      | `chore: atualizar .gitignore`     |

---

## Exemplo Simples

```bash
git commit -m "feat: adicionar função de validação"
```

### Exemplo Completo

```bash
git commit -m "fix: corrigir erro em cálculo de idade

O cálculo estava subtraindo um ano a mais do que deveria.
Refatorei a lógica para considerar o mês e dia corretos.

Fixes #123"
```

---

**Dica Final:** Veja o histórico bonito com:

```bash
git log --oneline
```

Feliz committing! 🎉
