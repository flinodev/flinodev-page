import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "{flino|dev}",
  DESCRIPTION:
    "Sitio oficial de Francisco Suriel Lino, desarrollador de software, freelancer y profesor. Comparto el conocimiento y entusiasmo por la tecnología y la programación",
  AUTHOR: "Mark Horn",
};

// Work Page
export const WORK: Page = {
  TITLE: "Experiencia profesional",
  DESCRIPTION: "Experiencia profesional.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION:
    "Publicaciones sobre temas de desarrollo web, seguridad informática, inteligencia artificial y más",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos en los que he trabajado.",
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
