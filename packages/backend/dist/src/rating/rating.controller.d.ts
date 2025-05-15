import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
export declare class RatingController {
  private readonly ratingService;
  constructor(ratingService: RatingService);
  getAll(): Promise<any>;
  getByUser(id: number): Promise<any>;
  getByVenue(id: number): Promise<any>;
  getOne(id: number): Promise<any>;
  create(createRatingData: CreateRatingDto): Promise<any>;
  delete(id: number): Promise<any>;
}
