import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from '../auth/public-metada';

// import { User as UserModel } from '@prisma/client';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Public()
  @Post('create-user')
  async createUser(
    @Body() userData: { username?: string; email: string; password: string },
  ): Promise<any> {
    return this.userService.createUser(userData);
  }

  @Post('get-user')
  async getUser(@Body() userData: { email: string }): Promise<any> {
    return this.userService.findUser({
      email: userData.email,
    });
  }

  @Post('get-user-by-id')
  async findUserById(@Body() userData: { id: number }): Promise<any> {
    return this.userService.findUserById({
      id: userData.id,
    });
  }

  @Post('user-profile-update')
  async updateUserProfile(
    @Body()
    userData: {
      email: string;
      desc?: string;
      location?: string;
      username?: string;
    },
  ): Promise<any> {
    const { email, desc, location, username } = userData;
    return this.userService.updateUserProfile({
      where: {
        email,
      },
      data: {
        desc,
        location,
        username,
      },
    });
  }

  @Post('delete-user')
  async deleteUser(@Body() userData: { id: number }): Promise<any> {
    return this.userService.deleteUser(userData);
  }
}
