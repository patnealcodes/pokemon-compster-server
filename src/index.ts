import express, { Request, Response } from "express"
import { Server } from './config'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello typed world!')
})

app.listen(Server.port, () => {
  // tslint:disable-next-line:no-console
  console.info(`Server up on port ${Server.port}`)
})
