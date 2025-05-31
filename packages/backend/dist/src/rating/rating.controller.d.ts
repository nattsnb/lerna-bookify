import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    getAll(): Promise<{
        id: number;
        score: number;
        review: string | null;
        reservationId: number;
        createdAt: Date;
    }[]>;
    getByUser(id: number): Promise<{
        id: number;
        score: number;
        review: string | null;
        reservationId: number;
        createdAt: Date;
    }[]>;
    getByVenue(id: number): Promise<{
        id: number;
        score: number;
        review: string | null;
        reservationId: number;
        createdAt: Date;
    }[]>;
    getOne(id: number): Promise<{
        id: number;
        score: number;
        review: string | null;
        reservationId: number;
        createdAt: Date;
    }>;
    create(createRatingData: CreateRatingDto): Promise<{
        id: number;
        score: number;
        review: string | null;
        reservationId: number;
        createdAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        score: number;
        review: string | null;
        reservationId: number;
        createdAt: Date;
    }>;
}
