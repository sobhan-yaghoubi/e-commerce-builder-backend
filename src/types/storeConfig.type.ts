import {
  StoreConfig as StoreConfigType,
  Prisma,
} from "@generated-prisma-client"

export const StoreConfigSelect: Prisma.StoreConfigSelect = {
  theme: true,
  domain: true,
  languages: true,
  default_language: true,
}

export type StoreConfigCreateInput = Prisma.StoreConfigCreateInput

export type OmitStoreConfigCreateInput = Omit<
  StoreConfigCreateInput,
  "id" | "createdAt" | "updatedAt"
>

export type { StoreConfigType }
