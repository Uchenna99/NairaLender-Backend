import { AccountType } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateBankAccountDTO {
        @IsNotEmpty()
        @IsString()
        bankName!: string;
    
        @IsNotEmpty()
        accountNumber!: string;
    
        @IsNotEmpty()
        accountType!: AccountType;

        @IsNotEmpty()
        @IsString()
        userId!: string
}