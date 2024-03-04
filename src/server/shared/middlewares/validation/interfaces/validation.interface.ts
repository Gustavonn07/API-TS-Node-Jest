import { RequestHandler } from 'express';
import { Schema } from 'yup';

export type TProperty = 'body' | 'header' | 'params' | 'query';

type TAllSchemas = Record<TProperty, Schema>;

export type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;

export type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

export type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler ;
