import express from "express"
import { LoanController } from "../controllers/loan.controller";
import { authenticateUser } from "../middleware/userAuth.middleware";


const loanRouter = express.Router();
const loanController = new LoanController();


loanRouter.post('/new-loan', authenticateUser, loanController.createLoan);

loanRouter.get('/get-loans/:id', authenticateUser, loanController.getLoanById);



export default loanRouter;