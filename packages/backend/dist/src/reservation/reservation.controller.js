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
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ReservationController = void 0;
const common_1 = require('@nestjs/common');
const reservation_service_1 = require('./reservation.service');
const create_reservation_dto_1 = require('./dto/create-reservation.dto');
const jwt_authentication_guard_1 = require('../authentication/jwt-authentication.guard');
let ReservationController = class ReservationController {
  reservationService;
  constructor(reservationService) {
    this.reservationService = reservationService;
  }
  getAll() {
    return this.reservationService.getAll();
  }
  checkAvailability(venueId, from, to) {
    const dateStart = new Date(from);
    const dateEnd = new Date(to);
    return this.reservationService.checkAvailability(
      venueId,
      dateStart,
      dateEnd,
    );
  }
  getOccupiedDates(id) {
    return this.reservationService.getOccupiedDates(id);
  }
  getByUser(id) {
    return this.reservationService.getByUser(id);
  }
  getByVenue(id) {
    return this.reservationService.getByVenue(id);
  }
  getOne(id) {
    return this.reservationService.getOne(id);
  }
  create(createReservationData, request) {
    return this.reservationService.create(
      createReservationData,
      request.user.id,
    );
  }
  delete(id) {
    return this.reservationService.delete(id);
  }
  update(id) {
    return this.reservationService.changeIsActive(id);
  }
};
exports.ReservationController = ReservationController;
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  ReservationController.prototype,
  'getAll',
  null,
);
__decorate(
  [
    (0, common_1.Get)('availability/:venueId'),
    __param(0, (0, common_1.Param)('venueId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('from')),
    __param(2, (0, common_1.Query)('to')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number, String, String]),
    __metadata('design:returntype', void 0),
  ],
  ReservationController.prototype,
  'checkAvailability',
  null,
);
__decorate(
  [
    (0, common_1.Get)('occupied/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  ReservationController.prototype,
  'getOccupiedDates',
  null,
);
__decorate(
  [
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  ReservationController.prototype,
  'getByUser',
  null,
);
__decorate(
  [
    (0, common_1.Get)('venue/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  ReservationController.prototype,
  'getByVenue',
  null,
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  ReservationController.prototype,
  'getOne',
  null,
);
__decorate(
  [
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.JwtAuthenticationGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      create_reservation_dto_1.CreateReservationDto,
      Object,
    ]),
    __metadata('design:returntype', void 0),
  ],
  ReservationController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  ReservationController.prototype,
  'delete',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number]),
    __metadata('design:returntype', void 0),
  ],
  ReservationController.prototype,
  'update',
  null,
);
exports.ReservationController = ReservationController = __decorate(
  [
    (0, common_1.Controller)('reservation'),
    __metadata('design:paramtypes', [reservation_service_1.ReservationService]),
  ],
  ReservationController,
);
//# sourceMappingURL=reservation.controller.js.map
