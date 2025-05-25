import { productService } from "@/src/services/product.service"
import { ResponseClient } from "@/src/utils/response"
import { Request, Response } from "express"

class ProductController {
  async getAllProducts(_: Request, res: Response) {
    try {
      const products = await productService.getAllProducts()

      return ResponseClient.sendSuccess({ res, data: products })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to get all products",
        error,
      })
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const tenantId = req.headers["x-tenant-id"] as string
      const language = req.headers["x-locale"] as string

      if (!tenantId || !language)
        return ResponseClient.sendError({
          res,
          message: `Required`,
        })

      const product = await productService.getProductById(
        id,
        language,
        tenantId
      )

      if (!product)
        return ResponseClient.handleNotFound({
          res,
          message: `Product with ${id} not found`,
        })

      return ResponseClient.sendSuccess({ res, data: product })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to get all products",
        error,
      })
    }
  }

  async getProductsByStoreId(req: Request, res: Response) {
    try {
      const { storeId } = req.params
      const products = await productService.getProductsByStoreId({ storeId })

      return ResponseClient.sendSuccess({ res, data: products })
    } catch (error) {
      return ResponseClient.sendError({
        res,
        message: "Failed to get products with store id",
        error,
      })
    }
  }
}

export const productController = new ProductController()
