import { User } from '@prisma/client';
export declare class AuthenticationResponseDto implements User {
    id: number;
    email: string;
    name: string;
    password: string;
    phoneNumber: string;
}
