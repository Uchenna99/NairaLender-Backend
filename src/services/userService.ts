import { BankAccount, PaymentCard, user } from "@prisma/client";
import { CreateUserDTO } from "../dto/createUser.dto";
import { createCardDTO } from "../dto/createCard.dto";
import { CreateBankAccountDTO } from "../dto/createBankAcc.dto";


export interface userServices {
    createUser (data: CreateUserDTO): Promise<user>;
    createPaymentCard (data: createCardDTO): Promise<PaymentCard>;
    createBankAccount (data: CreateBankAccountDTO): Promise<BankAccount>;
}