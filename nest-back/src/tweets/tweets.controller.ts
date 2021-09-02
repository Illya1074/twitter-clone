import { TweetsService } from './tweets.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { Tweet as TweetModel } from '@prisma/client';

@Controller()
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post('tweet')
  async createTweet(
    @Body() postData: { content: string; authorId: number; username: string },
  ): Promise<TweetModel> {
    const { content, username, authorId } = postData;
    return this.tweetsService.createTweet({
      content,
      authorId,
      authorUsername: username,
    });
  }

  @Post('tweets')
  async findTweets(@Body() postData: { id: number }): Promise<TweetModel[]> {
    const { id } = postData;
    console.log(id);
    return this.tweetsService.findTweets({
      where: {
        authorId: id,
      },
    });
  }

  @Post('like-tweet')
  async likeTweet(
    @Body() postData: { tweetId: number; userId: number },
  ): Promise<TweetModel> {
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

  @Post('get-tweet')
  async getTweet(@Body() postData: { tweetId: number }): Promise<TweetModel> {
    const { tweetId } = postData;
    return this.tweetsService.getTweet({
      where: {
        id: tweetId,
      },
    });
  }

  @Post('delete-tweets')
  async deleteTweets(@Body() postData: { id: number }): Promise<string> {
    const { id } = postData;
    console.log(id);
    return this.tweetsService.deleteTweets({
      where: {
        id: id,
      },
    });
  }

  @Post('create-comment')
  async createComment(
    @Body() postData: { tweetId: number; content: string; username: string },
  ): Promise<any> {
    const { tweetId, content, username } = postData;
    return this.tweetsService.createComment({
      content,
      username,
      tweet: {
        connect: {
          id: tweetId,
        },
      },
    });
  }

  @Post('get-comment')
  async getComment(@Body() postData: { id: number }): Promise<any> {
    const { id } = postData;
    return this.tweetsService.getComment({
      id,
    });
  }

  @Post('delete-comment')
  async deleteComment(@Body() postData: { id: number }): Promise<any> {
    const { id } = postData;
    return this.tweetsService.deleteComment({
      id,
    });
  }

  @Get('many-tweets')
  async findManyTweets(): Promise<TweetModel[]> {
    return this.tweetsService.findTweets({});
  }
}
