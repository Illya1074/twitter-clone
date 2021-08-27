import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Tweet, Prisma } from '@prisma/client';

@Injectable()
export class TweetsService {
  constructor(private prisma: PrismaService) {}

  async createTweet(data: Prisma.TweetCreateInput): Promise<Tweet> {
    return this.prisma.tweet.create({
      data,
    });
  }

  async findTweets(params: {
    where?: Prisma.TweetWhereInput;
  }): Promise<Tweet[]> {
    const { where } = params;
    return this.prisma.tweet.findMany({
      where,
      include: {
        likeBy: true,
      },
    });
  }

  async likeTweet(params: {
    where: Prisma.TweetWhereUniqueInput;
    data: Prisma.TweetCreateInput;
  }): Promise<Tweet> {
    const { where, data } = params;
    return this.prisma.tweet.update({
      where,
      data,
    });
  }

  async getTweet(params: {
    where: Prisma.TweetWhereUniqueInput;
  }): Promise<Tweet> {
    const { where } = params;
    return this.prisma.tweet.findUnique({
      where,
      include: {
        likeBy: true,
      },
    });
  }

  async deleteTweets(params: {
    where?: Prisma.TweetWhereUniqueInput;
  }): Promise<string> {
    const { where } = params;
    const deleteUser = await this.prisma.tweet.delete({
      where,
    });
    return `deleted tweet with ${where.id} id`;
  }
}
