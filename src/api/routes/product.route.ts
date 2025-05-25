import { Router } from "express"
import { productController } from "../controllers/product.controller"

const router = Router()

router.get("/", productController.getAllProducts)
router.get("/:id/:tenantId/:locale", productController.getProductById)
router.get("/by-store-id/:storeId", productController.getProductsByStoreId)

export default router
