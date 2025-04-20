import { storeConfigService } from "@/src/services/storeConfig.service"
import { ResponseClient } from "@/src/utils/response"
import { Request, Response } from "express"

class StoreConfigController {
  async getAllStoresConfig(_: Request, res: Response) {
    try {
      const storesConfig = await storeConfigService.getAllStoresConfig()
      return ResponseClient.sendSuccess({ res, data: storesConfig })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to get all stores configs",
        error,
      })
    }
  }

  async getStoreConfigByDomain(req: Request, res: Response) {
    try {
      const { domain } = req.params
      const storeConfig = await storeConfigService.getStoreConfigByDomain(
        domain
      )

      if (!storeConfig) {
        return ResponseClient.handleNotFound({
          res,
          message: `Store config with ${domain} not found`,
        })
      }

      return ResponseClient.sendSuccess({ res, data: storeConfig })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to get the store config with domain",
        error,
      })
    }
  }

  async createStoreConfig(req: Request, res: Response) {
    try {
      const storeConfigData = req.body
      const newStoreConfig = await storeConfigService.createStoreConfig(
        storeConfigData
      )
      return ResponseClient.sendSuccess({ res, data: newStoreConfig })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to create the store config",
        error,
      })
    }
  }

  async updateStoreConfig(req: Request, res: Response) {
    try {
      const { id } = req.params
      const storeConfigData = req.body
      const updatedStoreConfig = await storeConfigService.updateStoreConfig(
        id,
        storeConfigData
      )

      if (!updatedStoreConfig)
        return ResponseClient.handleNotFound({
          res,
          message: "Store config not found",
        })

      return ResponseClient.sendSuccess({ res, data: updatedStoreConfig })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to update store config",
        error,
      })
    }
  }

  async deleteStoreConfig(req: Request, res: Response) {
    try {
      const { id } = req.params
      const deleted = await storeConfigService.deleteStoreConfig(id)

      if (!deleted)
        return ResponseClient.handleNotFound({
          res,
          message: "Store Config not found",
        })

      return ResponseClient.sendSuccess({ res, data: deleted })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to delete the store config",
        error,
      })
    }
  }
}
