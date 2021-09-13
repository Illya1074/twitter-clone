import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Follower, Following, User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// This should be a real class/interface representing a user entity
export type Users = any;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUser(email: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: email,
      include: {
        following: true,
        follower: true,
      },
    });
  }

  async findUserById(id: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: id,
      include: {
        following: true,
        follower: true,
      },
    });
  }

  async createUser(data: any): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        password: await bcrypt.hash(data.password, 8),
      },
    });
  }

  async createFollowing(data: any): Promise<Following> {
    return this.prisma.following.create({
      ...data,
    });
  }

  async createFollower(data: any): Promise<Follower> {
    return this.prisma.follower.create({
      ...data,
    });
  }

  async findUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updateUserProfile(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
