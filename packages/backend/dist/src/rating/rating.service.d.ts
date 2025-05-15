import { PrismaService } from '../database/prisma.service';
import { CreateRatingDto } from './dto/create-rating.dto';
export declare class RatingService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<any>;
  create(createRatingData: CreateRatingDto): Promise<any>;
  getOne(ratingId: number): Promise<any>;
  getByVenue(venueId: number): Promise<any>;
  getByUser(userId: number): Promise<any>;
  delete(ratingId: number): Promise<any>;
}
