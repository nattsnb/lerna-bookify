import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { RequestWithUser } from '../authentication/request-with-user';
import { Response } from 'express';
import { VenueFilterDto } from './dto/venue-filter.dto';
export declare class VenueController {
    private readonly venueService;
    constructor(venueService: VenueService);
    getAll(): Promise<{
        amenities: {
            name: string;
            id: number;
            categoryId: number;
        }[];
        amenityToVenues: ({
            amenity: {
                name: string;
                id: number;
                categoryId: number;
            };
        } & {
            venueId: number;
            amenityId: number;
        })[];
        owner: {
            email: string;
            name: string;
            password: string;
            phoneNumber: string;
            id: number;
        };
        rating: number;
        description: string;
        name: string;
        id: number;
        images: import("@prisma/client/runtime/library").JsonValue;
        pricePerNightInEURCent: number;
        capacity: number;
        amountsOfBeds: number;
        extraSleepingDetails: string;
        checkInHour: number;
        checkOutHour: number;
        distanceFromCityCenterInMeters: number;
        facebookUrl: string | null;
        instagramUrl: string | null;
        twitterUrl: string | null;
        websiteUrl: string | null;
        streetNumber: string;
        streetName: string;
        postalCode: string;
        city: string;
        ownerId: number;
    }[]>;
    filterByAmenitiesAndOccasions(filterDto: VenueFilterDto): Promise<({
        reservations: {
            id: number;
            venueId: number;
            userId: number;
            dateStart: Date;
            dateEnd: Date;
            isActive: boolean;
        }[];
        favourites: {
            id: number;
            venueId: number;
            userId: number;
        }[];
    } & {
        rating: number;
        description: string;
        name: string;
        id: number;
        images: import("@prisma/client/runtime/library").JsonValue;
        pricePerNightInEURCent: number;
        capacity: number;
        amountsOfBeds: number;
        extraSleepingDetails: string;
        checkInHour: number;
        checkOutHour: number;
        distanceFromCityCenterInMeters: number;
        facebookUrl: string | null;
        instagramUrl: string | null;
        twitterUrl: string | null;
        websiteUrl: string | null;
        streetNumber: string;
        streetName: string;
        postalCode: string;
        city: string;
        ownerId: number;
    })[]>;
    create(createVenueData: CreateVenueDto, request: RequestWithUser): Promise<{
        rating: number;
        description: string;
        name: string;
        id: number;
        images: import("@prisma/client/runtime/library").JsonValue;
        pricePerNightInEURCent: number;
        capacity: number;
        amountsOfBeds: number;
        extraSleepingDetails: string;
        checkInHour: number;
        checkOutHour: number;
        distanceFromCityCenterInMeters: number;
        facebookUrl: string | null;
        instagramUrl: string | null;
        twitterUrl: string | null;
        websiteUrl: string | null;
        streetNumber: string;
        streetName: string;
        postalCode: string;
        city: string;
        ownerId: number;
    }>;
    getOne(id: number): Promise<{
        amenities: {
            name: string;
            id: number;
            categoryId: number;
        }[];
        amenityToVenues: ({
            amenity: {
                name: string;
                id: number;
                categoryId: number;
            };
        } & {
            venueId: number;
            amenityId: number;
        })[];
        owner: {
            email: string;
            name: string;
            password: string;
            phoneNumber: string;
            id: number;
        };
        rating: number;
        description: string;
        name: string;
        id: number;
        images: import("@prisma/client/runtime/library").JsonValue;
        pricePerNightInEURCent: number;
        capacity: number;
        amountsOfBeds: number;
        extraSleepingDetails: string;
        checkInHour: number;
        checkOutHour: number;
        distanceFromCityCenterInMeters: number;
        facebookUrl: string | null;
        instagramUrl: string | null;
        twitterUrl: string | null;
        websiteUrl: string | null;
        streetNumber: string;
        streetName: string;
        postalCode: string;
        city: string;
        ownerId: number;
    }>;
    update(id: number, updateVenueData: UpdateVenueDto): Promise<{
        rating: number;
        description: string;
        name: string;
        id: number;
        images: import("@prisma/client/runtime/library").JsonValue;
        pricePerNightInEURCent: number;
        capacity: number;
        amountsOfBeds: number;
        extraSleepingDetails: string;
        checkInHour: number;
        checkOutHour: number;
        distanceFromCityCenterInMeters: number;
        facebookUrl: string | null;
        instagramUrl: string | null;
        twitterUrl: string | null;
        websiteUrl: string | null;
        streetNumber: string;
        streetName: string;
        postalCode: string;
        city: string;
        ownerId: number;
    }>;
    delete(id: number): Promise<{
        rating: number;
        description: string;
        name: string;
        id: number;
        images: import("@prisma/client/runtime/library").JsonValue;
        pricePerNightInEURCent: number;
        capacity: number;
        amountsOfBeds: number;
        extraSleepingDetails: string;
        checkInHour: number;
        checkOutHour: number;
        distanceFromCityCenterInMeters: number;
        facebookUrl: string | null;
        instagramUrl: string | null;
        twitterUrl: string | null;
        websiteUrl: string | null;
        streetNumber: string;
        streetName: string;
        postalCode: string;
        city: string;
        ownerId: number;
    }>;
    headRoute(response: Response): Response<any, Record<string, any>>;
}
