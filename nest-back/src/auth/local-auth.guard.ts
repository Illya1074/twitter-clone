import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LocalStrategy } from './local.strategy';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private localStrategy: LocalStrategy) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // console.log(request.email);
    return this.localStrategy.validate(
      request.body.email,
      request.body.password,
    );
  }
}
