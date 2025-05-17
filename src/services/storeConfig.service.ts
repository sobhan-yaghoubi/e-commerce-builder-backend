import prisma from "@src/config/database"
import type {
  OmitStoreConfigCreateInput,
  StoreConfigType,
} from "@src/types/storeConfig.type"

class StoreConfig {
  async getAllStoresConfig() {
    return prisma.storeConfig.findMany()
  }

  async getStoreConfigById(id: StoreConfigType["id"]) {
    return prisma.storeConfig.findUnique({ where: { id } })
  }

  async getStoreConfigByDomain(domain: StoreConfigType["domain"]) {
    return prisma.storeConfig.findUnique({ where: { domain } })
  }

  async createStoreConfig(storeConfigData: OmitStoreConfigCreateInput) {
    return prisma.storeConfig.create({ data: storeConfigData })
  }

  async updateStoreConfig(
    id: StoreConfigType["id"],
    storeConfigData: Partial<OmitStoreConfigCreateInput>
  ) {
    return prisma.storeConfig.update({
      where: { id },
      data: { ...storeConfigData },
    })
  }

  async deleteStoreConfig(id: StoreConfigType["id"]) {
    const storeConfigResult = await prisma.storeConfig.delete({ where: { id } })
    return !!storeConfigResult
  }

  async deleteAllStoresConfig() {
    const storeConfigResult = await prisma.storeConfig.deleteMany()

    return !!storeConfigResult
  }
}

export const storeConfigService = new StoreConfig()
