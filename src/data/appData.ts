export type Project = {
  slug: string
  title: string
  subtitle: string
  text: string
  tags: string[]
  cover: string
  logo: string
  github: string
  site: string
  download?: string
  featured?: boolean
  highlights?: string[]
  screenshots?: string[]
}

export const projects: Project[] = [
  {
    slug: "nextcm",
    title: "NextCM",
    subtitle: "Desktop football manager · Tauri + React",
    text: "A fan-made tribute to a classic early-2000s football management game, rebuilt from scratch as a modern desktop app with an up-to-date 2025/26 database.",
    tags: ["React 19", "TypeScript", "Tauri 2", "Rust", "SQLite"],
    cover: "/img/Apps/nextcm/mockup.webp",
    logo: "/img/AppLogos/nextcm.svg",
    github: "https://github.com/Victorb999/NextCm",
    site: "https://victorb999.github.io/NextCm/",
    download: "https://github.com/Victorb999/NextCm/releases",
    featured: true,
    highlights: [
      "Desktop app built with Tauri 2: a dense, keyboard-fast React 19 + TypeScript UI over a native simulation core.",
      "A playable world in SQLite: 144k+ people, 11k clubs and 400 competitions, with leagues from Brazil to Europe.",
      "Live match day with minute-by-minute commentary, drag-and-drop tactics, transfer market with AI-driven clubs, scouting, press conferences and save games.",
      "Deterministic simulation: the same seed always produces the same season, which makes the game rules testable.",
      "Built with AI-assisted, context-driven development, documented with project guides, roadmap and changelog.",
    ],
    screenshots: [
      "/img/Apps/nextcm/partida.png",
      "/img/Apps/nextcm/tacticas.png",
      "/img/Apps/nextcm/plantel.png",
      "/img/Apps/nextcm/classificacao.png",
    ],
  },
  {
    slug: "projetolojatop",
    title: "Loja Top",
    subtitle: "Full stack store manager",
    text: "Create and manage products, customers and orders.",
    tags: ["Next.js 14", "Node", "Prisma", "Tailwind"],
    cover: "/img/Apps/projetoLoja.png",
    logo: "/img/AppLogos/projetolojatop.svg",
    github: "https://github.com/Victorb999/projeto-loja-top",
    site: "https://projeto-loja-top.vercel.app/",
  },
  {
    slug: "receitastop",
    title: "ReceitasTop",
    subtitle: "Recipe cost calculator",
    text: "Calculate the cost of a recipe from the price of its ingredients.",
    tags: ["Vue 3", "TypeScript", "SCSS"],
    cover: "/img/Apps/receitastop.jpg",
    logo: "/img/AppLogos/receitastop.svg",
    github: "https://github.com/Victorb999/ReceitasTopFront",
    site: "https://receitastop.vercel.app",
  },
  {
    slug: "pokeagenda",
    title: "PokeAgenda",
    subtitle: "Pokédex with GraphQL",
    text: "Search every Pokémon by name, type and generation.",
    tags: ["Next.js", "GraphQL", "Tailwind"],
    cover: "/img/Apps/PokeAgenda.png",
    logo: "/img/AppLogos/pokeagenda.svg",
    github: "https://github.com/Victorb999/pokemon-ql",
    site: "https://pokemon-ql.vercel.app/",
  },
  {
    slug: "animetop",
    title: "Anime Top",
    subtitle: "Anime catalog",
    text: "Search animes filtered by title or genre.",
    tags: ["Next.js 13", "Tailwind", "Zustand"],
    cover: "/img/Apps/animetop.jpg",
    logo: "/img/AppLogos/animetop.svg",
    github: "https://github.com/Victorb999/anime-top",
    site: "https://anime-top-gray.vercel.app/",
  },
]
