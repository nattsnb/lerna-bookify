import { PrismaService } from '../database/prisma.service';
export declare class FavouriteService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<{
        id: number;
        venueId: number;
        userId: number;
    }[]>;
    create(venueId: number, userId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
    }>;
    getOne(venueFavouriteUserId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
    }>;
    getByVenue(venueId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
    }[]>;
    getByUser(userId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
    }[]>;
    delete(venueFavouriteUserId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
    }>;
}
