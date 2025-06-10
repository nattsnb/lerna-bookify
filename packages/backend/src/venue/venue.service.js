'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __esDecorate =
  (this && this.__esDecorate) ||
  function (
    ctor,
    descriptorIn,
    decorators,
    contextIn,
    initializers,
    extraInitializers,
  ) {
    function accept(f) {
      if (f !== void 0 && typeof f !== 'function')
        throw new TypeError('Function expected');
      return f;
    }
    var kind = contextIn.kind,
      key = kind === 'getter' ? 'get' : kind === 'setter' ? 'set' : 'value';
    var target =
      !descriptorIn && ctor
        ? contextIn['static']
          ? ctor
          : ctor.prototype
        : null;
    var descriptor =
      descriptorIn ||
      (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === 'access' ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done)
          throw new TypeError(
            'Cannot add initializers after decoration has completed',
          );
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(
        kind === 'accessor'
          ? { get: descriptor.get, set: descriptor.set }
          : descriptor[key],
        context,
      );
      if (kind === 'accessor') {
        if (result === void 0) continue;
        if (result === null || typeof result !== 'object')
          throw new TypeError('Object expected');
        if ((_ = accept(result.get))) descriptor.get = _;
        if ((_ = accept(result.set))) descriptor.set = _;
        if ((_ = accept(result.init))) initializers.unshift(_);
      } else if ((_ = accept(result))) {
        if (kind === 'field') initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
var __runInitializers =
  (this && this.__runInitializers) ||
  function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue
        ? initializers[i].call(thisArg, value)
        : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === 'function' ? Iterator : Object).prototype,
      );
    return (
      (g.next = verb(0)),
      (g['throw'] = verb(1)),
      (g['return'] = verb(2)),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __setFunctionName =
  (this && this.__setFunctionName) ||
  function (f, name, prefix) {
    if (typeof name === 'symbol')
      name = name.description ? '['.concat(name.description, ']') : '';
    return Object.defineProperty(f, 'name', {
      configurable: true,
      value: prefix ? ''.concat(prefix, ' ', name) : name,
    });
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.VenueService = void 0;
var common_1 = require('@nestjs/common');
var prisma_error_enum_1 = require('../database/prisma-error.enum');
var prisma_client_1 = require('@bookify/prisma-client');
var VenueService = (function () {
  var _classDecorators = [(0, common_1.Injectable)()];
  var _classDescriptor;
  var _classExtraInitializers = [];
  var _classThis;
  var VenueService = (_classThis = /** @class */ (function () {
    function VenueService_1(prismaService) {
      this.prismaService = prismaService;
    }
    VenueService_1.prototype.getAll = function () {
      return __awaiter(this, void 0, void 0, function () {
        var venues, error_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [
                4 /*yield*/,
                this.prismaService.venue.findMany({
                  include: {
                    owner: true,
                    amenityToVenues: { include: { amenity: true } },
                  },
                }),
              ];
            case 1:
              venues = _a.sent();
              if (!venues.length) {
                throw new common_1.NotFoundException('No venues found');
              }
              return [
                2 /*return*/,
                venues.map(function (venue) {
                  return __assign(__assign({}, venue), {
                    amenities: venue.amenityToVenues.map(function (venue) {
                      return venue.amenity;
                    }),
                  });
                }),
              ];
            case 2:
              error_1 = _a.sent();
              throw error_1;
            case 3:
              return [2 /*return*/];
          }
        });
      });
    };
    VenueService_1.prototype.create = function (createVenueData, userId) {
      return __awaiter(this, void 0, void 0, function () {
        var amenitiesIds,
          facebookUrl,
          instagramUrl,
          twitterUrl,
          websiteUrl,
          streetNumber,
          streetName,
          postalCode,
          city,
          venueTypeId,
          venueData,
          coordinates,
          latitude,
          longitude,
          newVenue_1,
          error_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              (amenitiesIds = createVenueData.amenitiesIds),
                (facebookUrl = createVenueData.facebookUrl),
                (instagramUrl = createVenueData.instagramUrl),
                (twitterUrl = createVenueData.twitterUrl),
                (websiteUrl = createVenueData.websiteUrl),
                (streetNumber = createVenueData.streetNumber),
                (streetName = createVenueData.streetName),
                (postalCode = createVenueData.postalCode),
                (city = createVenueData.city),
                (venueTypeId = createVenueData.venueTypeId),
                (venueData = __rest(createVenueData, [
                  'amenitiesIds',
                  'facebookUrl',
                  'instagramUrl',
                  'twitterUrl',
                  'websiteUrl',
                  'streetNumber',
                  'streetName',
                  'postalCode',
                  'city',
                  'venueTypeId',
                ]));
              _a.label = 1;
            case 1:
              _a.trys.push([1, 6, , 7]);
              return [
                4 /*yield*/,
                this.geocodeAddress(streetNumber, streetName, postalCode, city),
              ];
            case 2:
              coordinates = _a.sent();
              latitude = coordinates.latitude;
              longitude = coordinates.longitude;
              return [
                4 /*yield*/,
                this.prismaService.venue.create({
                  data: __assign(__assign({}, venueData), {
                    streetNumber: streetNumber,
                    streetName: streetName,
                    postalCode: postalCode,
                    city: city,
                    latitude: latitude,
                    longitude: longitude,
                    facebookUrl:
                      facebookUrl !== null && facebookUrl !== void 0
                        ? facebookUrl
                        : undefined,
                    instagramUrl:
                      instagramUrl !== null && instagramUrl !== void 0
                        ? instagramUrl
                        : undefined,
                    twitterUrl:
                      twitterUrl !== null && twitterUrl !== void 0
                        ? twitterUrl
                        : undefined,
                    websiteUrl:
                      websiteUrl !== null && websiteUrl !== void 0
                        ? websiteUrl
                        : undefined,
                    venueType: { connect: { id: venueTypeId } },
                    owner: { connect: { id: userId } },
                  }),
                }),
              ];
            case 3:
              newVenue_1 = _a.sent();
              if (
                !(amenitiesIds === null || amenitiesIds === void 0
                  ? void 0
                  : amenitiesIds.length)
              )
                return [3 /*break*/, 5];
              return [
                4 /*yield*/,
                this.prismaService.amenityToVenue.createMany({
                  data: amenitiesIds.map(function (amenityId) {
                    return {
                      venueId: newVenue_1.id,
                      amenityId: amenityId,
                    };
                  }),
                  skipDuplicates: true,
                }),
              ];
            case 4:
              _a.sent();
              _a.label = 5;
            case 5:
              return [2 /*return*/, newVenue_1];
            case 6:
              error_2 = _a.sent();
              if (
                error_2 instanceof
                  prisma_client_1.Prisma.PrismaClientKnownRequestError &&
                error_2.code ===
                  prisma_error_enum_1.PrismaError.RecordDoesNotExist
              ) {
                throw new common_1.NotFoundException(
                  'Not found – check provided IDs',
                );
              }
              throw error_2;
            case 7:
              return [2 /*return*/];
          }
        });
      });
    };
    VenueService_1.prototype.getOne = function (venueId) {
      return __awaiter(this, void 0, void 0, function () {
        var venue, error_3;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [
                4 /*yield*/,
                this.prismaService.venue.findUnique({
                  where: { id: venueId },
                  include: {
                    owner: true,
                    amenityToVenues: { include: { amenity: true } },
                  },
                }),
              ];
            case 1:
              venue = _a.sent();
              if (!venue) {
                throw new common_1.NotFoundException(
                  'Venue with ID '.concat(venueId, ' not found'),
                );
              }
              return [
                2 /*return*/,
                __assign(__assign({}, venue), {
                  amenities: venue.amenityToVenues.map(function (venue) {
                    return venue.amenity;
                  }),
                }),
              ];
            case 2:
              error_3 = _a.sent();
              throw error_3;
            case 3:
              return [2 /*return*/];
          }
        });
      });
    };
    VenueService_1.prototype.update = function (venueId, updateVenueData) {
      return __awaiter(this, void 0, void 0, function () {
        var amenitiesIds,
          partialData,
          existingVenue,
          streetNumber,
          streetName,
          postalCode,
          city,
          shouldRecalculateLocation,
          latitude,
          longitude,
          coordinates,
          updatedVenue,
          error_4;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 8, , 9]);
              (amenitiesIds = updateVenueData.amenitiesIds),
                (partialData = __rest(updateVenueData, ['amenitiesIds']));
              return [
                4 /*yield*/,
                this.prismaService.venue.findUnique({
                  where: { id: venueId },
                }),
              ];
            case 1:
              existingVenue = _e.sent();
              if (!existingVenue) {
                throw new common_1.NotFoundException(
                  'Venue with ID '.concat(venueId, ' not found'),
                );
              }
              streetNumber =
                (_a = updateVenueData.streetNumber) !== null && _a !== void 0
                  ? _a
                  : existingVenue.streetNumber;
              streetName =
                (_b = updateVenueData.streetName) !== null && _b !== void 0
                  ? _b
                  : existingVenue.streetName;
              postalCode =
                (_c = updateVenueData.postalCode) !== null && _c !== void 0
                  ? _c
                  : existingVenue.postalCode;
              city =
                (_d = updateVenueData.city) !== null && _d !== void 0
                  ? _d
                  : existingVenue.city;
              shouldRecalculateLocation =
                updateVenueData.streetNumber !== undefined ||
                updateVenueData.streetName !== undefined ||
                updateVenueData.postalCode !== undefined ||
                updateVenueData.city !== undefined;
              latitude = void 0;
              longitude = void 0;
              if (!shouldRecalculateLocation) return [3 /*break*/, 3];
              return [
                4 /*yield*/,
                this.geocodeAddress(streetNumber, streetName, postalCode, city),
              ];
            case 2:
              coordinates = _e.sent();
              latitude = coordinates.latitude;
              longitude = coordinates.longitude;
              _e.label = 3;
            case 3:
              return [
                4 /*yield*/,
                this.prismaService.venue.update({
                  where: { id: venueId },
                  data: __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              __assign({}, partialData),
                              updateVenueData.streetNumber !== undefined && {
                                streetNumber: updateVenueData.streetNumber,
                              },
                            ),
                            updateVenueData.streetName !== undefined && {
                              streetName: updateVenueData.streetName,
                            },
                          ),
                          updateVenueData.postalCode !== undefined && {
                            postalCode: updateVenueData.postalCode,
                          },
                        ),
                        updateVenueData.city !== undefined && {
                          city: updateVenueData.city,
                        },
                      ),
                      latitude !== undefined && { latitude: latitude },
                    ),
                    longitude !== undefined && { longitude: longitude },
                  ),
                }),
              ];
            case 4:
              updatedVenue = _e.sent();
              if (!amenitiesIds) return [3 /*break*/, 7];
              return [
                4 /*yield*/,
                this.prismaService.amenityToVenue.deleteMany({
                  where: { venueId: venueId },
                }),
              ];
            case 5:
              _e.sent();
              if (!(amenitiesIds.length > 0)) return [3 /*break*/, 7];
              return [
                4 /*yield*/,
                this.prismaService.amenityToVenue.createMany({
                  data: amenitiesIds.map(function (amenityId) {
                    return {
                      venueId: venueId,
                      amenityId: amenityId,
                    };
                  }),
                  skipDuplicates: true,
                }),
              ];
            case 6:
              _e.sent();
              _e.label = 7;
            case 7:
              return [2 /*return*/, updatedVenue];
            case 8:
              error_4 = _e.sent();
              throw error_4;
            case 9:
              return [2 /*return*/];
          }
        });
      });
    };
    VenueService_1.prototype.delete = function (venueId) {
      return __awaiter(this, void 0, void 0, function () {
        var error_5;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [
                4 /*yield*/,
                this.prismaService.venue.delete({
                  where: {
                    id: venueId,
                  },
                }),
              ];
            case 1:
              return [2 /*return*/, _a.sent()];
            case 2:
              error_5 = _a.sent();
              if (
                error_5 instanceof
                  prisma_client_1.Prisma.PrismaClientKnownRequestError &&
                error_5.code ===
                  prisma_error_enum_1.PrismaError.RecordDoesNotExist
              ) {
                throw new common_1.NotFoundException(
                  'Venue with ID '.concat(venueId, ' not found'),
                );
              }
              throw error_5;
            case 3:
              return [2 /*return*/];
          }
        });
      });
    };
    VenueService_1.prototype.findWithFilters = function (filters) {
      return __awaiter(this, void 0, void 0, function () {
        var _a,
          amenities,
          _b,
          occasions,
          venueTypeId,
          pricePerNightInEURCentMin,
          pricePerNightInEURCentMax,
          dateStart,
          dateEnd,
          guests,
          latitude,
          longitude,
          radiusKm,
          allAmenities,
          where,
          lat,
          lng,
          kmInDegree,
          deltaLat,
          deltaLng,
          venues,
          error_6;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 3, , 4]);
              (_a = filters.amenities),
                (amenities = _a === void 0 ? [] : _a),
                (_b = filters.occasions),
                (occasions = _b === void 0 ? [] : _b),
                (venueTypeId = filters.venueTypeId),
                (pricePerNightInEURCentMin = filters.pricePerNightInEURCentMin),
                (pricePerNightInEURCentMax = filters.pricePerNightInEURCentMax),
                (dateStart = filters.dateStart),
                (dateEnd = filters.dateEnd),
                (guests = filters.guests),
                (latitude = filters.latitude),
                (longitude = filters.longitude),
                (radiusKm = filters.radiusKm);
              return [
                4 /*yield*/,
                this.getCombinedAmenities(amenities, occasions),
              ];
            case 1:
              allAmenities = _c.sent();
              where = {};
              if (allAmenities.length > 0) {
                where.AND = allAmenities.map(function (amenityId) {
                  return {
                    amenityToVenues: {
                      some: { amenityId: amenityId },
                    },
                  };
                });
              }
              if (venueTypeId != null) {
                where.venueTypeId = venueTypeId;
              }
              if (
                pricePerNightInEURCentMin != null ||
                pricePerNightInEURCentMax != null
              ) {
                where.pricePerNightInEURCent = {};
                if (pricePerNightInEURCentMin != null)
                  where.pricePerNightInEURCent.gte = pricePerNightInEURCentMin;
                if (pricePerNightInEURCentMax != null)
                  where.pricePerNightInEURCent.lte = pricePerNightInEURCentMax;
              }
              if (dateStart && dateEnd) {
                where.reservations = {
                  none: {
                    isPendingRating: true,
                    dateStart: { lt: new Date(dateEnd) },
                    dateEnd: { gt: new Date(dateStart) },
                  },
                };
              }
              if (guests != null) {
                where.capacity = { gte: guests };
              }
              if (
                latitude != null &&
                longitude != null &&
                radiusKm != null &&
                !isNaN(latitude) &&
                !isNaN(longitude) &&
                !isNaN(radiusKm)
              ) {
                lat = latitude;
                lng = longitude;
                kmInDegree = 111;
                deltaLat = radiusKm / kmInDegree;
                deltaLng =
                  radiusKm / (kmInDegree * Math.cos((lat * Math.PI) / 180));
                where.latitude = {
                  gte: lat - deltaLat,
                  lte: lat + deltaLat,
                };
                where.longitude = {
                  gte: lng - deltaLng,
                  lte: lng + deltaLng,
                };
              }
              return [
                4 /*yield*/,
                this.prismaService.venue.findMany({
                  where: where,
                  include: {
                    amenityToVenues: { include: { amenity: true } },
                    reservations: true,
                    favourites: true,
                    venueType: true,
                  },
                }),
              ];
            case 2:
              venues = _c.sent();
              return [2 /*return*/, venues];
            case 3:
              error_6 = _c.sent();
              throw error_6;
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };
    VenueService_1.prototype.getCombinedAmenities = function (
      amenities,
      occasionIds,
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var allAmenityIds, fetchedOccasions, occasionAmenityIds, error_7;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3, , 4]);
              allAmenityIds = __spreadArray([], amenities, true);
              if (!(occasionIds.length > 0)) return [3 /*break*/, 2];
              return [
                4 /*yield*/,
                this.prismaService.occasion.findMany({
                  where: { id: { in: occasionIds } },
                  include: { amenities: true },
                }),
              ];
            case 1:
              fetchedOccasions = _a.sent();
              if (fetchedOccasions.length > 0) {
                occasionAmenityIds = fetchedOccasions.flatMap(
                  function (occasion) {
                    return occasion.amenities.map(function (amenity) {
                      return amenity.id;
                    });
                  },
                );
                allAmenityIds.push.apply(allAmenityIds, occasionAmenityIds);
              }
              _a.label = 2;
            case 2:
              return [2 /*return*/, Array.from(new Set(allAmenityIds))];
            case 3:
              error_7 = _a.sent();
              throw error_7;
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };
    VenueService_1.prototype.geocodeAddress = function (
      streetNumber,
      streetName,
      postalCode,
      city,
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var query, url, data, response, error_8, _a, lat, lon;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              query = ''
                .concat(streetNumber, ' ')
                .concat(streetName, ', ')
                .concat(postalCode, ' ')
                .concat(city);
              url = 'https://nominatim.openstreetmap.org/search?q='.concat(
                encodeURIComponent(query),
                '&format=json&limit=1',
              );
              _b.label = 1;
            case 1:
              _b.trys.push([1, 4, , 5]);
              return [
                4 /*yield*/,
                fetch(url, {
                  headers: { 'User-Agent': 'NestJS-App' },
                }),
              ];
            case 2:
              response = _b.sent();
              if (!response.ok) {
                throw new Error('HTTP error! Status: '.concat(response.status));
              }
              return [4 /*yield*/, response.json()];
            case 3:
              data = _b.sent();
              return [3 /*break*/, 5];
            case 4:
              error_8 = _b.sent();
              throw new common_1.NotFoundException(
                'Geocoding failed: fetch error',
              );
            case 5:
              if (!Array.isArray(data) || data.length === 0) {
                throw new common_1.NotFoundException(
                  'Geocoding failed: address not found',
                );
              }
              (_a = data[0]), (lat = _a.lat), (lon = _a.lon);
              return [
                2 /*return*/,
                {
                  latitude: parseFloat(lat),
                  longitude: parseFloat(lon),
                },
              ];
          }
        });
      });
    };
    return VenueService_1;
  })());
  __setFunctionName(_classThis, 'VenueService');
  (function () {
    var _metadata =
      typeof Symbol === 'function' && Symbol.metadata
        ? Object.create(null)
        : void 0;
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: 'class', name: _classThis.name, metadata: _metadata },
      null,
      _classExtraInitializers,
    );
    VenueService = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (VenueService = _classThis);
})();
exports.VenueService = VenueService;
