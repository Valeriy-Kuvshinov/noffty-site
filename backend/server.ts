import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import http from 'http'
import fs from 'fs'

import { gameRoutes } from './api/game/game-controller.js'
import { mailRoutes } from './api/mail/mail-controller.js'
import { userRoutes } from './api/user/user-controller.js'
import { authRoutes } from './api/auth/auth-controller.js'

import { loggerService } from './services/logger.js'
import { automationService } from './services/automation.js'

dotenv.config()
const app = express()

app.use(cookieParser()) // for res.cookies
app.use(express.json()) // for req.body

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the 'out' directory
  app.use(express.static(path.join(__dirname, '..', 'out')))
} else {
  const corsOptions = {
    origin: [
      'http://noffty.com',
      'https://noffty.com',
      'http://www.noffty.com',
      'https://www.noffty.com',
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://127.0.0.1:3030',
      'http://localhost:3030'
    ],
    credentials: true,
  }
  app.use(cors(corsOptions))
}

// API routes
app.use('/api/game', gameRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/mail', mailRoutes)

// Serve static files for Next.js routes and handle 404
app.get('*', (req, res) => {
  const pagePath = path.join(__dirname, '..', 'out', req.path)
  console.log(`Attempting to serve: ${pagePath}`)

  if (fs.existsSync(pagePath) && fs.statSync(pagePath).isFile()) res.sendFile(pagePath)
  else {
    const indexPath = path.join(pagePath, 'index.html')
    if (fs.existsSync(indexPath)) res.sendFile(indexPath)
    else {
      // If no specific file is found, attempt to serve the 404 page
      const notFoundPath = path.join(__dirname, '..', 'out', '404', 'index.html')
      if (fs.existsSync(notFoundPath)) res.status(404).sendFile(notFoundPath)
      // Fallback to main index.html if custom 404 page is not found
      else res.status(404).sendFile(path.join(__dirname, '..', 'out', 'index.html'))
    }
  }
})

const port = process.env.PORT || 3030
const server = http.createServer(app)

server.listen(port, () => {
  loggerService.info(`Server listening on port http://127.0.0.1:${port}/`)
  automationService.setupOrphanedImageCheck()
})