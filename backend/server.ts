import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import http from 'http'

import { gameRoutes } from './api/game/game.controller.js'
import { mailRoutes } from './api/mail/mail.controller.js'
import { userRoutes } from './api/user/user.controller.js'
import { authRoutes } from './api/auth/auth.controller.js'

import { loggerService } from './services/logger.service.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config()
const app = express()

app.use(cookieParser()) // for res.cookies
app.use(express.json()) // for req.body

if (process.env.NODE_ENV === 'production') {
  // Express serve static files on production environment
  app.use(express.static(path.resolve(__dirname, '..', 'public', 'browser')))
} else {
  const corsOptions = {
    origin: [
      'http://noffty.onrender.com',
      'http://noffty.productions',
      // include actual ip address of production
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://127.0.0.1:3030',
      'http://localhost:3030'
    ],
    credentials: true,
  } // Configuring CORS
  app.use(cors(corsOptions))
}

app.use('/api/game', gameRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/mail', mailRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'browser', 'index.html'))
})

const port = process.env.PORT || 3030
const server = http.createServer(app)

server.listen(port, () => {
  loggerService.info(`Server listening on port http://127.0.0.1:${port}/`)
})