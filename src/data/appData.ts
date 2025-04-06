interface dataApp {
  href: string
  imgSrc: string
  layoutId: string
  title: string
  subtitle?: string
  text: string
  link: string
  id: number
}
export const dataApp: dataApp[] = [
  {
    id: 1,
    href: "/app/pokeagenda",
    imgSrc: "/img/Apps/pokeagenda.jpg",
    layoutId: "pokeagenda-app",
    title: "PokeAgenda",
    subtitle: "A Pokedex made with vue3 + ts",
    text: "Search every pokemon, types and generation.",
    link: "https://pokeagenda-8b318.web.app/",
  },
  {
    id: 2,
    href: "/app/lolzinho",
    imgSrc: "/img/Apps/lolzinho.jpg",
    layoutId: "lolzinho-app",
    title: "LOLzinho",
    subtitle: "A wiki lol champions made with vue + vuetify",
    text: "Search all champions of League of legends",
    link: "https://lol-zinho.victorb999.vercel.app",
  },
  {
    id: 3,
    href: "/app/receitastop",
    imgSrc: "/img/Apps/receitastop.jpg",
    layoutId: "receitastop-app",
    title: "ReceitasTop",
    text: "A project to calculate prices of recipe",
    link: "https://receitastop.vercel.app",
  },
  {
    id: 4,
    href: "/app/animetop",
    imgSrc: "/img/Apps/animetop.jpg",
    layoutId: "animetop-app",
    title: "Anime Top",
    subtitle: "Project in Nextjs 13 + Tailwind + Zustand",
    text: "Search animes as filtered by title or genre",
    link: "https://anime-top-gray.vercel.app/",
  },
  {
    id: 5,
    href: "/app/projetolojatop",
    imgSrc: "/img/Apps/projetoLoja.png",
    layoutId: "projeto-loja-top",
    title: "Loja Top",
    subtitle: "Project full stack in Nextjs 14 + Node + Prisma",
    text: "Create products, customers and orders",
    link: "https://projeto-loja-top.vercel.app/",
  },
  {
    id: 6,
    href: "/app/githubusers",
    imgSrc: "/img/Apps/githubusers.jpg",
    layoutId: "githubusers",
    title: "Github Users",
    subtitle: "Project in vue3 + vuex4",
    text: "Search github users",
    link: "https://github-users-cyan.vercel.app/",
  },
]

export type Apps = {
  id: string
  img: string
  github: string
  text: string
  site: string
  title: string
  logo?: string
}

export const dataAppPage: Record<string, Apps> = {
  pokeagenda: {
    id: "pokeagenda",
    img: "/img/Apps/pokeagenda.jpg",
    github: "https://github.com/Victorb999/PokeAgenda",
    text: "Search every pokemon, types and generation.",
    site: "https://pokeagenda-8b318.web.app/",
    title: "PokeAgenda",
    logo: "/img/AppLogos/pokeagenda.png",
  },
  lolzinho: {
    id: "lolzinho",
    img: "/img/Apps/lolzinho.jpg",
    github: "https://github.com/Victorb999/LOLzinho",
    text: "Search all champions of League of legends",
    site: "https://lol-zinho.victorb999.vercel.app",
    title: "LOLzinho",
    logo: "/img/AppLogos/lolzinho.svg",
  },
  receitastop: {
    id: "receitastop",
    img: "/img/Apps/receitastop.jpg",
    github: "https://github.com/Victorb999/ReceitasTopFront",
    text: "A project to calculate prices of recipe",
    site: "https://receitastop.vercel.app",
    title: "ReceitasTop",
    logo: "/img/AppLogos/receitastop.svg",
  },
  animetop: {
    id: "animetop",
    img: "/img/Apps/animetop.jpg",
    github: "https://github.com/Victorb999/anime-top",
    text: "Project in Nextjs 13 + Tailwind + Zustand",
    site: "https://anime-top-gray.vercel.app/",
    title: "Anime Top",
    logo: "/img/AppLogos/animetop.svg",
  },
  projetolojatop: {
    id: "projetolojatop",
    img: "/img/Apps/projetoLoja.png",
    github: "https://github.com/Victorb999/projeto-loja-top",
    text: "Project in Nextjs 14 + Tailwind + Node + Prisma",
    site: "https://projeto-loja-top.vercel.app/",
    title: "Loja Top",
    logo: "/img/AppLogos/projetolojatop.svg",
  },
  githubusers: {
    id: "githubusers",
    img: "/img/Apps/githubusers.jpg",
    github: "https://github.com/Victorb999/GithubUsers",
    text: "Search github users",
    site: "https://github-users-cyan.vercel.app/",
    title: "Github Users",
    logo: "/img/AppLogos/githubusers.png",
  },
}
