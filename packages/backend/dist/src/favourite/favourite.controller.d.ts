import { FavouriteService } from './favourite.service';
import { RequestWithUser } from '../authentication/request-with-user';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
export declare class FavouriteController {
  private readonly favouriteService;
  constructor(favouriteService: FavouriteService);
  getAll(): Promise<any>;
  getByUser(id: number): Promise<any>;
  getByVenue(id: number): Promise<any>;
  getOne(id: number): Promise<any>;
  create(dto: CreateFavouriteDto, request: RequestWithUser): Promise<any>;
  delete(id: number): Promise<any>;
}
