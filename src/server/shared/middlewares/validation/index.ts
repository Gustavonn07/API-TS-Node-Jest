import './../../services/translationsYup';
import { TValidation, TProperty } from './interfaces/validation.interface';
import { ValidationError } from 'yup';
import { StatusCodes } from 'http-status-codes';

export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema);

    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as TProperty], { abortEarly: false });

            return next();

        } catch (err) {
            const yupError = err as ValidationError;
            const errors: Record<string, string> = {};

            yupError.inner.forEach(error => {
                if (!error.path) return;
                errors[error.path] = error.message;
            });

            errorsResult[key] = errors;
        }
    });

    if (Object.entries(errorsResult).length === 0) {
        return next();

    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errorsResult });
    }
};