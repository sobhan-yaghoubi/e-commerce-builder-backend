declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      REVALIDATE_SECRET: string
      REVALIDATE_URL: string
    }
  }
}

export {}
