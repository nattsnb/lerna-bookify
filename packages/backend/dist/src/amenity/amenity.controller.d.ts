import { AmenityService } from './amenity.service';
import { UpdateAmenityDto } from './dto/update-amenity.dto';
import { CreateAmenityDto } from './dto/create-amenity.dto';
export declare class AmenityController {
  private readonly amenityService;
  constructor(amenityService: AmenityService);
  getAll(): Promise<any>;
  create(createAmenityData: CreateAmenityDto): Promise<any>;
  getOne(id: number): Promise<any>;
  update(id: number, updateAmenityData: UpdateAmenityDto): Promise<any>;
  delete(id: number): Promise<any>;
}
