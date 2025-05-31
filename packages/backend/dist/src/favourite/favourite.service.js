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
exports.FavouriteService = void 0;
const common_1 = require('@nestjs/common');
const prisma_service_1 = require('../database/prisma.service');
const prisma_error_enum_1 = require('../database/prisma-error.enum');
const library_1 = require('@prisma/client/runtime/library');
let FavouriteService = class FavouriteService {
  prismaService;
  constructor(prismaService) {
    this.prismaService = prismaService;
  }
  async getAll() {
    const favourites = await this.prismaService.favourite.findMany();
    if (!favourites.length) {
      throw new common_1.NotFoundException('No favourite venues found');
    }
    return favourites;
  }
  async create(venueId, userId) {
    try {
      return await this.prismaService.favourite.create({
        data: {
          venue: { connect: { id: venueId } },
          user: { connect: { id: userId } },
        },
      });
    } catch (error) {
      if (
        error instanceof library_1.PrismaClientKnownRequestError &&
        error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist
      ) {
        throw new common_1.NotFoundException('Venue or user not found');
      }
      throw error;
    }
  }
  async getOne(venueFavouriteUserId) {
    const favourite = await this.prismaService.favourite.findUnique({
      where: {
        id: venueFavouriteUserId,
      },
    });
    if (!favourite) {
      throw new common_1.NotFoundException(
        `Favourite with ID ${venueFavouriteUserId} not found`,
      );
    }
    return favourite;
  }
  async getByVenue(venueId) {
    const favourites = await this.prismaService.favourite.findMany({
      where: { venueId },
    });
    if (!favourites.length) {
      throw new common_1.NotFoundException(
        `No favourites found for venue with ID ${venueId}`,
      );
    }
    return favourites;
  }
  async getByUser(userId) {
    const favourites = await this.prismaService.favourite.findMany({
      where: { userId },
    });
    if (!favourites.length) {
      throw new common_1.NotFoundException(
        `No favourites found for user with ID ${userId}`,
      );
    }
    return favourites;
  }
  async delete(venueFavouriteUserId) {
    try {
      return await this.prismaService.favourite.delete({
        where: {
          id: venueFavouriteUserId,
        },
      });
    } catch (error) {
      if (
        error instanceof library_1.PrismaClientKnownRequestError &&
        error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist
      ) {
        throw new common_1.NotFoundException(
          `Favourite with ID ${venueFavouriteUserId} not found`,
        );
      }
      throw error;
    }
  }
};
exports.FavouriteService = FavouriteService;
exports.FavouriteService = FavouriteService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata('design:paramtypes', [prisma_service_1.PrismaService]),
  ],
  FavouriteService,
);
//# sourceMappingURL=favourite.service.js.map
