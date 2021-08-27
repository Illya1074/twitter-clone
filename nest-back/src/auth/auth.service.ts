import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // console.log('email ', email);
    const user = await this.usersService.findUser({
      email: email,
    });
    // console.log(name, user.name);
    const result = await bcrypt.compare(pass, user.password);
    if (user && result) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log(user);
    const payload = { email: user.email };
    const userInfo = await this.usersService.findUser({
      email: user.email,
    });
    return {
      access_token: this.jwtService.sign(payload),
      info: userInfo,
    };
  }
}
