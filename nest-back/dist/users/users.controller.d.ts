import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(userData: {
        username?: string;
        email: string;
        password: string;
    }): Promise<any>;
    getUser(userData: {
        email: string;
    }): Promise<any>;
    getUsers(): Promise<any>;
    findUserById(userData: {
        id: number;
    }): Promise<any>;
    updateUserProfile(userData: {
        email: string;
        desc?: string;
        location?: string;
        username?: string;
    }): Promise<any>;
    deleteUser(userData: {
        id: number;
    }): Promise<any>;
    createFollowing(userData: {
        followerEmail: string;
        userId: number;
        username: string;
        userEmail: string;
        followerId: number;
        followerUsername: string;
    }): Promise<any>;
}
