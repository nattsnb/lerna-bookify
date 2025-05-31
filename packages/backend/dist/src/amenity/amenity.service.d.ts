import { PrismaService } from '../database/prisma.service';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { UpdateAmenityDto } from './dto/update-amenity.dto';
export declare class AmenityService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<{
        name: string;
        id: number;
        categoryId: number;
    }[]>;
    create(createAmenityData: CreateAmenityDto): Promise<{
        name: string;
        id: number;
        categoryId: number;
    }>;
    getOne(amenityId: number): Promise<{
        name: string;
        id: number;
        categoryId: number;
    }>;
    update(amenityId: number, updateAmenityData: UpdateAmenityDto): Promise<{
        name: string;
        id: number;
        categoryId: number;
    }>;
    delete(amenityId: number): Promise<{
        name: string;
        id: number;
        categoryId: number;
    }>;
}
