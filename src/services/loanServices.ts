import { Loan } from "@prisma/client"
import { createLoanDTO } from "../dto/createLoan.dto"


export interface loanServices {
    createLoan (data: createLoanDTO): Promise<Loan>;
}