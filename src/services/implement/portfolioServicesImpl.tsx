import React from "react";
import EmailService from "../emailService/EmailService";
import { PortfolioServices } from "../portfolioServices";
import { sendMessageDTO } from "../../dto/sendMessage.dto";
import { EmailResponse, PortfolioEmail } from "../emailService";



const emailService = new EmailService();

export class PortfolioServicesImpl implements PortfolioServices {

    async sendMessage(data: sendMessageDTO): Promise<EmailResponse> {
        const template = <PortfolioEmail name={data.name} message={data.message} email={data.email} />;
        const response: EmailResponse = await emailService.sendEmail("ucheagbu@yahoo.com", "From portfolio page", template);

        return response;
    }
    
}