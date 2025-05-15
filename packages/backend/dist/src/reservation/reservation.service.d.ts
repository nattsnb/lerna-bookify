import { PrismaService } from '../database/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class ReservationService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<any>;
  create(
    createReservationData: CreateReservationDto,
    userId: number,
  ): Promise<any>;
  getOne(reservationId: number): Promise<any>;
  getByVenue(venueId: number): Promise<any>;
  getByUser(userId: number): Promise<any>;
  delete(reservationId: number): Promise<any>;
  changeIsActive(reservationId: number): Promise<any>;
  checkAvailability(
    venueId: number,
    dateStart: Date,
    dateEnd: Date,
  ): Promise<{
    available: boolean;
  }>;
  getOccupiedDates(venueId: number): Promise<string[]>;
}
