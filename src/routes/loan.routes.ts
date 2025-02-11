import express from "express"
import { LoanController } from "../controllers/loan.controller";


const loanRouter = express.Router();
const loanController = new LoanController();


loanRouter.post('/new-loan', loanController.createLoan);

loanRouter.get('/get-loans/:id', loanController.getLoanById);



export default loanRouter;