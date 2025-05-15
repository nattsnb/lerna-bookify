import { PrismaService } from '../database/prisma.service';
export declare class FavouriteService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<any>;
  create(venueId: number, userId: number): Promise<any>;
  getOne(venueFavouriteUserId: number): Promise<any>;
  getByVenue(venueId: number): Promise<any>;
  getByUser(userId: number): Promise<any>;
  delete(venueFavouriteUserId: number): Promise<any>;
}
