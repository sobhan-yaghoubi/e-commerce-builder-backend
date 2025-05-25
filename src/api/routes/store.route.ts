import { Router } from "express"
import { storeController } from "@src/api/controllers/store.controller"

const router = Router()

router.get("/", storeController.getAllStores)
router.get(
  "/:storeConfigId/stores/:locale",
  storeController.getStoreByConfigAndLocale
)
router.get("/:id", storeController.getStoreById)

export default router
