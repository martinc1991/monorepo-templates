import { apiResponse } from '@/lib/api-response/index.js';
import { errorCatchMiddleware } from '@/middlewares/errors.js';
import { Request, Response, Router } from 'express';

export const testRouter = Router();

testRouter.get(
  '/',
  errorCatchMiddleware(async (req: Request, res: Response) => {
    const baseUrl = req.protocol + '://' + req.get('host');
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    apiResponse.success(res, { message: 'API is working', baseUrl, url });
  }),
);
