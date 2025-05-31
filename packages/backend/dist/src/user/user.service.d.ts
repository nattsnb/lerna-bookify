import { PrismaService } from '../database/prisma.service';
import { UserDto } from './user.dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getByEmail(email: string): Promise<{
        email: string;
        name: string;
        password: string;
        phoneNumber: string;
        id: number;
    }>;
    getById(id: number): Promise<{
        email: string;
        name: string;
        password: string;
        phoneNumber: string;
        id: number;
    }>;
    create(user: UserDto): Promise<{
        email: string;
        name: string;
        password: string;
        phoneNumber: string;
        id: number;
    }>;
}
