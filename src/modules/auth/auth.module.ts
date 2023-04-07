import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { PassportModule } from '@nestjs/passport/dist';
import { LocalStrategy } from './strategy/local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserModule } from '../user/user.module';
@Module({
  imports: [ PassportModule.register({ session: true }), JwtModule.register({
    secret: "jwt",
    signOptions: { expiresIn: '60m' },
  }),
  UserModule
],
  providers: [AuthService, LocalStrategy, SessionSerializer, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
