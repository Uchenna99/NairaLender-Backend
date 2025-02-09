import { IsNotEmpty, IsString } from "class-validator";



export class createLoanDTO {
    @IsNotEmpty()
    @IsString()
    amount!: number;

    @IsNotEmpty()
    duration!: number;

    @IsNotEmpty()
    monthlyPayment!: number;
}