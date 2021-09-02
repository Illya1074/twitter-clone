import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Comment, Tweet, Prisma } from '@prisma/client';

@Injectable()
export class TweetsService {
  constructor(private prisma: PrismaService) {}

  async createTweet(data: Prisma.TweetCreateInput): Promise<Tweet> {
    console.log(data);
    return this.prisma.tweet.create({
      data,
    });
  }

  async createComment(data: Prisma.CommentCreateInput): Promise<Comment> {
    console.log(data);
    return this.prisma.comment.create({
      data,
    });
  }

  async getComment(where: Prisma.CommentWhereUniqueInput): Promise<Comment> {
    return this.prisma.comment.findUnique({
      where,
    });
  }

  async deleteComment(where: Prisma.CommentWhereUniqueInput): Promise<Comment> {
    return this.prisma.comment.delete({
      where,
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
        comment: true,
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
        comment: true,
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
