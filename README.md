# Portfólio — Willian Martinez

Portfólio profissional em **Next.js (App Router) + React + TypeScript + Tailwind CSS + Motion + Lucide**, pronto para **Vercel** e exportável para **GitHub Pages**.

## URLs

| Ambiente | URL |
| --- | --- |
| Repositório | https://github.com/Willianmart/Portifolio-Will |
| GitHub Pages (após habilitar Actions) | https://willianmart.github.io/Portifolio-Will/ |
| Vercel | Importe este repo no [Vercel](https://vercel.com/new) |

## Contatos (fonte: `src/data/profile.ts`)

- WhatsApp: [+55 49 99821-9362](https://wa.me/5549998219362)
- E-mail: [willexus.w97@gmail.com](mailto:willexus.w97@gmail.com)
- GitHub: [Willianmart](https://github.com/Willianmart)
- LinkedIn: [willian-martinez-31158a39a](https://www.linkedin.com/in/willian-martinez-31158a39a)

## Desenvolvimento

```bash
npm install
npm run dev
```

```bash
npm run build
npm start
```

### Build estático (GitHub Pages)

```bash
npm run build:pages
# saída em /out com basePath /Portifolio-Will
```

## Variáveis de ambiente

Veja `.env.example`.

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical / OG / sitemap |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Formulário de contato real (Web3Forms) |
| `GITHUB_PAGES=true` | Ativa `output: 'export'` + `basePath` `/Portifolio-Will` |
| `NEXT_PUBLIC_BASE_PATH` | Prefixo público opcional (Pages) |

Sem a chave Web3Forms, o formulário **não finge sucesso**: mostra fallback honesto com mailto e WhatsApp.

## Deploy

### Vercel (recomendado)

1. Importar `Willianmart/Portifolio-Will`
2. Framework: Next.js (detectado)
3. **Não** definir `GITHUB_PAGES`
4. Definir `NEXT_PUBLIC_SITE_URL` com o domínio Vercel
5. Opcional: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

### GitHub Pages

1. Settings → Pages → **Source: GitHub Actions**
2. O workflow `.github/workflows/pages.yml` gera o export estático e publica
3. Se Actions falhar por permissão, habilite Pages manualmente ou rode o workflow após conceder `pages: write`

## Conteúdo real vs. status honesto

| Item | Status |
| --- | --- |
| Identidade, contatos, LinkedIn, formação em andamento | Real |
| Alysense (cofundador CEO/CTO), VILA, IA empresas, C# acadêmico | Real, com status explícito |
| VILA | Validação / preparação para piloto — **não** produto comercial amplamente implantado |
| IA para empresas | Pesquisa / PoC — **não** produto concluído |
| Projetos futuros | Área vazia de propósito (sem inventar) |

## Estrutura

```
src/app/                 # App Router
src/components/          # layout, sections, ui, animations
src/data/                # profile, projects, experience, skills
public/images/           # avatar SVG e OG
```

UI em **pt-BR**. Strings centralizadas em `src/data` para i18n futuro — **sem** seletor de idioma.
