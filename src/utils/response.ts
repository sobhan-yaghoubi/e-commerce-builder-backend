import { Response } from "express"
import logger from "../config/logger"
class ResponseHandler {
  sendSuccess<T>({
    res,
    data,
    status = 200,
  }: {
    res: Response
    data: T
    status?: number
  }) {
    return res.status(status).json({ success: true, data })
  }

  sendError({
    res,
    message,
    status = 400,
    error,
  }: {
    res: Response
    message: string
    status?: number
    error?: any
  }) {
    logger.error(message, error)
    return res.status(status).json({ success: false, message, error })
  }

  handleNotFound({
    res,
    message = "Resource not found",
  }: {
    res: Response
    message?: string
  }) {
    const notFoundStatusCode = 404
    return res.status(notFoundStatusCode).json({ success: false, message })
  }
}

export const ResponseClient = new ResponseHandler()
