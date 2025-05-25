import { Product as ProductType, StoreConfig } from "@generated-prisma-client"
import { StoreType } from "./store.type"

export type getProductsByConfigAndLocaleProps = {
  storeConfigId: StoreConfig["id"]
  locale: StoreType["language"]
}

export type { ProductType }
