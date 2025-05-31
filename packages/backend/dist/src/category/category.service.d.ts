import { PrismaService } from '../database/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<
    {
      name: string;
      id: number;
    }[]
  >;
  create(createCategoryData: CreateCategoryDto): Promise<{
    name: string;
    id: number;
  }>;
  getOne(categoryId: number): Promise<{
    name: string;
    id: number;
  }>;
  update(
    categoryId: number,
    updateCategoryData: UpdateCategoryDto,
  ): Promise<{
    name: string;
    id: number;
  }>;
  delete(categoryId: number): Promise<{
    name: string;
    id: number;
  }>;
}
