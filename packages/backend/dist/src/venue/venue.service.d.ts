import { PrismaService } from '../database/prisma.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
export declare class VenueService {
  private readonly prismaService;
  constructor(prismaService: PrismaService);
  getAll(): Promise<
    {
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
      images: import('@prisma/client/runtime/library').JsonValue;
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
    }[]
  >;
  create(
    createVenueData: CreateVenueDto,
    userId: number,
  ): Promise<{
    rating: number;
    description: string;
    name: string;
    id: number;
    images: import('@prisma/client/runtime/library').JsonValue;
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
  getOne(venueId: number): Promise<{
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
    images: import('@prisma/client/runtime/library').JsonValue;
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
  update(
    venueId: number,
    updateVenueData: UpdateVenueDto,
  ): Promise<{
    rating: number;
    description: string;
    name: string;
    id: number;
    images: import('@prisma/client/runtime/library').JsonValue;
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
  delete(venueId: number): Promise<{
    rating: number;
    description: string;
    name: string;
    id: number;
    images: import('@prisma/client/runtime/library').JsonValue;
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
  filterByAmenity(amenityIds: number[]): Promise<
    ({
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
      images: import('@prisma/client/runtime/library').JsonValue;
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
    })[]
  >;
  filterCombined(
    amenityIds: number[],
    occasionIds: number[],
  ): Promise<
    ({
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
      images: import('@prisma/client/runtime/library').JsonValue;
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
    })[]
  >;
}
