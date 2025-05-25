import prisma from "@src/config/database"
import {
  getProductsByConfigAndLocaleProps,
  ProductType,
} from "../types/product.type"
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

  async getProductsByConfigAndLocale({
    storeConfigId,
    locale,
  }: getProductsByConfigAndLocaleProps) {
    return prisma.product.findMany({
      where: { store: { storeConfigId, language: locale } },
    })
  }
}

export const productService = new ProductService()
