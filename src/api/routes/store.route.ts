import { Router } from "express"
import { storeController } from "@src/api/controllers/store.controller"

const router = Router()

router.get("/", storeController.getAllStores)
router.get(
  "/by-store-config/:storeConfigId",
  storeController.getStoresByStoreConfigId
)
router.get("/:id", storeController.getStoreById)

export default router
