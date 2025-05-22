import prisma from "@src/config/database"
import { getProductsByStoreIdProps, ProductType } from "../types/product.type"
import { StoreType } from "../types/store.type"
import { StoreConfigType } from "../types/storeConfig.type"

class ProductService {
  async getAllProducts() {
    return prisma.product.findMany({
      include: { store: true },
    })
  }

  async getProductById(
    id: ProductType["id"],
    language: StoreType["language"],
    tenantId: StoreConfigType["id"]
  ) {
    return prisma.product.findUnique({
      where: { id, store: { language, storeConfigId: tenantId } },
      include: { store: true },
    })
  }

  async getProductsByStoreId({ storeId }: getProductsByStoreIdProps) {
    return prisma.product.findMany({ where: { storeId } })
  }
}

export const productService = new ProductService()
