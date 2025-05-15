import { PrismaService } from '../database/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<any>;
  create(createCategoryData: CreateCategoryDto): Promise<any>;
  getOne(categoryId: number): Promise<any>;
  update(
    categoryId: number,
    updateCategoryData: UpdateCategoryDto,
  ): Promise<any>;
  delete(categoryId: number): Promise<any>;
}
