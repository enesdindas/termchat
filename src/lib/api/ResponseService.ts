import { Response } from 'express';
import { HttpError } from 'routing-controllers';

// status code enums to manage it easily
enum response_status_codes {
  success = 200,
  badRequest = 400,
  notFound = 404,
  internalServerError = 500,
}

// These functions will manage response data and modify it as requested.
// Also they will handle errors and return detailed explanation on response
export function successResponse(
  msg: string,
  data: any,
  res: Response
): Response<any> {
  return res.status(response_status_codes.success).json({
    code: response_status_codes.success,
    msg,
    data,
  });
}

// if there is an error comes from express
export function requestError(error: HttpError, res: Response): Response<any> {
  return res.status(error.httpCode).json({
    code: error.httpCode,
    name: error.name,
    message: error.message,
    errors: error[`errors`] || [],
  });
}

// if params are out of rule
export function notFound(res: Response): Response<any> {
  return res.status(response_status_codes.badRequest).json({
    code: response_status_codes.badRequest,
    msg: '404 Not Found',
    data: {},
  });
}

// If sth goes wrong with query, connection etc...
export function mongoError(err: any, res: Response): Response<any> {
  return res.status(response_status_codes.internalServerError).json({
    STATUS: response_status_codes.internalServerError,
    MESSAGE: err.stack,
    DATA: err,
  });
}
