import { ApiProperty } from "@nestjs/swagger";
export class LoginModel {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}