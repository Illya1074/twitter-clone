import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LocalStrategy } from './local.strategy';
export declare class AuthGuard implements CanActivate {
    private localStrategy;
    constructor(localStrategy: LocalStrategy);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
