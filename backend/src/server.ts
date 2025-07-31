import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv';
import helmet from 'helmet'

dotenv.config();

import { router } from './router'


const PORT = 3000
const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
//server.use(helmet())

server.use(router)

server.listen(PORT, () => {
    console.log('ROdando na porta' + PORT)
})

