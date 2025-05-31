import { OccasionService } from './occasion.service';
import { UpdateOccasionDto } from './dto/update-occasion.dto';
import { CreateOccasionDto } from './dto/create-occasion.dto';
export declare class OccasionController {
    private readonly occasionService;
    constructor(occasionService: OccasionService);
    getAll(): Promise<{
        name: string;
        id: number;
    }[]>;
    create(createOccasionData: CreateOccasionDto): Promise<{
        name: string;
        id: number;
    }>;
    getOne(id: number): Promise<{
        name: string;
        id: number;
    }>;
    update(id: number, updateOccasionData: UpdateOccasionDto): Promise<{
        name: string;
        id: number;
    }>;
    delete(id: number): Promise<{
        name: string;
        id: number;
    }>;
}
