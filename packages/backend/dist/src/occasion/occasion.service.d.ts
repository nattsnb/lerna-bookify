import { PrismaService } from '../database/prisma.service';
import { CreateOccasionDto } from './dto/create-occasion.dto';
import { UpdateOccasionDto } from './dto/update-occasion.dto';
export declare class OccasionService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<{
        name: string;
        id: number;
    }[]>;
    create(createOccasionData: CreateOccasionDto): Promise<{
        name: string;
        id: number;
    }>;
    getOne(occasionId: number): Promise<{
        name: string;
        id: number;
    }>;
    update(occasionId: number, updateOccasionData: UpdateOccasionDto): Promise<{
        name: string;
        id: number;
    }>;
    delete(occasionId: number): Promise<{
        name: string;
        id: number;
    }>;
}
