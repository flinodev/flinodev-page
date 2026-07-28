import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "flino.dev",
  DESCRIPTION:
    "Francisco Lino: construyo y opero sistemas en producción con Go, TypeScript y Cloudflare Workers. Escribo sobre desarrollo, seguridad ofensiva y writeups de laboratorios.",
  AUTHOR: "Francisco Suriel Lino",
};

// Work Page
export const WORK: Page = {
  TITLE: "Experiencia profesional",
  DESCRIPTION:
    "Trayectoria profesional de Francisco Lino: desarrollo full stack en fintech, arquitecturas cloud en GCP y proyectos freelance.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION:
    "Publicaciones sobre desarrollo web, sistemas en producción, seguridad informática y las decisiones técnicas detrás de cada proyecto.",
};

// Writeups Page
export const WRITEUPS: Page = {
  TITLE: "Writeups",
  DESCRIPTION:
    "Writeups de laboratorios y rooms de seguridad ofensiva: pentesting web, escalación de privilegios, análisis de red y más",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION:
    "Proyectos de Francisco Lino: sistemas en el edge con Cloudflare Workers, plataformas educativas, ecommerce y aplicaciones móviles.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Búsqueda",
  DESCRIPTION: "Búsqueda de proyectos y posts por palabras clave.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Inicio",
    HREF: "/",
  },
  {
    TEXT: "Carrera",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Writeups",
    HREF: "/writeups",
  },
  {
    TEXT: "Proyectos",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "flinodev@gmail.com",
    HREF: "mailto:flinodev@gmail.com",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "flinodev",
    HREF: "https://www.linkedin.com/in/flinodev/",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "flinodev",
    HREF: "https://github.com/flinodev",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "flinodev",
    HREF: "https://x.com/flinodev",
  },
];

// YouTube y TikTok salieron de aquí: los canales están vacíos. Un canal
// ausente no dice nada; uno muerto y bien presentado dice que se empiezan
// cosas y no se terminan. Vuelven cuando tengan contenido — y TikTok, si
// vuelve, será apuntando a Habitus, no a la marca personal.
