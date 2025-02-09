import { IsNotEmpty, IsString } from "class-validator";



export class createLoanDTO {
    @IsNotEmpty()
    @IsString()
    amount!: string;

    @IsNotEmpty()
    duration!: string;
}