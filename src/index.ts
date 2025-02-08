import express from "express"
import dotenv from "dotenv"
import cors from "cors"

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
    origin: "*",
    credentials: true,
    allowedHeaders: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
}


app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/v1/user');