import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GraphQLAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Access to GraphQL is restricted');
    }

    const token = authHeader.split(' ')[1];

    // Aquí validas el token (puedes usar JwtService si usas JWT)
    if (!token || token !== 'TU-TOKEN-SECRETO') { 
      throw new UnauthorizedException('Invalid Token');
    }

    return true;
  }
}
