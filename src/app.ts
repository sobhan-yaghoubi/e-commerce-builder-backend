import express from "express"
import storeConfigRouter from "@/src/api/routes/storeConfig.route"

const app = express()

app.use(express.json())

app.use("/storeConfigs", storeConfigRouter)

export default app
