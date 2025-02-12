import express from "express"
import { UserController } from "../controllers/user.controller";


const userRouter = express.Router();
const userConroller = new UserController();


userRouter.post('/signup', userConroller.createUser);

userRouter.post('/new-card', userConroller.createCard);

userRouter.post('/new-bank-account', userConroller.createBankAccount);

userRouter.get('/get-bank-accounts/:id', userConroller.getBankAccounts);



export default userRouter;