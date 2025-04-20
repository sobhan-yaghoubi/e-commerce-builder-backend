import { Response } from "express"

export const sendSuccess = (res: Response, data: any, status: number = 200) => {
  return res.status(status).json({ success: true, data })
}

export const sendError = (
  res: Response,
  message: string,
  status: number = 400
) => {
  return res.status(status).json({ success: false, message })
}
