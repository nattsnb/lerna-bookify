import { PrismaService } from '../database/prisma.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
export declare class VenueService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<any>;
  create(createVenueData: CreateVenueDto, userId: number): Promise<any>;
  getOne(venueId: number): Promise<any>;
  update(venueId: number, updateVenueData: UpdateVenueDto): Promise<any>;
  delete(venueId: number): Promise<any>;
  filterByAmenity(amenityIds: number[]): Promise<any>;
  filterCombined(amenityIds: number[], occasionIds: number[]): Promise<any>;
}
