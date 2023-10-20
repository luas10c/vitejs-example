/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_HELLO: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
