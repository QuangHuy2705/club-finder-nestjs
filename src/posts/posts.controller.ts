import { Controller, Get, Param, Req, Body, Post, Delete, Put } from '@nestjs/common';
import { Request } from 'express';
import { Post as IPost } from './interfaces/post.interface'
import { PostsService } from './posts.service'
import { CreatePostDto } from './dto/create_post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {}

    @Get()
    findAll(): Promise<IPost[]> {
        return this.postService.findAll()
    }

    @Get(':id')
    findOne(@Param() params): Promise<IPost> {
        return this.postService.findOne(params.id)
    }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto): Promise<IPost> {
        return this.postService.createPost(createPostDto)
    }

    @Delete(':id')
    deletePost(@Param() params): Promise<IPost> {
        return this.postService.deletePost(params.id)
    }

    @Put(':id')
    updatePost(@Param() params, @Body() updatePostDto: CreatePostDto): Promise<IPost> {
        return this.postService.updatePost(params.id, updatePostDto)
    }
}
