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
    findManyTweets(): Promise<TweetModel[]>;
}
