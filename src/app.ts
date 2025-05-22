import express from "express"
import storeConfigRouter from "@/src/api/routes/storeConfig.route"
import storeRouter from "@/src/api/routes/store.route"
import productRouter from "@/src/api/routes/product.route"

const app = express()

app.use(express.json())

app.use("/store-config", storeConfigRouter)
app.use("/store", storeRouter)
app.use("/products", productRouter)

export default app
