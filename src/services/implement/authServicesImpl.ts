import { db } from "../../config/db";
import { LoginDTO } from "../../dto/login.dto";
import { comparePassword } from "../../utils/password.utils";
import { AuthServices } from "../authServices";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();



export class AuthServicesImpl implements AuthServices{
    async login(data: LoginDTO): Promise<{ accessToken: string; }> {
        const isUserExist = await db.user.findUnique({
            where: { email: data.email },
        })

        if(!isUserExist){
            throw new Error('Invalid password or email')
        }

        const isPasswordValid = await comparePassword(data.password, isUserExist.password);
        if(!isPasswordValid){
            throw new Error('Invalid password or email')
        }

        const fullname = isUserExist.firstName + ' ' + isUserExist.lastName;
        const accessToken = this.generateAccessToken(isUserExist.id, fullname, isUserExist.role);

            return { accessToken };
        }
    
        generateAccessToken( userId: string, name: string, role: string ): string {
            return jwt.sign({id: userId, name: name, role: role}, process.env.JWT_SECRET || '' )
        };
}