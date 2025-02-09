import express from "express"
import { UserController } from "../controllers/user.controller";


const userRouter = express.Router();
const userConroller = new UserController();


userRouter.post('/signup', userConroller.createUser);



export default userRouter;