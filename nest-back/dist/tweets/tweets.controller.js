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
exports.TweetsController = void 0;
const tweets_service_1 = require("./tweets.service");
const common_1 = require("@nestjs/common");
let TweetsController = class TweetsController {
    constructor(tweetsService) {
        this.tweetsService = tweetsService;
    }
    async createTweet(postData) {
        const { content, username, authorId } = postData;
        return this.tweetsService.createTweet({
            content,
            authorId,
            authorUsername: username,
        });
    }
    async findTweets(postData) {
        const { id } = postData;
        console.log(id);
        return this.tweetsService.findTweets({
            where: {
                authorId: id,
            },
        });
    }
    async likeTweet(postData) {
        const { tweetId, userId } = postData;
        return this.tweetsService.likeTweet({
            where: {
                id: tweetId,
            },
            data: {
                likeBy: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });
    }
    async getTweet(postData) {
        const { tweetId } = postData;
        return this.tweetsService.getTweet({
            where: {
                id: tweetId,
            },
        });
    }
    async deleteTweets(postData) {
        const { id } = postData;
        console.log(id);
        return this.tweetsService.deleteTweets({
            where: {
                id: id,
            },
        });
    }
    async findManyTweets() {
        return this.tweetsService.findTweets({});
    }
};
__decorate([
    common_1.Post('tweet'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetsController.prototype, "createTweet", null);
__decorate([
    common_1.Post('tweets'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetsController.prototype, "findTweets", null);
__decorate([
    common_1.Post('like-tweet'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetsController.prototype, "likeTweet", null);
__decorate([
    common_1.Post('get-tweet'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetsController.prototype, "getTweet", null);
__decorate([
    common_1.Post('delete-tweets'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TweetsController.prototype, "deleteTweets", null);
__decorate([
    common_1.Get('many-tweets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TweetsController.prototype, "findManyTweets", null);
TweetsController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [tweets_service_1.TweetsService])
], TweetsController);
exports.TweetsController = TweetsController;
//# sourceMappingURL=tweets.controller.js.map