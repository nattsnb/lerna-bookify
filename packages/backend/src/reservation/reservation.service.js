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
Object.defineProperty(exports, '__esModule', { value: true });
exports.ReservationService = void 0;
var common_1 = require('@nestjs/common');
var prisma_client_1 = require('@bookify/prisma-client');
var prisma_error_enum_1 = require('../database/prisma-error.enum');
var dayjs = require('dayjs');
var ReservationService = (function () {
  var _classDecorators = [(0, common_1.Injectable)()];
  var _classDescriptor;
  var _classExtraInitializers = [];
  var _classThis;
  var ReservationService = (_classThis = /** @class */ (function () {
    function ReservationService_1(prismaService) {
      this.prismaService = prismaService;
    }
    ReservationService_1.prototype.getAll = function () {
      return __awaiter(this, void 0, void 0, function () {
        var reservations;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, this.prismaService.reservation.findMany()];
            case 1:
              reservations = _a.sent();
              if (!reservations.length) {
                throw new common_1.NotFoundException('No reservations found');
              }
              return [2 /*return*/, reservations];
          }
        });
      });
    };
    ReservationService_1.prototype.create = function (
      createReservationData,
      userId,
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var venueId, dateStart, dateEnd, reservationData, availability, error_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              (venueId = createReservationData.venueId),
                (dateStart = createReservationData.dateStart),
                (dateEnd = createReservationData.dateEnd),
                (reservationData = __rest(createReservationData, [
                  'venueId',
                  'dateStart',
                  'dateEnd',
                ]));
              return [
                4 /*yield*/,
                this.checkAvailability(
                  venueId,
                  new Date(''.concat(dateStart, 'T00:00:00.000Z')),
                  new Date(''.concat(dateEnd, 'T00:00:00.000Z')),
                ),
              ];
            case 1:
              availability = _a.sent();
              if (!availability.available) {
                throw new common_1.ConflictException(
                  'Selected dates are already reserved.',
                );
              }
              _a.label = 2;
            case 2:
              _a.trys.push([2, 4, , 5]);
              return [
                4 /*yield*/,
                this.prismaService.reservation.create({
                  data: __assign(
                    {
                      venue: { connect: { id: venueId } },
                      user: { connect: { id: userId } },
                      dateStart: new Date(
                        ''.concat(dateStart, 'T00:00:00.000Z'),
                      ),
                      dateEnd: new Date(''.concat(dateEnd, 'T00:00:00.000Z')),
                      isPendingRating: true,
                    },
                    reservationData,
                  ),
                }),
              ];
            case 3:
              return [2 /*return*/, _a.sent()];
            case 4:
              error_1 = _a.sent();
              if (
                error_1 instanceof
                  prisma_client_1.Prisma.PrismaClientKnownRequestError &&
                error_1.code ===
                  prisma_error_enum_1.PrismaError.RecordDoesNotExist
              ) {
                throw new common_1.NotFoundException('Venue or user not found');
              }
              throw error_1;
            case 5:
              return [2 /*return*/];
          }
        });
      });
    };
    ReservationService_1.prototype.getOne = function (reservationId) {
      return __awaiter(this, void 0, void 0, function () {
        var reservation;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.prismaService.reservation.findUnique({
                  where: { id: reservationId },
                }),
              ];
            case 1:
              reservation = _a.sent();
              if (!reservation) {
                throw new common_1.NotFoundException(
                  'Reservation with ID '.concat(reservationId, ' not found'),
                );
              }
              return [2 /*return*/, reservation];
          }
        });
      });
    };
    ReservationService_1.prototype.getByVenue = function (venueId) {
      return __awaiter(this, void 0, void 0, function () {
        var reservations;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.prismaService.reservation.findMany({
                  where: { venueId: venueId },
                }),
              ];
            case 1:
              reservations = _a.sent();
              if (!reservations.length) {
                throw new common_1.NotFoundException(
                  'No reservations found for venue with ID '.concat(venueId),
                );
              }
              return [2 /*return*/, reservations];
          }
        });
      });
    };
    ReservationService_1.prototype.getByUser = function (userId) {
      return __awaiter(this, void 0, void 0, function () {
        var reservations;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.prismaService.reservation.findMany({
                  where: { userId: userId },
                }),
              ];
            case 1:
              reservations = _a.sent();
              if (!reservations.length) {
                throw new common_1.NotFoundException(
                  'No reservations found for user with ID '.concat(userId),
                );
              }
              return [2 /*return*/, reservations];
          }
        });
      });
    };
    ReservationService_1.prototype.delete = function (reservationId) {
      return __awaiter(this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [
                4 /*yield*/,
                this.prismaService.reservation.delete({
                  where: { id: reservationId },
                }),
              ];
            case 1:
              return [2 /*return*/, _a.sent()];
            case 2:
              error_2 = _a.sent();
              if (
                error_2 instanceof
                  prisma_client_1.Prisma.PrismaClientKnownRequestError &&
                error_2.code ===
                  prisma_error_enum_1.PrismaError.RecordDoesNotExist
              ) {
                throw new common_1.NotFoundException(
                  'Reservation with ID '.concat(reservationId, ' not found'),
                );
              }
              throw error_2;
            case 3:
              return [2 /*return*/];
          }
        });
      });
    };
    ReservationService_1.prototype.changeIsPendingRating = function (
      reservationId,
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var reservation, error_3;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3, , 4]);
              return [
                4 /*yield*/,
                this.prismaService.reservation.findUnique({
                  where: { id: reservationId },
                }),
              ];
            case 1:
              reservation = _a.sent();
              if (!reservation) {
                throw new common_1.NotFoundException('Reservation not found');
              }
              return [
                4 /*yield*/,
                this.prismaService.reservation.update({
                  where: { id: reservationId },
                  data: {
                    isPendingRating: !reservation.isPendingRating,
                  },
                }),
              ];
            case 2:
              return [2 /*return*/, _a.sent()];
            case 3:
              error_3 = _a.sent();
              if (
                error_3 instanceof
                  prisma_client_1.Prisma.PrismaClientKnownRequestError &&
                error_3.code ===
                  prisma_error_enum_1.PrismaError.RecordDoesNotExist
              ) {
                throw new common_1.NotFoundException('Reservation not found');
              }
              throw error_3;
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };
    ReservationService_1.prototype.checkAvailability = function (
      venueId,
      dateStart,
      dateEnd,
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var conflicts;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.prismaService.reservation.findMany({
                  where: {
                    venueId: venueId,
                    isPendingRating: true,
                    dateStart: { lt: dateEnd },
                    dateEnd: { gt: dateStart },
                  },
                }),
              ];
            case 1:
              conflicts = _a.sent();
              return [2 /*return*/, { available: conflicts.length === 0 }];
          }
        });
      });
    };
    ReservationService_1.prototype.getOccupiedDates = function (venueId) {
      return __awaiter(this, void 0, void 0, function () {
        var reservations,
          occupied,
          _i,
          reservations_1,
          reservation,
          current,
          end,
          dateAsString;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.prismaService.reservation.findMany({
                  where: {
                    venueId: venueId,
                    isPendingRating: true,
                  },
                  select: {
                    dateStart: true,
                    dateEnd: true,
                  },
                }),
              ];
            case 1:
              reservations = _a.sent();
              occupied = [];
              for (
                _i = 0, reservations_1 = reservations;
                _i < reservations_1.length;
                _i++
              ) {
                reservation = reservations_1[_i];
                current = dayjs(reservation.dateStart);
                end = dayjs(reservation.dateEnd);
                while (current.isBefore(end, 'day')) {
                  dateAsString = current.format('YYYY-MM-DD');
                  if (!occupied.includes(dateAsString)) {
                    occupied.push(dateAsString);
                  }
                  current = current.add(1, 'day');
                }
              }
              return [2 /*return*/, occupied.sort()];
          }
        });
      });
    };
    return ReservationService_1;
  })());
  __setFunctionName(_classThis, 'ReservationService');
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
    ReservationService = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (ReservationService = _classThis);
})();
exports.ReservationService = ReservationService;
