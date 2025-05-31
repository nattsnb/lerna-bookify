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
exports.AmenityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const prisma_error_enum_1 = require("../database/prisma-error.enum");
const library_1 = require("@prisma/client/runtime/library");
let AmenityService = class AmenityService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        const amenities = await this.prismaService.amenity.findMany();
        if (!amenities.length) {
            throw new common_1.NotFoundException('No amenities found');
        }
        return amenities;
    }
    async create(createAmenityData) {
        const { name, categoryId } = createAmenityData;
        try {
            return await this.prismaService.amenity.create({
                data: {
                    name,
                    category: {
                        connect: { id: categoryId },
                    },
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException('Category not found');
            }
            throw error;
        }
    }
    async getOne(amenityId) {
        const amenity = await this.prismaService.amenity.findUnique({
            where: {
                id: amenityId,
            },
        });
        if (!amenity) {
            throw new common_1.NotFoundException(`Amenity with ID ${amenityId} not found`);
        }
        return amenity;
    }
    async update(amenityId, updateAmenityData) {
        const { name, categoryId } = updateAmenityData;
        try {
            return await this.prismaService.amenity.update({
                where: { id: amenityId },
                data: {
                    name,
                    category: {
                        connect: { id: categoryId },
                    },
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException('Amenity or category not found');
            }
            throw error;
        }
    }
    async delete(amenityId) {
        try {
            return await this.prismaService.amenity.delete({
                where: {
                    id: amenityId,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException(`Amenity with ID ${amenityId} not found`);
            }
            throw error;
        }
    }
};
exports.AmenityService = AmenityService;
exports.AmenityService = AmenityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AmenityService);
//# sourceMappingURL=amenity.service.js.map