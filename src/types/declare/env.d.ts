interface ImportMetaEnv {
  readonly VITE_KAKAO_BOOK_API_KEY: string;
  readonly VITE_KAKAO_BOOK_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
