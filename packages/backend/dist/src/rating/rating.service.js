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
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const prisma_error_enum_1 = require("../database/prisma-error.enum");
const library_1 = require("@prisma/client/runtime/library");
let RatingService = class RatingService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        const ratings = await this.prismaService.rating.findMany();
        if (!ratings.length) {
            throw new common_1.NotFoundException('No ratings found');
        }
        return ratings;
    }
    async create(createRatingData) {
        const { reservationId, ...venueRatingUserData } = createRatingData;
        try {
            return await this.prismaService.rating.create({
                data: {
                    reservation: { connect: { id: reservationId } },
                    ...venueRatingUserData,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException('Reservation not found');
            }
            throw error;
        }
    }
    async getOne(ratingId) {
        const rating = await this.prismaService.rating.findUnique({
            where: {
                id: ratingId,
            },
        });
        if (!rating) {
            throw new common_1.NotFoundException(`Rating with ID ${ratingId} not found`);
        }
        return rating;
    }
    async getByVenue(venueId) {
        const ratings = await this.prismaService.rating.findMany({
            where: {
                reservation: {
                    venueId: venueId,
                },
            },
        });
        if (!ratings.length) {
            throw new common_1.NotFoundException(`No ratings found for venue with ID ${venueId}`);
        }
        return ratings;
    }
    async getByUser(userId) {
        const ratings = await this.prismaService.rating.findMany({
            where: {
                reservation: {
                    userId: userId,
                },
            },
        });
        if (!ratings.length) {
            throw new common_1.NotFoundException(`No ratings found for user with ID ${userId}`);
        }
        return ratings;
    }
    async delete(ratingId) {
        try {
            return await this.prismaService.rating.delete({
                where: {
                    id: ratingId,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException(`Rating with ID ${ratingId} not found`);
            }
            throw error;
        }
    }
};
exports.RatingService = RatingService;
exports.RatingService = RatingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RatingService);
//# sourceMappingURL=rating.service.js.map