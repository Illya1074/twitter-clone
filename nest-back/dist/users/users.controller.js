"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const public_metada_1 = require("../auth/public-metada");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(userData) {
        return this.userService.createUser(userData);
    }
    async getUser(userData) {
        return this.userService.findUser({
            email: userData.email,
        });
    }
    async getUsers() {
        return this.userService.findUsers();
    }
    async findUserById(userData) {
        return this.userService.findUserById({
            id: userData.id,
        });
    }
    async updateUserProfile(userData) {
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
    async deleteUser(userData) {
        return this.userService.deleteUser(userData);
    }
    async createFollowing(userData) {
        const { followerEmail, userId, username, userEmail, followerId, followerUsername, } = userData;
        this.userService.createFollower({
            data: {
                email: userEmail,
                username: username,
                user: {
                    connect: {
                        id: followerId,
                    },
                },
            },
        });
        return this.userService.createFollowing({
            data: {
                email: followerEmail,
                username: followerUsername,
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });
    }
};
__decorate([
    public_metada_1.Public(),
    common_1.Post('create-user'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Post('get-user'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.Get('get-users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    common_1.Post('get-user-by-id'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUserById", null);
__decorate([
    common_1.Post('user-profile-update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserProfile", null);
__decorate([
    common_1.Post('delete-user'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    common_1.Post('following'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createFollowing", null);
UsersController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map