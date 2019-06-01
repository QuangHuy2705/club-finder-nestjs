import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Post } from './interfaces/post.interface'
import { 
    FindAllPostsDto,  
    FindPostDto,
    CreatePostDto,
    DeletePostDto
} from './dto/index'

@Injectable()
export class PostsService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    async findAll(): Promise<Post[]> {
        return await this.postModel.find().exec()
    }

    async findPost(findPostDto: FindPostDto): Promise<Post> {
        const foundPost = await this.postModel(findPostDto)
        return foundPost
    }    

}
