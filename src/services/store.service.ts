import prisma from "@src/config/database"
import type { StoreType } from "@src/types/store.type"
import { StoreConfigType } from "@src/types/storeConfig.type"

class Store {
  async getAllStores() {
    return prisma.store.findMany()
  }

  async getStoresByStoreConfigId(
    storeConfigId: StoreConfigType["id"],
    locale?: string
  ) {
    return prisma.store.findMany({
      where: { storeConfigId: storeConfigId, language: locale },
    })
  }

  async getStoreById(id: StoreType["id"], locale?: string) {
    return prisma.store.findUnique({ where: { id, language: locale } })
  }
}

export const StoreService = new Store()
