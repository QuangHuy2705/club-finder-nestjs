import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Post } from './interfaces/post.interface'

@Injectable()
export class PostsService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    async findAll(): Promise<Post[]> {
        return await this.postModel.find()
    }

    async findOne(id: string): Promise<Post> {
        return await this.postModel.findOne({_id: id})
    }    

    async createPost(post: Post): Promise<Post> {
        const newPost = new this.postModel(post)
        return await newPost.save()
    }

    async deletePost(id: string): Promise<Post> {
        return await this.postModel.findByIdAndRemove(id)
    }

    async updatePost(id: string, newPost: Post) {
        return await this.postModel.findByIdAndUpdate(id, newPost, {new: true})
    }
}
