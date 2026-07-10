import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "{flino|dev}",
  DESCRIPTION:
    "Sitio de Francisco Lino, desarrollador full stack especializado en backend y seguridad web. Escribo sobre desarrollo de software, seguridad ofensiva y comparto writeups de laboratorios",
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
    "Publicaciones sobre temas de desarrollo web, seguridad informática, inteligencia artificial y más",
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
    "Proyectos web y móviles desarrollados por Francisco Lino: plataformas educativas, ecommerce y aplicaciones cloud.",
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
  {
    NAME: "Youtube",
    ICON: "youtube",
    TEXT: "@flinodev",
    HREF: "https://www.youtube.com/@flinodev",
  },
  {
    NAME: "Tiktok",
    ICON: "tiktok",
    TEXT: "@flinodev",
    HREF: "https://www.tiktok.com/@flinodev",
  },
];
