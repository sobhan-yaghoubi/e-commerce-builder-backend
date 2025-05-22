import { Product as ProductType } from "@generated-prisma-client"
import { StoreType } from "./store.type"

export type getProductsByStoreIdProps = {
  storeId: StoreType["id"]
}

export type { ProductType }
