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
var reservation_service_1 = require('./reservation.service');
var prisma_service_1 = require('../database/prisma.service');
var common_1 = require('@nestjs/common');
var prisma_client_1 = require('@bookify/prisma-client');
var prisma_error_enum_1 = require('../database/prisma-error.enum');
describe('The ReservationService', function () {
  var reservationService;
  var prismaMock;
  var reservationsArray;
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var module;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            prismaMock = {
              reservation: {
                findMany: jest.fn(),
                findUnique: jest.fn(),
                create: jest.fn(),
                delete: jest.fn(),
                update: jest.fn(),
              },
            };
            return [
              4 /*yield*/,
              testing_1.Test.createTestingModule({
                providers: [
                  reservation_service_1.ReservationService,
                  {
                    provide: prisma_service_1.PrismaService,
                    useValue: prismaMock,
                  },
                ],
              }).compile(),
            ];
          case 1:
            module = _a.sent();
            reservationService = module.get(
              reservation_service_1.ReservationService,
            );
            reservationsArray = [
              {
                id: 1,
                venueId: 1,
                userId: 1,
                dateStart: new Date('2025-06-10'),
                dateEnd: new Date('2025-06-12'),
                isPendingRating: true,
              },
              {
                id: 2,
                venueId: 2,
                userId: 2,
                dateStart: new Date('2025-07-10'),
                dateEnd: new Date('2025-07-12'),
                isPendingRating: true,
              },
            ];
            return [2 /*return*/];
        }
      });
    });
  });
  describe('when getAll is called', function () {
    it('should return all reservations if they exist', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findMany.mockResolvedValue(
                reservationsArray,
              );
              return [4 /*yield*/, reservationService.getAll()];
            case 1:
              result = _a.sent();
              expect(result).toEqual(reservationsArray);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw NotFoundException if no reservations exist', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findMany.mockResolvedValue([]);
              return [
                4 /*yield*/,
                expect(reservationService.getAll()).rejects.toThrow(
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
  describe('when getOne is called', function () {
    it('should return the reservation if found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findUnique.mockResolvedValue(
                reservationsArray[0],
              );
              return [
                4 /*yield*/,
                reservationService.getOne(reservationsArray[0].id),
              ];
            case 1:
              result = _a.sent();
              expect(result).toEqual(reservationsArray[0]);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw NotFoundException if not found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findUnique.mockResolvedValue(null);
              return [
                4 /*yield*/,
                expect(reservationService.getOne(999)).rejects.toThrow(
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
  describe('when getByVenue is called', function () {
    it('should return reservations if found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findMany.mockResolvedValue([
                reservationsArray[0],
              ]);
              return [
                4 /*yield*/,
                reservationService.getByVenue(reservationsArray[0].venueId),
              ];
            case 1:
              result = _a.sent();
              expect(result).toEqual([reservationsArray[0]]);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw NotFoundException if none found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findMany.mockResolvedValue([]);
              return [
                4 /*yield*/,
                expect(reservationService.getByVenue(999)).rejects.toThrow(
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
  describe('when getByUser is called', function () {
    it('should return reservations if found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findMany.mockResolvedValue([
                reservationsArray[0],
              ]);
              return [
                4 /*yield*/,
                reservationService.getByUser(reservationsArray[0].userId),
              ];
            case 1:
              result = _a.sent();
              expect(result).toEqual([reservationsArray[0]]);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw NotFoundException if none found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findMany.mockResolvedValue([]);
              return [
                4 /*yield*/,
                expect(reservationService.getByUser(999)).rejects.toThrow(
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
  describe('when changeIsPendingRating is called', function () {
    it('should toggle isPendingRating and return updated reservation', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findUnique.mockResolvedValue(
                reservationsArray[0],
              );
              prismaMock.reservation.update.mockResolvedValue(
                __assign(__assign({}, reservationsArray[0]), {
                  isPendingRating: false,
                }),
              );
              return [
                4 /*yield*/,
                reservationService.changeIsPendingRating(
                  reservationsArray[0].id,
                ),
              ];
            case 1:
              result = _a.sent();
              expect(result.isPendingRating).toBe(false);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw NotFoundException if reservation not found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findUnique.mockResolvedValue(null);
              return [
                4 /*yield*/,
                expect(
                  reservationService.changeIsPendingRating(999),
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
  describe('when create is called', function () {
    var createReservationData;
    beforeEach(function () {
      createReservationData = {
        venueId: reservationsArray[0].venueId,
        dateStart: reservationsArray[0].dateStart,
        dateEnd: reservationsArray[0].dateEnd,
      };
    });
    describe('and venue is available', function () {
      beforeEach(function () {
        prismaMock.reservation.findMany.mockResolvedValue([]);
        prismaMock.reservation.create.mockResolvedValue(reservationsArray[0]);
      });
      it('should create the reservation', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  reservationService.create(
                    createReservationData,
                    reservationsArray[0].userId,
                  ),
                ];
              case 1:
                result = _a.sent();
                expect(result).toEqual(reservationsArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and dates are already taken', function () {
      beforeEach(function () {
        prismaMock.reservation.findMany.mockResolvedValue([
          reservationsArray[0],
        ]);
      });
      it('should throw ConflictException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(
                    reservationService.create(
                      createReservationData,
                      reservationsArray[0].userId,
                    ),
                  ).rejects.toThrow(common_1.ConflictException),
                ];
              case 1:
                _a.sent();
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and venue or user not found', function () {
      beforeEach(function () {
        prismaMock.reservation.findMany.mockResolvedValue([]);
        prismaMock.reservation.create.mockImplementation(function () {
          throw new prisma_client_1.Prisma.PrismaClientKnownRequestError(
            'fail',
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
                    reservationService.create(
                      createReservationData,
                      reservationsArray[0].userId,
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
  describe('when delete is called', function () {
    describe('and reservation exists', function () {
      beforeEach(function () {
        prismaMock.reservation.delete.mockResolvedValue(reservationsArray[0]);
      });
      it('should return the deleted reservation', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  reservationService.delete(reservationsArray[0].id),
                ];
              case 1:
                result = _a.sent();
                expect(result).toEqual(reservationsArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and reservation does not exist', function () {
      beforeEach(function () {
        prismaMock.reservation.delete.mockImplementation(function () {
          throw new prisma_client_1.Prisma.PrismaClientKnownRequestError(
            'fail',
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
                    reservationService.delete(reservationsArray[0].id),
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
  describe('when checkAvailability is called', function () {
    it('should return available: false if conflict exists', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findMany.mockResolvedValue([
                reservationsArray[0],
              ]);
              return [
                4 /*yield*/,
                reservationService.checkAvailability(
                  reservationsArray[0].venueId,
                  reservationsArray[0].dateStart,
                  reservationsArray[0].dateEnd,
                ),
              ];
            case 1:
              result = _a.sent();
              expect(result.available).toBe(false);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should return available: true if no conflicts found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findMany.mockResolvedValue([]);
              return [
                4 /*yield*/,
                reservationService.checkAvailability(
                  reservationsArray[0].venueId,
                  reservationsArray[0].dateStart,
                  reservationsArray[0].dateEnd,
                ),
              ];
            case 1:
              result = _a.sent();
              expect(result.available).toBe(true);
              return [2 /*return*/];
          }
        });
      });
    });
  });
  describe('when getOccupiedDates is called', function () {
    it('should return all occupied dates within each reservation period', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              prismaMock.reservation.findMany.mockResolvedValue([
                reservationsArray[0],
              ]);
              return [
                4 /*yield*/,
                reservationService.getOccupiedDates(
                  reservationsArray[0].venueId,
                ),
              ];
            case 1:
              result = _a.sent();
              expect(result).toEqual(['2025-06-10', '2025-06-11']);
              return [2 /*return*/];
          }
        });
      });
    });
  });
});
