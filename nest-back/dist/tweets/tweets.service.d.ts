import { PrismaService } from '../prisma.service';
import { Tweet, Prisma } from '@prisma/client';
export declare class TweetsService {
    private prisma;
    constructor(prisma: PrismaService);
    createTweet(data: Prisma.TweetCreateInput): Promise<Tweet>;
    findTweets(params: {
        where?: Prisma.TweetWhereInput;
    }): Promise<Tweet[]>;
    likeTweet(params: {
        where: Prisma.TweetWhereUniqueInput;
        data: Prisma.TweetCreateInput;
    }): Promise<Tweet>;
    getTweet(params: {
        where: Prisma.TweetWhereUniqueInput;
    }): Promise<Tweet>;
    deleteTweets(params: {
        where?: Prisma.TweetWhereUniqueInput;
    }): Promise<string>;
}
