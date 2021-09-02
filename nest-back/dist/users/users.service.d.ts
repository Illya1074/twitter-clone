import { PrismaService } from '../prisma.service';
import { Follower, Following, User, Prisma } from '@prisma/client';
export declare type Users = any;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findUser(email: Prisma.UserWhereUniqueInput): Promise<User | null>;
    findUserById(id: Prisma.UserWhereUniqueInput): Promise<User | null>;
    createUser(data: any): Promise<User>;
    createFollowing(data: any): Promise<Following>;
    createFollower(data: any): Promise<Follower>;
    users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByInput;
    }): Promise<User[]>;
    updateUserProfile(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
}
