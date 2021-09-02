import { PrismaService } from '../prisma.service';
import { Comment, Tweet, Prisma } from '@prisma/client';
export declare class TweetsService {
    private prisma;
    constructor(prisma: PrismaService);
    createTweet(data: Prisma.TweetCreateInput): Promise<Tweet>;
    createComment(data: Prisma.CommentCreateInput): Promise<Comment>;
    getComment(where: Prisma.CommentWhereUniqueInput): Promise<Comment>;
    deleteComment(where: Prisma.CommentWhereUniqueInput): Promise<Comment>;
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
