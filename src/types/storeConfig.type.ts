import { StoreConfig, Prisma } from "@generated-prisma-client"

export const StoreConfigSelect: Prisma.StoreConfigSelect = {
  theme: true,
  domain: true,
  language: true,
  default_language: true,
}

export type StoreConfigCreateInput = Prisma.StoreConfigCreateInput

export type OmitStoreConfigCreateInput = Omit<
  StoreConfigCreateInput,
  "id" | "createdAt" | "updatedAt"
>

export type { StoreConfig }
