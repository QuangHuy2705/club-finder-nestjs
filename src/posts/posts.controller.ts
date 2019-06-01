import { Controller, Get } from '@nestjs/common';
import { Post } from './interfaces/post.interface'
import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {}

    @Get()
    findAll(): Promise<Post[]> {
        return this.postService.findAll()
    }
}
