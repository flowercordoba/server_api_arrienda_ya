import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class GraphQLAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    const validUser = 'admin';
    const validPassword = 'password';
    const encodedCredentials = Buffer.from(`${validUser}:${validPassword}`).toString('base64');

    if (!authHeader || authHeader !== `Basic ${encodedCredentials}`) {
      res.setHeader('WWW-Authenticate', 'Basic realm="GraphQL Access"');
      return res.status(401).send('Authentication Required');
    }

    next();
  }
}
