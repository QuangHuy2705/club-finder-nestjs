import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoURI } from './config/keys'
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [AuthModule, PostsModule, UsersModule, MongooseModule.forRoot(mongoURI)],
  controllers: [AppController, PostsController, AuthController, UsersController],
  providers: [AppService, PostsService, AuthService, UsersService],
})
export class AppModule {}
