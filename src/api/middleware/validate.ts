import { ResponseClient } from "@/src/utils/response"
import { Request, Response, NextFunction, RequestHandler } from "express"
import { ZodType, ZodError } from "zod"

export const validate =
  (schema: ZodType<any>): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync(req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        ResponseClient.sendError({ res, message: error.message, error })
        return
      }
      ResponseClient.sendError({
        res,
        message: "Internal server error",
        status: 500,
      })
    }
  }
