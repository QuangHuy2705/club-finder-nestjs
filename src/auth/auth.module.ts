import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service';
import { HttpStrategy } from '../http/http.strategy'
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';

@Module({
    imports: [UsersModule, PassportModule.register({ defaultStrategy: 'bearer' }),],
    controllers: [AuthController, UsersController],
    providers: [AuthService, HttpStrategy, UsersService],
})
export class AuthModule {}
