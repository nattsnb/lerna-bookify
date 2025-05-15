import { PrismaService } from '../database/prisma.service';
import { UserDto } from './user.dto';
export declare class UserService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getByEmail(email: string): Promise<any>;
  getById(id: number): Promise<any>;
  create(user: UserDto): Promise<any>;
}
