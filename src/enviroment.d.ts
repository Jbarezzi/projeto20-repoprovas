export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DATABASE_URL: string;
      NODE_ENV: "dev" | "test";
      TOKEN_SECRET: string;
    }
  }
}
