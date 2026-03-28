# Don Salerno — site (Vite + React)

Site institucional e cardápio da Don Salerno: rotas com React Router, carrinho com persistência no navegador (Zustand + `localStorage`) e build estático pronto para hospedagem no **Netlify**.

## Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **React Router 7**
- **Zustand** (carrinho, reviews, auth onde aplicável)

## Pré-requisitos

- **Node.js 20** (recomendado; o Netlify usa `NODE_VERSION = "20"` em `netlify.toml`)

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço que o Vite exibir (geralmente `http://localhost:5173`).

### Outros scripts

| Comando        | Descrição                          |
| -------------- | ---------------------------------- |
| `npm run build`   | Typecheck (`tsc -b`) + build de produção em `dist/` |
| `npm run preview` | Servir a pasta `dist` localmente |
| `npm run lint`    | ESLint                           |
| `npm test`        | Jest                             |

## Variáveis de ambiente (opcional)

Crie um arquivo `.env` na raiz do projeto (não commite segredos):

| Variável                 | Uso |
| ------------------------ | --- |
| `VITE_IFOOD_STORE_URL`   | URL do botão/link iFood no header. Se vazia, usa o fallback padrão definido no código. |

No Netlify: **Site configuration → Environment variables**.

## Deploy no Netlify

Este repositório já inclui `netlify.toml` na raiz do app com:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node:** 20

Os redirects (SPA + URLs antigas do cardápio) estão em `public/_redirects` e são copiados para `dist` no build.

### Opção A — Netlify UI (recomendado)

1. Acesse [Netlify](https://www.netlify.com/) e faça login.
2. **Add new site → Import an existing project** e conecte o Git (GitHub/GitLab/Bitbucket).
3. Escolha o repositório e configure:
   - **Base directory:** deixe vazio se a raiz do Git for esta pasta (`don-salerno`). Se o app estiver em subpasta, informe `don-salerno`.
   - **Build command:** `npm run build` (já definido no `netlify.toml` se a base for a pasta do app).
   - **Publish directory:** `dist`.
4. Adicione `VITE_IFOOD_STORE_URL` nas variáveis de ambiente, se quiser um link específico da loja.
5. Faça o deploy. A cada push na branch configurada, o site atualiza.

### Opção B — Netlify CLI

Na pasta do projeto:

```bash
npm install
npm run build
npx netlify deploy --prod --dir=dist
```

Na primeira vez o CLI pede login e vinculação ao site.

### Rotas do app (React Router)

Todas as rotas (ex.: `/produto/...`, `/carrinho`, `/cardapio/...`) precisam cair no `index.html`. Isso já está coberto por `public/_redirects` e reforçado em `netlify.toml`.

## Estrutura útil

- `src/pages/` — páginas (Home, Cardápio, Produto, Carrinho, etc.)
- `src/components/` — layout, header, etc.
- `src/stores/useCart.ts` — estado do carrinho e cupons de demonstração
- `public/_redirects` — redirects Netlify após o build

## Projeto espelho (`don-salerno-publico`)

Existe uma variante em `../don-salerno-publico` com a mesma stack e as mesmas instruções de build e deploy: use **base directory** `don-salerno-publico` se publicar esse app em um site Netlify separado.
