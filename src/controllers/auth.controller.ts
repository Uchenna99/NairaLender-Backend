import { NextFunction, Request, Response } from "express";
import { AuthServicesImpl } from "../services/implement/authServicesImpl";
import { LoginDTO } from "../dto/login.dto";



export class AuthController {
    private authServices: AuthServicesImpl;

    constructor() {
        this.authServices = new AuthServicesImpl();
    }


    public login = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void>=>{
        try {
            const data = req.body as LoginDTO;
            const token = await this.authServices.login(data);
            res.status(200).json(token);
        } catch (error) {
            next(error);
        }
    }
}