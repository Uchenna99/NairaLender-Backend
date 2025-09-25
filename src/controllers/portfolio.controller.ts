import { NextFunction, Request, Response } from "express";
import { PortfolioServicesImpl } from "../services/implement/portfolioServicesImpl";
import { sendMessageDTO } from "../dto/sendMessage.dto";



export class PortfolioController {
    private portfolioServices: PortfolioServicesImpl;

    constructor(){
        this.portfolioServices = new PortfolioServicesImpl();
    }

    public sendMessage = async (req: Request, res: Response, next: NextFunction)=>{
        try {
            const data = req.body as sendMessageDTO;
            const result = await this.portfolioServices.sendMessage(data);
            res.status(200).json(result);
            
        } catch (error) {
            next(error);
        }
    };
}