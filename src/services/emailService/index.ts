import { SendMailOptions } from 'nodemailer';


// export { WelcomeEmail } from './WelcomeEmail';

// export { OtpEmail } from './OtpEmail';

export { PortfolioEmail } from './PortFolioEmail';


export type EmailResponse = {
  success: boolean;
  result?: any;
  error?: string;
};

export type EmailOptions = SendMailOptions;