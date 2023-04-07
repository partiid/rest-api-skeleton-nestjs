import { Controller, Get, Body, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiCookieAuth, ApiProperty, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { LocalAuthGuard } from './modules/auth/localAuth.guard';
import { AuthenticatedGuard } from './modules/auth/authenticated.guard';
import { JwtAuthGuard } from './modules/auth/jwtAuth.guard';
import { LoginModel } from './modules/auth/login.model';
import { AuthService } from './modules/auth/auth.service';

@ApiCookieAuth()
@Controller()
export class AppController {
    constructor(private readonly appService: AppService,
        private authService: AuthService) { }



    @ApiTags('auth')
    @UseGuards(LocalAuthGuard)
    @Post('/auth/login')
    async login(@Body() dto: LoginModel, @Request() req) {
        return this.authService.login(req.user);
        // if (req.referer === process.env.SWAGGER_REFFERER) {
        //     return req.sessionID;
        // } else {

        //     return req.user;
        // }

    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/test')
    async test() {
        return "Hello";
    }


}

