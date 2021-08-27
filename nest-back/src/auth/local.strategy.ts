// import { Strategy } from 'passport-local';
// import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy {
  constructor(private authService: AuthService) {}

  async validate(email: string, password: string): Promise<any> {
    // console.log(name);

    const user = await this.authService.validateUser(email, password);
    // console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
