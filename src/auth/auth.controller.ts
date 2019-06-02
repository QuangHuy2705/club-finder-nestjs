import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../users/dto/create_user.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('users')
    @UseGuards(AuthGuard())

    @Post('signup')
    createUser(@Body() createUserDto: CreateUserDto) {
        // this.authService.createUser(createUserDto)
    }
}
