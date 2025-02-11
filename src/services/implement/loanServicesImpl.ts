import { Loan } from "@prisma/client";
import { createLoanDTO } from "../../dto/createLoan.dto";
import { loanServices } from "../loanServices";
import { db } from "../../config/db";


export class LoanServicesImpl implements loanServices {
    async createLoan(data: createLoanDTO): Promise<Loan> {
        const findUser = await db.user.findUnique({
            where: {id: data.userId}
        })
        if(!findUser) {
            throw new Error('User not foound');
        }
        const newLoan = await db.loan.create({
            data
        })
        return newLoan;
    }


    async getLoanById(id: string): Promise<Loan[]> {
        const getLoans = await db.loan.findMany({
            where: {userId: id}
        })
        if(!getLoans) {
            throw new Error('No loans attached to this user')
        }
        return getLoans;
    }
    
}