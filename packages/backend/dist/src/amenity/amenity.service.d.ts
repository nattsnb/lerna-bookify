import { PrismaService } from '../database/prisma.service';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { UpdateAmenityDto } from './dto/update-amenity.dto';
export declare class AmenityService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<any>;
  create(createAmenityData: CreateAmenityDto): Promise<any>;
  getOne(amenityId: number): Promise<any>;
  update(amenityId: number, updateAmenityData: UpdateAmenityDto): Promise<any>;
  delete(amenityId: number): Promise<any>;
}
