import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";


export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    firstName!: string;

    @IsNotEmpty()
    @IsString()
    lastName!: string;

    @IsNotEmpty()
    phone!: string;

    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @IsString()
    @Length(8, 20)
    password!: string;
}