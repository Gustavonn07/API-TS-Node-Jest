import { Request, Response } from 'express';
import { ICidade } from './interfaces/create.interface';
import { StatusCodes } from 'http-status-codes';

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body);
    if (!req.body.nome) return res.status(StatusCodes.BAD_REQUEST).send('Informe o atributo nome');
    res.send(req.body);
};