import { AuthService } from './auth.service';
export declare class LocalStrategy {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<any>;
}
