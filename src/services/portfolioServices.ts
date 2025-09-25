import { sendMessageDTO } from "../dto/sendMessage.dto";
import { EmailResponse } from "./emailService";



export interface PortfolioServices {
    sendMessage(data: sendMessageDTO): Promise<EmailResponse>;
}