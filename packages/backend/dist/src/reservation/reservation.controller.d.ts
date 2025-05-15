import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { RequestWithUser } from '../authentication/request-with-user';
export declare class ReservationController {
  private readonly reservationService;
  constructor(reservationService: ReservationService);
  getAll(): Promise<any>;
  checkAvailability(
    venueId: number,
    from: string,
    to: string,
  ): Promise<{
    available: boolean;
  }>;
  getOccupiedDates(id: number): Promise<string[]>;
  getByUser(id: number): Promise<any>;
  getByVenue(id: number): Promise<any>;
  getOne(id: number): Promise<any>;
  create(
    createReservationData: CreateReservationDto,
    request: RequestWithUser,
  ): Promise<any>;
  delete(id: number): Promise<any>;
  update(id: number): Promise<any>;
}
