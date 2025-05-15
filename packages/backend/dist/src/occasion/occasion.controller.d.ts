import { OccasionService } from './occasion.service';
import { UpdateOccasionDto } from './dto/update-occasion.dto';
import { CreateOccasionDto } from './dto/create-occasion.dto';
export declare class OccasionController {
  private readonly occasionService;
  constructor(occasionService: OccasionService);
  getAll(): Promise<any>;
  create(createOccasionData: CreateOccasionDto): Promise<any>;
  getOne(id: number): Promise<any>;
  update(id: number, updateOccasionData: UpdateOccasionDto): Promise<any>;
  delete(id: number): Promise<any>;
}
