import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LogInDto } from './dto/log-in.dto';
import { Response } from 'express';
import { RequestWithUser } from './request-with-user';
export declare class AuthenticationController {
  private readonly authenticationService;
  constructor(authenticationService: AuthenticationService);
  signUp(signUpData: SignUpDto): Promise<{
    email: string;
    name: string;
    password: string;
    phoneNumber: string;
    id: number;
  }>;
  logIn(
    logInData: LogInDto,
    response: Response,
  ): Promise<{
    email: string;
    name: string;
    password: string;
    phoneNumber: string;
    id: number;
  }>;
  logOut(response: Response): void;
  authenticate(request: RequestWithUser): {
    email: string;
    name: string;
    password: string;
    phoneNumber: string;
    id: number;
  };
}
