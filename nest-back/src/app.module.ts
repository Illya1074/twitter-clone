import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { TweetsModule } from './tweets/tweets.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
// import { TweetsController } from './tweets/tweets.controller';
import { ChatModule } from './chat/chat.module';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    TweetsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChatModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
