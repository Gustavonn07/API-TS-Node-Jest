import { ICidade } from './interfaces/create.interface';
import { IFilter } from './interfaces/query.interface';
import { validation } from '../../shared/middlewares';
import { Request, Response } from 'express';
import * as yup from 'yup';

export const createValidation = validation.validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3),
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().required().min(3),
    }))
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    return res.send(req.body);
};