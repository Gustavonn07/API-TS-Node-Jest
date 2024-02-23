import { server } from './src/server/server';
import { config } from 'dotenv';

config({ path: './config.env' });

const port = process.env.PORT;

server.listen(port, () => {
    console.log(process.env.NODE_ENV);
    console.log(`Server aberto em http://localhost:${port}/`);
});