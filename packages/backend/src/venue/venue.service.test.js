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
Object.defineProperty(exports, '__esModule', { value: true });
var testing_1 = require('@nestjs/testing');
var venue_service_1 = require('./venue.service');
var prisma_service_1 = require('../database/prisma.service');
var common_1 = require('@nestjs/common');
var prisma_client_1 = require('@bookify/prisma-client');
var prisma_error_enum_1 = require('../database/prisma-error.enum');
describe('The VenueService', function () {
  var venueService;
  var prismaMock;
  var venuesArray;
  var createVenueData;
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var module;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            prismaMock = {
              venue: {
                findMany: jest.fn(),
                findUnique: jest.fn(),
                create: jest.fn(),
                update: jest.fn(),
                delete: jest.fn(),
              },
              amenityToVenue: {
                createMany: jest.fn(),
                deleteMany: jest.fn(),
                groupBy: jest.fn(),
              },
              occasion: {
                findMany: jest.fn(),
              },
            };
            return [
              4 /*yield*/,
              testing_1.Test.createTestingModule({
                providers: [
                  venue_service_1.VenueService,
                  {
                    provide: prisma_service_1.PrismaService,
                    useValue: prismaMock,
                  },
                ],
              }).compile(),
            ];
          case 1:
            module = _a.sent();
            venueService = module.get(venue_service_1.VenueService);
            venuesArray = [
              {
                id: 1,
                name: 'Test Venue One',
                description: 'Nice place by the sea',
                images: ['https://example.com/venue1.jpg'],
                pricePerNightInEURCent: 15000,
                rating: 4.7,
                capacity: 5,
                amountsOfBeds: 3,
                extraSleepingDetails: 'Sofa bed for one',
                checkInHour: 15,
                checkOutHour: 11,
                distanceFromCityCenterInMeters: 700,
                facebookUrl: 'https://facebook.com/venue1',
                instagramUrl: 'https://instagram.com/venue1',
                twitterUrl: null,
                websiteUrl: 'https://venue1.com',
                streetNumber: '10B',
                streetName: 'Beach Ave',
                postalCode: '54321',
                city: 'Beachville',
                ownerId: 1,
                owner: {
                  id: 1,
                  name: 'Owner One',
                  email: 'owner1@example.com',
                  phoneNumber: '+48123456789',
                },
                amenityToVenues: [
                  { amenity: { id: 1, name: 'WiFi' } },
                  { amenity: { id: 2, name: 'Pool' } },
                ],
                amenities: [
                  { id: 1, name: 'WiFi' },
                  { id: 2, name: 'Pool' },
                ],
              },
              {
                id: 2,
                name: 'Test Venue Two',
                description: 'Cozy cabin in the woods',
                images: ['https://example.com/venue2.jpg'],
                pricePerNightInEURCent: 8000,
                rating: 4.2,
                capacity: 2,
                amountsOfBeds: 1,
                extraSleepingDetails: 'No extra beds',
                checkInHour: 16,
                checkOutHour: 10,
                distanceFromCityCenterInMeters: 3000,
                facebookUrl: null,
                instagramUrl: null,
                twitterUrl: null,
                websiteUrl: null,
                streetNumber: '77A',
                streetName: 'Forest Path',
                postalCode: '67890',
                city: 'Woodtown',
                ownerId: 2,
                owner: {
                  id: 2,
                  name: 'Owner Two',
                  email: 'owner2@example.com',
                  phoneNumber: '+48987654321',
                },
                amenityToVenues: [{ amenity: { id: 3, name: 'Fireplace' } }],
                amenities: [{ id: 3, name: 'Fireplace' }],
              },
            ];
            createVenueData = {
              name: venuesArray[0].name,
              description: venuesArray[0].description,
              images: venuesArray[0].images,
              pricePerNightInEURCent: venuesArray[0].pricePerNightInEURCent,
              rating: venuesArray[0].rating,
              capacity: venuesArray[0].capacity,
              amountsOfBeds: venuesArray[0].amountsOfBeds,
              extraSleepingDetails: venuesArray[0].extraSleepingDetails,
              checkInHour: venuesArray[0].checkInHour,
              checkOutHour: venuesArray[0].checkOutHour,
              distanceFromCityCenterInMeters:
                venuesArray[0].distanceFromCityCenterInMeters,
              facebookUrl: venuesArray[0].facebookUrl,
              instagramUrl: venuesArray[0].instagramUrl,
              twitterUrl: venuesArray[0].twitterUrl,
              websiteUrl: venuesArray[0].websiteUrl,
              streetNumber: venuesArray[0].streetNumber,
              streetName: venuesArray[0].streetName,
              postalCode: venuesArray[0].postalCode,
              city: venuesArray[0].city,
              amenitiesIds: [1, 2],
              venueTypeId: 1,
            };
            return [2 /*return*/];
        }
      });
    });
  });
  describe('when getAll is called', function () {
    describe('and venues exist', function () {
      beforeEach(function () {
        prismaMock.venue.findMany.mockResolvedValue(venuesArray);
      });
      it('should return all venues with amenities included', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, venueService.getAll()];
              case 1:
                result = _a.sent();
                expect(result).toEqual(venuesArray);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and no venues exist', function () {
      beforeEach(function () {
        prismaMock.venue.findMany.mockResolvedValue([]);
      });
      it('should throw NotFoundException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(venueService.getAll()).rejects.toThrow(
                    common_1.NotFoundException,
                  ),
                ];
              case 1:
                _a.sent();
                return [2 /*return*/];
            }
          });
        });
      });
    });
  });
  describe('when getOne is called', function () {
    describe('and venue exists', function () {
      beforeEach(function () {
        prismaMock.venue.findUnique.mockResolvedValue(venuesArray[0]);
      });
      it('should return the venue', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, venueService.getOne(venuesArray[0].id)];
              case 1:
                result = _a.sent();
                expect(result).toEqual(venuesArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and venue does not exist', function () {
      beforeEach(function () {
        prismaMock.venue.findUnique.mockResolvedValue(null);
      });
      it('should throw NotFoundException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(venueService.getOne(999)).rejects.toThrow(
                    common_1.NotFoundException,
                  ),
                ];
              case 1:
                _a.sent();
                return [2 /*return*/];
            }
          });
        });
      });
    });
  });
  describe('when create is called', function () {
    describe('and venue is created successfully', function () {
      beforeEach(function () {
        jest.spyOn(venueService, 'geocodeAddress').mockResolvedValue({
          lat: 52.2297,
          lon: 21.0122,
        });
        prismaMock.venue.create.mockResolvedValue(venuesArray[0]);
      });
      it('should create a venue and return it', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  venueService.create(createVenueData, venuesArray[0].ownerId),
                ];
              case 1:
                result = _a.sent();
                expect(result).toEqual(venuesArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and venue creation fails due to missing relation', function () {
      beforeEach(function () {
        prismaMock.venue.create.mockImplementation(function () {
          throw new prisma_client_1.Prisma.PrismaClientKnownRequestError(
            'Not found',
            {
              code: prisma_error_enum_1.PrismaError.RecordDoesNotExist,
              clientVersion: prisma_client_1.Prisma.prismaVersion.client,
            },
          );
        });
      });
      it('should throw NotFoundException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(
                    venueService.create(
                      createVenueData,
                      venuesArray[0].ownerId,
                    ),
                  ).rejects.toThrow(common_1.NotFoundException),
                ];
              case 1:
                _a.sent();
                return [2 /*return*/];
            }
          });
        });
      });
    });
  });
  describe('when update is called', function () {
    var updateData;
    var updatedVenue;
    var newName = 'Updated Venue Name';
    beforeEach(function () {
      updateData = { name: newName };
      updatedVenue = __assign(__assign({}, venuesArray[0]), { name: newName });
    });
    describe('and update succeeds', function () {
      beforeEach(function () {
        prismaMock.venue.findUnique.mockResolvedValue(venuesArray[0]); // ✅ fix
        prismaMock.venue.update.mockResolvedValue(updatedVenue);
      });
      it('should return the updated venue', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  venueService.update(venuesArray[0].id, updateData),
                ];
              case 1:
                result = _a.sent();
                expect(result).toEqual(updatedVenue);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and venue does not exist', function () {
      beforeEach(function () {
        prismaMock.venue.update.mockImplementation(function () {
          throw new prisma_client_1.Prisma.PrismaClientKnownRequestError(
            'Not found',
            {
              code: prisma_error_enum_1.PrismaError.RecordDoesNotExist,
              clientVersion: prisma_client_1.Prisma.prismaVersion.client,
            },
          );
        });
      });
      it('should throw NotFoundException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(
                    venueService.update(venuesArray[0].id, updateData),
                  ).rejects.toThrow(common_1.NotFoundException),
                ];
              case 1:
                _a.sent();
                return [2 /*return*/];
            }
          });
        });
      });
    });
  });
  describe('when delete is called', function () {
    describe('and venue exists', function () {
      beforeEach(function () {
        prismaMock.venue.delete.mockResolvedValue(venuesArray[0]);
      });
      it('should return deleted venue', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, venueService.delete(venuesArray[0].id)];
              case 1:
                result = _a.sent();
                expect(result).toEqual(venuesArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and venue does not exist', function () {
      beforeEach(function () {
        prismaMock.venue.delete.mockImplementation(function () {
          throw new prisma_client_1.Prisma.PrismaClientKnownRequestError(
            'Not found',
            {
              code: prisma_error_enum_1.PrismaError.RecordDoesNotExist,
              clientVersion: prisma_client_1.Prisma.prismaVersion.client,
            },
          );
        });
      });
      it('should throw NotFoundException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(venueService.delete(999)).rejects.toThrow(
                    common_1.NotFoundException,
                  ),
                ];
              case 1:
                _a.sent();
                return [2 /*return*/];
            }
          });
        });
      });
    });
  });
  describe('wheen getCombinedAmenities is called', function () {
    it('should return combined unique amenity IDs from amenities and occasion amenities', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var amenities, occasionIds, result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              amenities = [1, 2];
              occasionIds = [10];
              prismaMock.occasion.findMany.mockResolvedValue([
                {
                  id: 10,
                  amenities: [{ id: 2 }, { id: 3 }],
                },
              ]);
              return [
                4 /*yield*/,
                venueService.getCombinedAmenities(amenities, occasionIds),
              ];
            case 1:
              result = _a.sent();
              expect(result.sort()).toEqual([1, 2, 3]);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should return only initial amenities if no occasionIds provided', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var amenities, occasionIds, result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              amenities = [1, 4];
              occasionIds = [];
              return [
                4 /*yield*/,
                venueService.getCombinedAmenities(amenities, occasionIds),
              ];
            case 1:
              result = _a.sent();
              expect(result).toEqual([1, 4]);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should return only amenities if no matched occasions found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var amenities, occasionIds, result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              amenities = [5, 6];
              occasionIds = [99];
              prismaMock.occasion.findMany.mockResolvedValue([]);
              return [
                4 /*yield*/,
                venueService.getCombinedAmenities(amenities, occasionIds),
              ];
            case 1:
              result = _a.sent();
              expect(result).toEqual([5, 6]);
              return [2 /*return*/];
          }
        });
      });
    });
  });
});
