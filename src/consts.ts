import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "flinodev",
  DESCRIPTION:
    "Bienvenido a la página de inicio de Francisco Lino. Desarrollador Web",
  AUTHOR: "Mark Horn",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Experiencia profesional.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Escribiendo sobre temas de mi interés.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Proyectos en los que he trabajado.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Búsqueda de proyectos y posts por palabras clave.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Inicio",
    HREF: "/",
  },
  {
    TEXT: "Trabajos",
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
    TEXT: "francisco-suriel-lino-cadena-551294154",
    HREF: "https://www.linkedin.com/in/francisco-suriel-lino-cadena-551294154/",
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
  // {
  //   NAME: "Tiktok",
  //   ICON: "tiktok",
  //   TEXT: "@flinodev",
  //   HREF: "https://www.tiktok.com/@flinodev",
  // },
];
