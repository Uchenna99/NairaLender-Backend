import { user, PaymentCard, BankAccount, Banks } from "@prisma/client";
import { CreateBankAccountDTO } from "../../dto/createBankAcc.dto";
import { createCardDTO } from "../../dto/createCard.dto";
import { CreateUserDTO } from "../../dto/createUser.dto";
import { userServices } from "../userService";
import { db } from "../../config/db";
import { hashPassword } from "../../utils/password.utils";


export class UserServicesImpl implements userServices {
    async createUser(data: CreateUserDTO): Promise<user> {
        const findUser = await db.user.findUnique({
            where: {email: data.email}
        })
        if(findUser) {
            throw new Error('Sorry, this email has already been used');
        }
        const newUser = await db.user.create({
            data:{
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                email: data.email,
                password: await hashPassword(data.password)
            }
        })
        return newUser;
    }
    
    
    async createPaymentCard(data: createCardDTO): Promise<PaymentCard> {
        const findCard = await db.paymentCard.findUnique({
            where: {cardNumber: data.cardNumber}
        })
        if(findCard) {
            throw new Error('Sorry, this card has already been used'); 
        }
        const newCard = await db.paymentCard.create({
            data
        })
        return newCard;
    }
    
    
    async createBankAccount(data: CreateBankAccountDTO): Promise<BankAccount> {
        const findAccount = await db.bankAccount.findUnique({
            where: {accountNumber: data.accountNumber}
        })
        if(findAccount) {
            throw new Error('Sorry, this account number has already been used');
        }
        const findUser = await db.user.findUnique({
            where: {id: data.userId}
        })
        if(!findUser) {
            throw new Error('User not found');
        }
        const newAccount = await db.bankAccount.create({
            data
        })
        return newAccount;
    }
    
    
    async getBankAccounts(userId: string): Promise<BankAccount[] | null> {
        const getAccounts = await db.bankAccount.findMany({
            where: {userId}
        });
        return getAccounts;
    }
    
    
    async getBanksList(): Promise<Banks[]> {
        const banksList = await db.banks.findMany({
            orderBy: {name: 'asc'}
        });
        return banksList;
    }


    async getPaymentCards(userId: string): Promise<PaymentCard[] | null> {
        const cards = await db.paymentCard.findMany({
            where: {userId}
        });
        return cards;
    }
    
}