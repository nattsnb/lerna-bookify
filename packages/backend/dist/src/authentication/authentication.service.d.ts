import { SignUpDto } from './dto/sign-up.dto';
import { UserService } from '../user/user.service';
import { LogInDto } from './dto/log-in.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { RequestWithUser } from './request-with-user';
export declare class AuthenticationService {
    private readonly jwtService;
    private readonly configService;
    private readonly usersService;
    constructor(jwtService: JwtService, configService: ConfigService, usersService: UserService);
    signUp(signUpData: SignUpDto): Promise<{
        email: string;
        name: string;
        password: string;
        phoneNumber: string;
        id: number;
    }>;
    logIn(logInData: LogInDto, response: Response): Promise<{
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
    private getAuthenticatedUser;
    private getUserByEmail;
    private verifyPassword;
    private getCookieWithJwtToken;
    private getCookieForLogOut;
}
