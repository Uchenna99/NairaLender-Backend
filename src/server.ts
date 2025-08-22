import express, { Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRouter from "./routes/user.routes";
import loanRouter from "./routes/loan.routes";
import authRouter from "./routes/auth.routes";
import { errorHandler } from "./utils/errorHandler.utils";

dotenv.config();

const portEnv = process.env.PORT;
if(!portEnv){
    console.error("Error: PORT is not defined in .env file");
    process.exit(1);
}


const PORT:number = parseInt(portEnv, 10);
if(isNaN(PORT)){
    console.error("Error: PORT is not a number in .env file");
    process.exit(1);
}


const app = express();

const corsOptions = {
    origin: [
        "http://localhost:5173",            // your dev frontend
        "https://nairalender.vercel.app"   // your production frontend
    ],
    credentials: true,
}


app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the backend server");
});

app.use('/api/v1/user', userRouter);

app.use('/api/v1/loan', loanRouter);

app.use('/api/v1/auth', authRouter);


app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`)
});


export default app;