import express from "express"
import { UserController } from "../controllers/user.controller";
import { authenticateUser } from "../middleware/userAuth.middleware";


const userRouter = express.Router();
const userConroller = new UserController();


userRouter.post('/signup', userConroller.createUser);

userRouter.post('/new-card', authenticateUser, userConroller.createCard);

userRouter.post('/new-bank-account', authenticateUser, userConroller.createBankAccount);

userRouter.get('/get-bank-accounts/:id', authenticateUser, userConroller.getBankAccounts);

userRouter.get('/get-banks-list', userConroller.getBanksList);

userRouter.get('/get-cards-list/:id', authenticateUser, userConroller.getPaymentCards);



export default userRouter;