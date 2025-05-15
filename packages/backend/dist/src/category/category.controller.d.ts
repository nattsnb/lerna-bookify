import { CategoryService } from './category.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
  private readonly occasionService;
  constructor(occasionService: CategoryService);
  getAll(): Promise<any>;
  create(createOccasionData: CreateCategoryDto): Promise<any>;
  getOne(id: number): Promise<any>;
  update(id: number, updateOccasionData: UpdateCategoryDto): Promise<any>;
  delete(id: number): Promise<any>;
}
