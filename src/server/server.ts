import express from 'express';
import { router } from './routes';
import { config } from 'dotenv';

config({ path: './config.env' });

const server = express();

server.use(express.json());
server.use('/api/v1/', router);

export { server };
