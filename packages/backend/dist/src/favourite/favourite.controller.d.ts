import { FavouriteService } from './favourite.service';
import { RequestWithUser } from '../authentication/request-with-user';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
export declare class FavouriteController {
  private readonly favouriteService;
  constructor(favouriteService: FavouriteService);
  getAll(): Promise<
    {
      id: number;
      venueId: number;
      userId: number;
    }[]
  >;
  getByUser(id: number): Promise<
    {
      id: number;
      venueId: number;
      userId: number;
    }[]
  >;
  getByVenue(id: number): Promise<
    {
      id: number;
      venueId: number;
      userId: number;
    }[]
  >;
  getOne(id: number): Promise<{
    id: number;
    venueId: number;
    userId: number;
  }>;
  create(
    dto: CreateFavouriteDto,
    request: RequestWithUser,
  ): Promise<{
    id: number;
    venueId: number;
    userId: number;
  }>;
  delete(id: number): Promise<{
    id: number;
    venueId: number;
    userId: number;
  }>;
}
