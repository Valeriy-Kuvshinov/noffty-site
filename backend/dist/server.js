import path from 'path';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import http from 'http';
import fs from 'fs';
import { gameRoutes } from './api/game/game.controller.js';
import { mailRoutes } from './api/mail/mail.controller.js';
import { userRoutes } from './api/user/user.controller.js';
import { authRoutes } from './api/auth/auth.controller.js';
import { loggerService } from './services/logger.service.js';
import { automationService } from './services/automation.service.js';
dotenv.config();
const app = express();
app.use(cookieParser()); // for res.cookies
app.use(express.json()); // for req.body
const rootDir = process.cwd();
if (process.env.NODE_ENV === 'production') {
    // Serve Next.js static files
    app.use('/_next', express.static(path.join(rootDir, 'standalone', '.next')));
}
else {
    const corsOptions = {
        origin: [
            'http://noffty.com',
            'http://157.173.210.249',
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:3030',
            'http://localhost:3030'
        ],
        credentials: true,
    };
    app.use(cors(corsOptions));
}
// API routes
app.use('/api/game', gameRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/mail', mailRoutes);
// Serve Next.js pages
app.get('*', (req, res) => {
    const pagePath = path.join(rootDir, 'standalone', '.next', 'server', 'app', req.path, 'index.html');
    console.log(`Attempting to serve: ${pagePath}`);
    if (fs.existsSync(pagePath)) {
        res.sendFile(pagePath);
    }
    else {
        console.log(`Falling back to: ${path.join(rootDir, 'standalone', '.next', 'server', 'app', 'index.html')}`);
        res.sendFile(path.join(rootDir, 'standalone', '.next', 'server', 'app', 'index.html'));
    }
});
// Handle 404 pages
app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'standalone', '.next', 'server', 'app', '_not-found', 'index.html'));
});
const port = process.env.PORT || 3030;
const server = http.createServer(app);
server.listen(port, () => {
    loggerService.info(`Server listening on port http://127.0.0.1:${port}/`);
    automationService.setupOrphanedImageCheck();
});
