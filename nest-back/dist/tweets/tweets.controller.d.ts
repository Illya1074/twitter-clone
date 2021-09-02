import { TweetsService } from './tweets.service';
import { Tweet as TweetModel } from '@prisma/client';
export declare class TweetsController {
    private readonly tweetsService;
    constructor(tweetsService: TweetsService);
    createTweet(postData: {
        content: string;
        authorId: number;
        username: string;
    }): Promise<TweetModel>;
    findTweets(postData: {
        id: number;
    }): Promise<TweetModel[]>;
    likeTweet(postData: {
        tweetId: number;
        userId: number;
    }): Promise<TweetModel>;
    getTweet(postData: {
        tweetId: number;
    }): Promise<TweetModel>;
    deleteTweets(postData: {
        id: number;
    }): Promise<string>;
    createComment(postData: {
        tweetId: number;
        content: string;
        username: string;
    }): Promise<any>;
    getComment(postData: {
        id: number;
    }): Promise<any>;
    deleteComment(postData: {
        id: number;
    }): Promise<any>;
    findManyTweets(): Promise<TweetModel[]>;
}
