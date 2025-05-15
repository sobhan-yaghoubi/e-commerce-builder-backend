import { Router } from "express"
import { storeConfigController } from "@src/api/controllers/storeConfig.controller"
import { validate } from "@src/api/middleware/validate"
import {
  CreateStoreConfigSchema,
  UpdateStoreConfigSchema,
} from "@src/api/validators/storeConfig.validator"

const router = Router()

router.get("/", storeConfigController.getAllStoresConfig)
router.get("/id/:id", storeConfigController.getStoreConfigById)
router.get("/domain/:domain", storeConfigController.getStoreConfigByDomain)

router.post(
  "/",
  validate(CreateStoreConfigSchema),
  storeConfigController.createStoreConfig
)

router.put(
  "/id/:id",
  validate(UpdateStoreConfigSchema),
  storeConfigController.updateStoreConfig
)

router.delete("/", storeConfigController.deleteAllStoresConfig)
router.delete("/:id", storeConfigController.deleteStoreConfig)

export default router
