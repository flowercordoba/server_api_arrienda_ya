import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string
    
    // @MinLength(3)
    // @MaxLength(8)
    @IsString()
    @IsNotEmpty()
    @IsNotEmpty()

    password:string
}
