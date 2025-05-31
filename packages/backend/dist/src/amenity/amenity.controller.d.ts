import { AmenityService } from './amenity.service';
import { UpdateAmenityDto } from './dto/update-amenity.dto';
import { CreateAmenityDto } from './dto/create-amenity.dto';
export declare class AmenityController {
  private readonly amenityService;
  constructor(amenityService: AmenityService);
  getAll(): Promise<
    {
      name: string;
      id: number;
      categoryId: number;
    }[]
  >;
  create(createAmenityData: CreateAmenityDto): Promise<{
    name: string;
    id: number;
    categoryId: number;
  }>;
  getOne(id: number): Promise<{
    name: string;
    id: number;
    categoryId: number;
  }>;
  update(
    id: number,
    updateAmenityData: UpdateAmenityDto,
  ): Promise<{
    name: string;
    id: number;
    categoryId: number;
  }>;
  delete(id: number): Promise<{
    name: string;
    id: number;
    categoryId: number;
  }>;
}
