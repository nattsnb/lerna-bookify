import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { RequestWithUser } from '../authentication/request-with-user';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    getAll(): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }[]>;
    checkAvailability(venueId: number, from: string, to: string): Promise<{
        available: boolean;
    }>;
    getOccupiedDates(id: number): Promise<string[]>;
    getByUser(id: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }[]>;
    getByVenue(id: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }[]>;
    getOne(id: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }>;
    create(createReservationData: CreateReservationDto, request: RequestWithUser): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }>;
    delete(id: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }>;
    update(id: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }>;
}
