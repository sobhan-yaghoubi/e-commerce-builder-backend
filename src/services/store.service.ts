import prisma from "@src/config/database"
import type { StoreType } from "@src/types/store.type"
import { StoreConfigType } from "@src/types/storeConfig.type"

class Store {
  async getAllStores() {
    return prisma.store.findMany()
  }

  async getStoresByStoreConfigId(storeConfigId: StoreConfigType["id"]) {
    return prisma.store.findMany({
      where: { storeConfigId: storeConfigId },
    })
  }

  async getStoreById(id: StoreType["id"]) {
    return prisma.store.findUnique({ where: { id } })
  }
}

export const StoreService = new Store()
