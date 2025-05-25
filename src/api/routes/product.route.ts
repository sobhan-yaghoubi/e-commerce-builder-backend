import { Router } from "express"
import { productController } from "../controllers/product.controller"

const router = Router()

router.get("/", productController.getAllProducts)
router.get("/:id", productController.getProductById)
router.get(
  "/:storeConfigId/:locale",
  productController.getProductsByConfigAndLocale
)

export default router
