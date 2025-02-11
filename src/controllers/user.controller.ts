import { NextFunction, Request, Response } from "express";
import { UserServicesImpl } from "../services/implement/userServicesImpl";
import { CreateUserDTO } from "../dto/createUser.dto";
import { createCardDTO } from "../dto/createCard.dto";
import { CreateBankAccountDTO } from "../dto/createBankAcc.dto";



export class UserController {
    private userServices: UserServicesImpl;

    constructor() {
        this.userServices = new UserServicesImpl();
    }


    public createUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>=>{
        try {
            const data = req.body as CreateUserDTO;
            await this.userServices.createUser(data);
            res.status(201).json({message: 'New user created successfully'});
        } catch (error) {
            next(error);
        }
    }


    public createCard = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>=>{
        try {
            const data = req.body as createCardDTO;
            const newCard = await this.userServices.createPaymentCard(data);
            res.status(201).json(newCard);
        } catch (error) {
            next(error);
        }
    }


    public createBankAccount = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>=>{
        try {
            const data = req.body as CreateBankAccountDTO;
            await this.userServices.createBankAccount(data);
            res.status(201).json({message: 'Bank account added successfully'});
        } catch (error) {
            next(error);
        }
    }
}