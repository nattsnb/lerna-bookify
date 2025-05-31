import { PrismaService } from '../database/prisma.service';
import { CreateRatingDto } from './dto/create-rating.dto';
export declare class RatingService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<
    {
      id: number;
      score: number;
      review: string | null;
      reservationId: number;
      createdAt: Date;
    }[]
  >;
  create(createRatingData: CreateRatingDto): Promise<{
    id: number;
    score: number;
    review: string | null;
    reservationId: number;
    createdAt: Date;
  }>;
  getOne(ratingId: number): Promise<{
    id: number;
    score: number;
    review: string | null;
    reservationId: number;
    createdAt: Date;
  }>;
  getByVenue(venueId: number): Promise<
    {
      id: number;
      score: number;
      review: string | null;
      reservationId: number;
      createdAt: Date;
    }[]
  >;
  getByUser(userId: number): Promise<
    {
      id: number;
      score: number;
      review: string | null;
      reservationId: number;
      createdAt: Date;
    }[]
  >;
  delete(ratingId: number): Promise<{
    id: number;
    score: number;
    review: string | null;
    reservationId: number;
    createdAt: Date;
  }>;
}
