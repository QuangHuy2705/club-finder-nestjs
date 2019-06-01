import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoURI } from './config/keys'
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [PostsModule, MongooseModule.forRoot(mongoURI)],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
