"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const prisma_error_enum_1 = require("../database/prisma-error.enum");
const library_1 = require("@prisma/client/runtime/library");
let VenueService = class VenueService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        const venues = await this.prismaService.venue.findMany({
            include: {
                owner: true,
                amenityToVenues: { include: { amenity: true } },
            },
        });
        return venues.map((venue) => ({
            ...venue,
            amenities: venue.amenityToVenues.map((venue) => venue.amenity),
        }));
    }
    async create(createVenueData, userId) {
        const { amenitiesIds, facebookUrl, instagramUrl, twitterUrl, websiteUrl, ...venueData } = createVenueData;
        try {
            const newVenue = await this.prismaService.venue.create({
                data: {
                    ...venueData,
                    facebookUrl: facebookUrl ?? undefined,
                    instagramUrl: instagramUrl ?? undefined,
                    twitterUrl: twitterUrl ?? undefined,
                    websiteUrl: websiteUrl ?? undefined,
                    owner: { connect: { id: userId } },
                },
            });
            if (amenitiesIds?.length) {
                await this.prismaService.amenityToVenue.createMany({
                    data: amenitiesIds.map((amenityId) => ({
                        venueId: newVenue.id,
                        amenityId,
                    })),
                    skipDuplicates: true,
                });
            }
            return newVenue;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException(`Owner or amenity not found – check provided IDs`);
            }
            throw error;
        }
    }
    async getOne(venueId) {
        const venue = await this.prismaService.venue.findUnique({
            where: { id: venueId },
            include: {
                owner: true,
                amenityToVenues: { include: { amenity: true } },
            },
        });
        if (!venue) {
            throw new common_1.NotFoundException(`Venue with ID ${venueId} not found`);
        }
        return {
            ...venue,
            amenities: venue.amenityToVenues.map((venue) => venue.amenity),
        };
    }
    async update(venueId, updateVenueData) {
        const { amenitiesIds, ...venueData } = updateVenueData;
        try {
            const updatedVenue = await this.prismaService.venue.update({
                where: { id: venueId },
                data: venueData,
            });
            if (amenitiesIds) {
                await this.prismaService.amenityToVenue.deleteMany({
                    where: { venueId },
                });
                if (amenitiesIds.length > 0) {
                    await this.prismaService.amenityToVenue.createMany({
                        data: amenitiesIds.map((amenityId) => ({
                            venueId,
                            amenityId,
                        })),
                        skipDuplicates: true,
                    });
                }
            }
            return updatedVenue;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException(`Venue with ID ${venueId} not found`);
            }
            throw error;
        }
    }
    async delete(venueId) {
        try {
            return await this.prismaService.venue.delete({
                where: {
                    id: venueId,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException(`Venue with ID ${venueId} not found`);
            }
            throw error;
        }
    }
    async filterByAmenity(amenityIds) {
        const matchedVenueIds = await this.prismaService.amenityToVenue.groupBy({
            by: ['venueId'],
            where: {
                amenityId: { in: amenityIds },
            },
            having: {
                amenityId: {
                    _count: {
                        equals: amenityIds.length,
                    },
                },
            },
        });
        const venueIds = matchedVenueIds.map((item) => item.venueId);
        if (venueIds.length === 0) {
            throw new common_1.NotFoundException(`No venues found matching all amenities`);
        }
        return this.prismaService.venue.findMany({
            where: {
                id: { in: venueIds },
            },
            include: {
                reservations: true,
                favourites: true,
            },
        });
    }
    async filterCombined(amenityIds, occasionIds) {
        let allAmenityIds = [...amenityIds];
        if (occasionIds.length > 0) {
            const occasions = await this.prismaService.occasion.findMany({
                where: { id: { in: occasionIds } },
                include: { amenities: true },
            });
            if (occasions.length === 0) {
                throw new common_1.NotFoundException(`No occasions found for IDs: [${occasionIds.join(', ')}]`);
            }
            const occasionAmenityIds = occasions
                .flatMap((occasion) => occasion.amenities.map((amenity) => amenity.id))
                .filter((value, index, self) => self.indexOf(value) === index);
            allAmenityIds = [...new Set([...allAmenityIds, ...occasionAmenityIds])];
        }
        return this.filterByAmenity(allAmenityIds);
    }
};
exports.VenueService = VenueService;
exports.VenueService = VenueService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VenueService);
//# sourceMappingURL=venue.service.js.map