import * as express from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import nocache from 'nocache';

@Middleware({ type: 'before' })
export class SecurityNoCacheMiddleware implements ExpressMiddlewareInterface {
  public use(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): any {
    return nocache()(req, res, next);
  }
}
