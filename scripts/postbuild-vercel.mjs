/**
 * Workaround para bug de @astrojs/vercel@8: la regla de cache-control de
 * /_astro/ queda DESPUÉS de {handle: "filesystem"} en config.json, por lo
 * que Vercel sirve los assets estáticos sin aplicarla (max-age=0).
 * Este script mueve las reglas de headers (continue: true) antes del
 * handler de filesystem para que los assets hasheados salgan immutable.
 */
import { readFile, writeFile } from "node:fs/promises";

const CONFIG = new URL("../.vercel/output/config.json", import.meta.url);

const config = JSON.parse(await readFile(CONFIG, "utf8"));
const routes = config.routes ?? [];

const fsIndex = routes.findIndex((r) => r.handle === "filesystem");
if (fsIndex === -1) {
  console.log("[postbuild-vercel] no filesystem handle found, nothing to do");
  process.exit(0);
}

const headerRules = [];
const rest = [];
for (const [i, route] of routes.entries()) {
  if (i > fsIndex && route.continue === true && route.headers && !route.dest) {
    headerRules.push(route);
  } else {
    rest.push(route);
  }
}

if (headerRules.length === 0) {
  console.log("[postbuild-vercel] no misplaced header rules, nothing to do");
  process.exit(0);
}

const newFsIndex = rest.findIndex((r) => r.handle === "filesystem");
rest.splice(newFsIndex, 0, ...headerRules);
config.routes = rest;

await writeFile(CONFIG, JSON.stringify(config, null, 2));
console.log(
  `[postbuild-vercel] moved ${headerRules.length} header rule(s) before filesystem handle`
);
