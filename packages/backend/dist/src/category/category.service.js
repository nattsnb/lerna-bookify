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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const prisma_error_enum_1 = require("../database/prisma-error.enum");
const library_1 = require("@prisma/client/runtime/library");
let CategoryService = class CategoryService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        const categories = await this.prismaService.category.findMany();
        if (!categories.length) {
            throw new common_1.NotFoundException('No categories found');
        }
        return categories;
    }
    async create(createCategoryData) {
        const { name, amenitiesIds } = createCategoryData;
        const invalidAmenityIds = [];
        if (amenitiesIds) {
            for (const id of amenitiesIds) {
                const amenity = await this.prismaService.amenity.findUnique({
                    where: { id },
                });
                if (!amenity)
                    invalidAmenityIds.push(id);
            }
        }
        if (invalidAmenityIds.length) {
            throw new common_1.NotFoundException(`Invalid amenity IDs: ${invalidAmenityIds.join(', ')}`);
        }
        return this.prismaService.category.create({
            data: {
                name,
                amenities: amenitiesIds?.length
                    ? { connect: amenitiesIds.map((id) => ({ id })) }
                    : undefined,
            },
        });
    }
    async getOne(categoryId) {
        const category = await this.prismaService.category.findUnique({
            where: {
                id: categoryId,
            },
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category with ID ${categoryId} not found`);
        }
        return category;
    }
    async update(categoryId, updateCategoryData) {
        const { name, amenitiesIds } = updateCategoryData;
        try {
            return await this.prismaService.category.update({
                where: { id: categoryId },
                data: {
                    name,
                    amenities: amenitiesIds?.length
                        ? { set: amenitiesIds.map((id) => ({ id })) }
                        : undefined,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException('Category or amenities not found');
            }
            throw error;
        }
    }
    async delete(categoryId) {
        try {
            return await this.prismaService.category.delete({
                where: {
                    id: categoryId,
                },
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist) {
                throw new common_1.NotFoundException(`Category with ID ${categoryId} not found`);
            }
            throw error;
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryService);
//# sourceMappingURL=category.service.js.map