/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GISCUS_REPO_ID: string;
  readonly GISCUS_CATEGORY_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
