import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, Length, IsDate, IsOptional} from 'class-validator'; 
export class UserModel {

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @Length(5, 64)
    username: string;

    @ApiProperty()
    @Length(6, 64)
    password: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    createdAt?: Date;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    updatedAt?: Date;




}