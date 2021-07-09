import express from "express"
import { Server } from "./config"
import { router } from "./routes"
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(Server.port, () => {
  // tslint:disable-next-line:no-console
  console.info(`Server up on port ${Server.port}`)
})
