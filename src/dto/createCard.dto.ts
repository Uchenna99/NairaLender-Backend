import { IsNotEmpty, IsString } from "class-validator";


export class createCardDTO {
    @IsNotEmpty()
    @IsString()
    cardName!: string;

    @IsNotEmpty()
    cardNumber!: string;

    @IsNotEmpty()
    issuingBank!: string;

    @IsNotEmpty()
    expiry!: string;

    @IsNotEmpty()
    userId!: string;
}