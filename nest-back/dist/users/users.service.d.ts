import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
export declare type Users = any;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findUser(email: Prisma.UserWhereUniqueInput): Promise<User | null>;
    findUserById(id: Prisma.UserWhereUniqueInput): Promise<User | null>;
    createUser(data: any): Promise<User>;
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
