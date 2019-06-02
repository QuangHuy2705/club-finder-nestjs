import { Model } from 'mongoose' 
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../users/interfaces/user.interface'

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async findOneByToken(token) {
        return await this.userModel.findOne({})
    }
}
