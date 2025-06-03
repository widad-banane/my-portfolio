/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="lucide-react" />
/// <reference types="embla-carousel-react" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
