import { PrismaService } from '../database/prisma.service';
import { CreateOccasionDto } from './dto/create-occasion.dto';
import { UpdateOccasionDto } from './dto/update-occasion.dto';
export declare class OccasionService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<any>;
  create(createOccasionData: CreateOccasionDto): Promise<any>;
  getOne(occasionId: number): Promise<any>;
  update(
    occasionId: number,
    updateOccasionData: UpdateOccasionDto,
  ): Promise<any>;
  delete(occasionId: number): Promise<any>;
}
