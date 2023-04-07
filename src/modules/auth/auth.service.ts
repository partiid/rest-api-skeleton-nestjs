import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService {
    constructor(
        private JwtService: JwtService,
        private UserService: UserService) { }

    async validateUser(username: string, password: string): Promise<any> {

        const user = await this.UserService.findOne({username});
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.JwtService.sign(payload),
        };
    }

}
