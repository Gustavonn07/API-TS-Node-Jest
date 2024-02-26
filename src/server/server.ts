import express from 'express';
import { config } from 'dotenv';
import { router } from './routes';

config({ path: './config.env' });

const server = express();

server.use(express.json());
server.use('/api/v1/', router);

export { server };
