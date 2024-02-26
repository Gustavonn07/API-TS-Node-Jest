import { Request, Response } from 'express';
import { ICidade } from './interfaces/create.interface';

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body.nome);
    res.send(req.body.nome);
};