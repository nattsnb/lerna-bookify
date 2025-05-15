'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.OccasionService = void 0;
const common_1 = require('@nestjs/common');
const prisma_service_1 = require('../database/prisma.service');
const prisma_error_enum_1 = require('../database/prisma-error.enum');
const library_1 = require('@prisma/client/runtime/library');
let OccasionService = class OccasionService {
  prismaService;
  constructor(prismaService) {
    this.prismaService = prismaService;
  }
  async getAll() {
    const occasions = await this.prismaService.occasion.findMany();
    if (!occasions.length) {
      throw new common_1.NotFoundException('No occasions found');
    }
    return occasions;
  }
  async create(createOccasionData) {
    const { name, amenities } = createOccasionData;
    try {
      return await this.prismaService.occasion.create({
        data: {
          name,
          amenities: { connect: amenities.map((id) => ({ id })) },
        },
      });
    } catch (error) {
      if (
        error instanceof library_1.PrismaClientKnownRequestError &&
        error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist
      ) {
        throw new common_1.NotFoundException('One or more amenities not found');
      }
      throw error;
    }
  }
  async getOne(occasionId) {
    const occasion = await this.prismaService.occasion.findUnique({
      where: {
        id: occasionId,
      },
    });
    if (!occasion) {
      throw new common_1.NotFoundException(
        `Occasion with ID ${occasionId} not found`,
      );
    }
    return occasion;
  }
  async update(occasionId, updateOccasionData) {
    const { name, amenities } = updateOccasionData;
    const updateData = {
      name,
    };
    if (amenities && amenities?.length > 0) {
      updateData.amenities = {
        set: amenities.map((id) => ({ id })),
      };
    }
    try {
      return await this.prismaService.occasion.update({
        where: { id: occasionId },
        data: updateData,
      });
    } catch (error) {
      if (
        error instanceof library_1.PrismaClientKnownRequestError &&
        error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist
      ) {
        throw new common_1.NotFoundException('Occasion or amenities not found');
      }
      throw error;
    }
  }
  async delete(occasionId) {
    try {
      return await this.prismaService.occasion.delete({
        where: {
          id: occasionId,
        },
      });
    } catch (error) {
      if (
        error instanceof library_1.PrismaClientKnownRequestError &&
        error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist
      ) {
        throw new common_1.NotFoundException(
          `Occasion with ID ${occasionId} not found`,
        );
      }
      throw error;
    }
  }
};
exports.OccasionService = OccasionService;
exports.OccasionService = OccasionService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata('design:paramtypes', [prisma_service_1.PrismaService]),
  ],
  OccasionService,
);
//# sourceMappingURL=occasion.service.js.map
