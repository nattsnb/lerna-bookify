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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ReservationService = void 0;
const common_1 = require('@nestjs/common');
const prisma_service_1 = require('../database/prisma.service');
const prisma_error_enum_1 = require('../database/prisma-error.enum');
const library_1 = require('@prisma/client/runtime/library');
const dayjs_1 = __importDefault(require('dayjs'));
let ReservationService = class ReservationService {
  prismaService;
  constructor(prismaService) {
    this.prismaService = prismaService;
  }
  async getAll() {
    const reservations = await this.prismaService.reservation.findMany();
    if (!reservations.length) {
      throw new common_1.NotFoundException('No reservations found');
    }
    return reservations;
  }
  async create(createReservationData, userId) {
    const { venueId, dateStart, dateEnd, ...reservationData } =
      createReservationData;
    const availability = await this.checkAvailability(
      venueId,
      dateStart,
      dateEnd,
    );
    if (!availability.available) {
      throw new common_1.ConflictException(
        'Selected dates are already reserved.',
      );
    }
    try {
      return await this.prismaService.reservation.create({
        data: {
          venue: { connect: { id: venueId } },
          user: { connect: { id: userId } },
          dateEnd: dateEnd,
          dateStart: dateStart,
          isActive: true,
          ...reservationData,
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
  async getOne(reservationId) {
    const reservation = await this.prismaService.reservation.findUnique({
      where: {
        id: reservationId,
      },
    });
    if (!reservation) {
      throw new common_1.NotFoundException(
        `Reservation with ID ${reservationId} not found`,
      );
    }
    return reservation;
  }
  async getByVenue(venueId) {
    const reservations = await this.prismaService.reservation.findMany({
      where: {
        venueId,
      },
    });
    if (!reservations.length) {
      throw new common_1.NotFoundException(
        `No reservations found for venue with ID ${venueId}`,
      );
    }
    return reservations;
  }
  async getByUser(userId) {
    const reservations = await this.prismaService.reservation.findMany({
      where: {
        userId,
      },
    });
    if (!reservations.length) {
      throw new common_1.NotFoundException(
        `No reservations found for user with ID ${userId}`,
      );
    }
    return reservations;
  }
  async delete(reservationId) {
    try {
      return await this.prismaService.reservation.delete({
        where: {
          id: reservationId,
        },
      });
    } catch (error) {
      if (
        error instanceof library_1.PrismaClientKnownRequestError &&
        error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist
      ) {
        throw new common_1.NotFoundException(
          `Reservation with ID ${reservationId} not found`,
        );
      }
      throw error;
    }
  }
  async changeIsActive(reservationId) {
    try {
      const reservation = await this.prismaService.reservation.findUnique({
        where: { id: reservationId },
      });
      if (!reservation) {
        throw new common_1.NotFoundException('Reservation not found');
      }
      return await this.prismaService.reservation.update({
        where: { id: reservationId },
        data: {
          isActive: !reservation.isActive,
        },
      });
    } catch (error) {
      if (
        error instanceof library_1.PrismaClientKnownRequestError &&
        error.code === prisma_error_enum_1.PrismaError.RecordDoesNotExist
      ) {
        throw new common_1.NotFoundException('Reservation not found');
      }
      throw error;
    }
  }
  async checkAvailability(venueId, dateStart, dateEnd) {
    const conflicts = await this.prismaService.reservation.findMany({
      where: {
        venueId,
        isActive: true,
        dateStart: { lt: dateEnd },
        dateEnd: { gt: dateStart },
      },
    });
    if (conflicts.length > 0) {
      return { available: false };
    }
    return { available: true };
  }
  async getOccupiedDates(venueId) {
    const reservations = await this.prismaService.reservation.findMany({
      where: {
        venueId,
        isActive: true,
      },
      select: {
        dateStart: true,
        dateEnd: true,
      },
    });
    const occupied = [];
    for (const reservation of reservations) {
      let current = (0, dayjs_1.default)(reservation.dateStart);
      const end = (0, dayjs_1.default)(reservation.dateEnd);
      while (current.isBefore(end, 'day')) {
        const dateAsString = current.format('YYYY-MM-DD');
        if (!occupied.includes(dateAsString)) {
          occupied.push(dateAsString);
        }
        current = current.add(1, 'day');
      }
    }
    return occupied.sort();
  }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata('design:paramtypes', [prisma_service_1.PrismaService]),
  ],
  ReservationService,
);
//# sourceMappingURL=reservation.service.js.map
