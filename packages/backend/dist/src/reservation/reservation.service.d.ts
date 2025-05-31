import { PrismaService } from '../database/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class ReservationService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }[]>;
    create(createReservationData: CreateReservationDto, userId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }>;
    getOne(reservationId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }>;
    getByVenue(venueId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }[]>;
    getByUser(userId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }[]>;
    delete(reservationId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }>;
    changeIsActive(reservationId: number): Promise<{
        id: number;
        venueId: number;
        userId: number;
        dateStart: Date;
        dateEnd: Date;
        isActive: boolean;
    }>;
    checkAvailability(venueId: number, dateStart: Date, dateEnd: Date): Promise<{
        available: boolean;
    }>;
    getOccupiedDates(venueId: number): Promise<string[]>;
}
