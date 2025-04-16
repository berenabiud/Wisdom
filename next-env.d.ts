// / <reference types="next" />
// / <reference types="next/types/global" />

declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_PLACE_ID: string;
      NEXT_PUBLIC_GOOGLE_API_KEY: string;
    }
  }