import { server } from './server/server';

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(process.env.NODE_ENV);
    console.log(`Server aberto em http://localhost:${port}/`);
});
