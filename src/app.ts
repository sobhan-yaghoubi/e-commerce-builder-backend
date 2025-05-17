import express from "express"
import storeConfigRouter from "@/src/api/routes/storeConfig.route"
import storeRouter from "@/src/api/routes/store.route"

const app = express()

app.use(express.json())

app.use("/store-configs", storeConfigRouter)
app.use("/store", storeRouter)

export default app
