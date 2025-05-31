import { CategoryService } from './category.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
    private readonly occasionService;
    constructor(occasionService: CategoryService);
    getAll(): Promise<{
        name: string;
        id: number;
    }[]>;
    create(createOccasionData: CreateCategoryDto): Promise<{
        name: string;
        id: number;
    }>;
    getOne(id: number): Promise<{
        name: string;
        id: number;
    }>;
    update(id: number, updateOccasionData: UpdateCategoryDto): Promise<{
        name: string;
        id: number;
    }>;
    delete(id: number): Promise<{
        name: string;
        id: number;
    }>;
}
