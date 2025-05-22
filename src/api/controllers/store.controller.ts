import { StoreService } from "@/src/services/store.service"
import { ResponseClient } from "@/src/utils/response"
import { Request, Response } from "express"

class StoreController {
  getAllStores = async (_: Request, res: Response) => {
    try {
      const store = await StoreService.getAllStores()
      return ResponseClient.sendSuccess({ res, data: store })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to get all stores",
        error,
      })
    }
  }

  getStoresByStoreConfigId = async (req: Request, res: Response) => {
    try {
      const { storeConfigId } = req.params
      const acceptLanguage = req.headers["accept-language"]

      const store = await StoreService.getStoresByStoreConfigId(storeConfigId,acceptLanguage)
      if (!store)
        return ResponseClient.handleNotFound({
          res,
          message: `Store with this store config ${storeConfigId}, not found`,
        })

      return ResponseClient.sendSuccess({ res, data: store })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to get the store with store config id",
        error,
      })
    }
  }

  getStoreById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const acceptLanguage = req.headers["accept-language"]

      const store = await StoreService.getStoreById(id, acceptLanguage)

      if (!store)
        return ResponseClient.handleNotFound({
          res,
          message: `store config with ${id} not found`,
        })
    } catch (error) {
      ResponseClient.sendError({
        res,
        message: "Failed to get store with id",
        error,
      })
    }
  }
}

export const storeController = new StoreController()
