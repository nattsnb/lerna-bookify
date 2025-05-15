import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { RequestWithUser } from '../authentication/request-with-user';
import { Response } from 'express';
import { VenueFilterDto } from './dto/venue-filter.dto';
export declare class VenueController {
  private readonly venueService;
  constructor(venueService: VenueService);
  getAll(): Promise<any>;
  filterByAmenitiesAndOccasions(filterDto: VenueFilterDto): Promise<any>;
  create(
    createVenueData: CreateVenueDto,
    request: RequestWithUser,
  ): Promise<any>;
  getOne(id: number): Promise<any>;
  update(id: number, updateVenueData: UpdateVenueDto): Promise<any>;
  delete(id: number): Promise<any>;
  headRoute(response: Response): Response<any, Record<string, any>>;
}
