# Victor Portfolio - Documentação de Agente

## 📋 Visão Geral

O **Victor Portfolio** é um portfólio pessoal moderno construído com **Next.js 15**, desenvolvido para apresentar projetos e habilidades de desenvolvimento front-end. O projeto é otimizado para performance, acessibilidade e experiência visual envolvente.

**Versão:** 0.2.0  
**Autor:** Victor Araújo  
**Tipo de Projeto:** Aplicação Web Next.js  
**Status:** Refatorado e em produção

---

## 🏗️ Arquitetura do Projeto

### Stack Tecnológico

- **Framework:** Next.js 15.2.4
- **Runtime:** React 19.1.0
- **Linguagem:** TypeScript 5.8.2
- **Estilização:** CSS Modules
- **Animações:** Framer Motion 12.6.2
- **UI Components:** Radix UI Icons
- **Fonte:** Josefin Sans (Google Fonts)

### Estrutura de Diretórios

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Root layout com metadata
│   ├── page.tsx           # Home - galeria de projetos
│   ├── globals.css        # Estilos globais
│   ├── about/             # Página sobre
│   └── app/[id]/          # Páginas dinâmicas dos projetos
│
├── components/            # Componentes reutilizáveis
│   ├── Card/              # Card dos projetos
│   ├── CardApp/           # Componente de detalhe de app
│   ├── Footer/            # Rodapé
│   ├── Header/            # Cabeçalho
│   ├── Social/            # Links sociais
│   └── Title/             # Componentes de título animados
│       ├── AnimeText.tsx  # Texto com animação
│       ├── CursorBlinker.tsx
│       └── Title.tsx
│
├── data/                  # Dados estáticos
│   └── appData.ts        # Array com informações dos projetos

public/
├── img/
│   ├── AppLogos/         # Logos dos apps
│   ├── Apps/             # Screenshots dos projetos
│   └── Icons/            # Ícones gerais
```

---

## 🎯 Funcionalidades Principais

### 1. **Homepage (Galeria de Projetos)**

- Exibe cards animados com todos os projetos
- Usa Framer Motion para efeitos de entrada e hover
- Layout responsivo em grid
- Links diretos para cada projeto

### 2. **Páginas de Detalhe**

- Rotas dinâmicas para cada projeto: `/app/[id]`
- Informações detalhadas de cada portfolio item
- Animações de componentes com Framer Motion

### 3. **Página Sobre**

- Informação pessoal do desenvolvedor
- Design consistente com o restante do site

### 4. **Header e Footer**

- Navegação fixa e responsiva
- Links para redes sociais integrados
- Estilização modular

---

## 📦 Dados do Projeto

O arquivo `appData.ts` contém um array de projetos com a seguinte estrutura:

```typescript
interface dataApp {
  id: number
  href: string
  imgSrc: string
  layoutId: string
  title: string
  subtitle?: string
  text: string
  link: string
}
```

### Projetos Inclusos:

1. **PokeAgenda** - Pokédex com Vue 3 + TypeScript
2. **LOLzinho** - Wiki de campeões League of Legends com Vue + Vuetify
3. **ReceitasTop** - Calculadora de preços de receitas
4. **Anime Top** - Buscador de animes com Next.js 13 + Tailwind + Zustand

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- pnpm (gerenciador de pacotes recomendado)

### Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Rodar servidor de desenvolvimento
pnpm dev

# Acessa em http://localhost:3000
```

### Build e Produção

```bash
# Criar build otimizado
pnpm build

# Iniciar servidor de produção
pnpm start
```

---

## 🎨 Estilização

O projeto utiliza **CSS Modules** para componentes, garantindo:

- Isolamento de estilos por componente
- Prevenção de conflitos de classes
- Importação automática de hashes únicos
- Performance otimizada

Cada componente possui seu arquivo correspondente:

- `Card/styles.module.css`
- `Header/styles.module.css`
- `Footer/styles.module.css`
- etc.

---

## ✨ Animações

Utilizando **Framer Motion**, o projeto implementa:

- **Stagger Animation:** Cards aparecem em sequência na home
- **Hover Effects:** Transições suaves nos elementos interativos
- **Layout Animations:** Efeitos ao navegar entre páginas
- **Text Animations:** Componentes `AnimeText.tsx` e `CursorBlinker.tsx`

---

## 🔍 Metadados e SEO

Metadata configurada em `layout.tsx`:

- **Title:** Victor Araújo - Front end Developer
- **Description:** Victor Araújo is a dev who loves front-end
- **Keywords:** dev, developer, frontend, vue, react, next, nextjs
- **Open Graph:** Compartilhamento em redes sociais otimizado
- **Twitter Card:** Preview customizado no Twitter
- **Icons:** Logo personalizado

---

## 📱 Responsividade

O projeto é completamente responsivo, com:

- Media queries em CSS Modules
- Grid adaptável a diferentes tamanhos de tela
- Componentes mobile-first
- Touch-friendly interactions

---

## 🔐 Performance

- CSS Modules para bundling otimizado
- Next.js Image Optimization (pronto para uso)
- TypeScript para type safety
- Code splitting automático
- Font optimization com Google Fonts

---

## 📝 Padrões de Código

### Convenções Utilizadas

- **Componentes:** PascalCase (ex: `Header.tsx`)
- **Arquivos de estilo:** `styles.module.css`
- **Interfaces:** Nomenclatura descritiva (ex: `dataApp`)
- **Imports:** Absolute paths com `@/` para `src/`

### Client Components

- Componentes que usam hooks/eventos têm `"use client"` no topo
- Exemplo: `page.tsx` da home usa Framer Motion

---

## 🚢 Deploy

O projeto está otimizado para deployment em:

- **Vercel** (recomendado - criadores do Next.js)
- **Netlify**
- **Qualquer servidor Node.js**

---

## 📚 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Radix UI Icons](https://radix-ui.com/icons)

---

## 📧 Contato

**Desenvolvedor:** Victor Araújo  
**Website:** victoraraujo.com.br  
**Versão da documentação:** 1.0
