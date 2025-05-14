import { Response } from "express"
import logger from "../config/logger"
class ResponseHandler {
  sendSuccess<T, U extends Record<string, any>>({
    res,
    data,
    status = 200,
    ...additionalProperties
  }: {
    res: Response
    data: T
    status?: number
  } & U) {
    res.status(status).json({ success: true, data, ...additionalProperties })
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
    res.status(status).json({ success: false, message, error })
  }

  handleNotFound({
    res,
    message = "Resource not found",
  }: {
    res: Response
    message?: string
  }) {
    const notFoundStatusCode = 404
    res.status(notFoundStatusCode).json({ success: false, message })
  }
}

export const ResponseClient = new ResponseHandler()
