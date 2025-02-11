import { NextFunction, Request, Response } from "express";
import { LoanServicesImpl } from "../services/implement/loanServicesImpl";
import { createLoanDTO } from "../dto/createLoan.dto";



export class LoanController {
    private loanServices: LoanServicesImpl;

    constructor() {
        this.loanServices = new LoanServicesImpl();
    }


    public createLoan = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>=>{
        try {
            const data = req.body as createLoanDTO;
            const newLoan = await this.loanServices.createLoan(data);
            res.status(201).json(newLoan);
        } catch (error) {
            next(error);
        }
    }


    public getLoanById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>=>{
        try {
            const id = req.params.id
            const loanArray = await this.loanServices.getLoanById(id);
            res.status(200).json(loanArray);
        } catch (error) {
            next(error);
        }
    }
}