import { LoginDTO } from "../dto/login.dto";



export interface AuthServices {
    login (data: LoginDTO): Promise<{accessToken: string}>
}