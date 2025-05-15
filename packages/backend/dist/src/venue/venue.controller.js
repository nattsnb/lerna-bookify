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
exports.VenueController = void 0;
const common_1 = require('@nestjs/common');
const venue_service_1 = require('./venue.service');
const create_venue_dto_1 = require('./dto/create-venue.dto');
const update_venue_dto_1 = require('./dto/update-venue.dto');
const jwt_authentication_guard_1 = require('../authentication/jwt-authentication.guard');
const venue_filter_dto_1 = require('./dto/venue-filter.dto');
let VenueController = class VenueController {
  venueService;
  constructor(venueService) {
    this.venueService = venueService;
  }
  getAll() {
    return this.venueService.getAll();
  }
  filterByAmenitiesAndOccasions(filterDto) {
    return this.venueService.filterCombined(
      filterDto.amenities ?? [],
      filterDto.occasions ?? [],
    );
  }
  create(createVenueData, request) {
    return this.venueService.create(createVenueData, request.user.id);
  }
  getOne(id) {
    return this.venueService.getOne(id);
  }
  update(id, updateVenueData) {
    return this.venueService.update(id, updateVenueData);
  }
  delete(id) {
    return this.venueService.delete(id);
  }
  headRoute(response) {
    return response.status(200).send();
  }
};
exports.VenueController = VenueController;
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  VenueController.prototype,
  'getAll',
  null,
);
__decorate(
  [
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [venue_filter_dto_1.VenueFilterDto]),
    __metadata('design:returntype', void 0),
  ],
  VenueController.prototype,
  'filterByAmenitiesAndOccasions',
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
      create_venue_dto_1.CreateVenueDto,
      Object,
    ]),
    __metadata('design:returntype', void 0),
  ],
  VenueController.prototype,
  'create',
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
  VenueController.prototype,
  'getOne',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      Number,
      update_venue_dto_1.UpdateVenueDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  VenueController.prototype,
  'update',
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
  VenueController.prototype,
  'delete',
  null,
);
__decorate(
  [
    (0, common_1.Head)(),
    __param(0, (0, common_1.Res)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', void 0),
  ],
  VenueController.prototype,
  'headRoute',
  null,
);
exports.VenueController = VenueController = __decorate(
  [
    (0, common_1.Controller)('venue'),
    __metadata('design:paramtypes', [venue_service_1.VenueService]),
  ],
  VenueController,
);
//# sourceMappingURL=venue.controller.js.map
