'use strict';
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
var venue_type_service_1 = require('./venue-type.service');
var prisma_service_1 = require('../database/prisma.service');
var common_1 = require('@nestjs/common');
var prisma_client_1 = require('@bookify/prisma-client');
var prisma_error_enum_1 = require('../database/prisma-error.enum');
describe('The VenueTypeService', function () {
  var venueTypeService;
  var prismaMock;
  var venueTypesArray = [
    { id: 1, name: 'Apartment' },
    { id: 2, name: 'Cabin' },
  ];
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var module;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            prismaMock = {
              venueType: {
                findMany: jest.fn(),
                create: jest.fn(),
                delete: jest.fn(),
                findUnique: jest.fn(),
              },
            };
            return [
              4 /*yield*/,
              testing_1.Test.createTestingModule({
                providers: [
                  venue_type_service_1.VenueTypeService,
                  {
                    provide: prisma_service_1.PrismaService,
                    useValue: prismaMock,
                  },
                ],
              }).compile(),
            ];
          case 1:
            module = _a.sent();
            venueTypeService = module.get(
              venue_type_service_1.VenueTypeService,
            );
            return [2 /*return*/];
        }
      });
    });
  });
  describe('when getAll is called', function () {
    describe('and venue types exist', function () {
      beforeEach(function () {
        prismaMock.venueType.findMany.mockResolvedValue(venueTypesArray);
      });
      it('should return all venue types', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, venueTypeService.getAll()];
              case 1:
                result = _a.sent();
                expect(result).toEqual(venueTypesArray);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and no venue types exist', function () {
      beforeEach(function () {
        prismaMock.venueType.findMany.mockResolvedValue([]);
      });
      it('should throw NotFoundException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(venueTypeService.getAll()).rejects.toThrow(
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
    describe('and venue type exists', function () {
      beforeEach(function () {
        prismaMock.venueType.findUnique.mockResolvedValue(venueTypesArray[0]);
      });
      it('should return the venue type', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, venueTypeService.getOne(1)];
              case 1:
                result = _a.sent();
                expect(result).toEqual(venueTypesArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and venue type does not exist', function () {
      beforeEach(function () {
        prismaMock.venueType.findUnique.mockResolvedValue(null);
      });
      it('should throw NotFoundException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(venueTypeService.getOne(999)).rejects.toThrow(
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
    describe('and creation succeeds', function () {
      beforeEach(function () {
        prismaMock.venueType.create.mockResolvedValue(venueTypesArray[0]);
      });
      it('should return the created venue type', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  venueTypeService.create({ name: 'Apartment' }),
                ];
              case 1:
                result = _a.sent();
                expect(result).toEqual(venueTypesArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and creation fails', function () {
      beforeEach(function () {
        prismaMock.venueType.create.mockImplementation(function () {
          throw new Error('Unexpected error');
        });
      });
      it('should throw the error', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(
                    venueTypeService.create({ name: 'Apartment' }),
                  ).rejects.toThrow('Unexpected error'),
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
    describe('and venue type exists', function () {
      beforeEach(function () {
        prismaMock.venueType.delete.mockResolvedValue(venueTypesArray[0]);
      });
      it('should delete the venue type and return it', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, venueTypeService.delete(1)];
              case 1:
                result = _a.sent();
                expect(result).toEqual(venueTypesArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and venue type does not exist', function () {
      beforeEach(function () {
        prismaMock.venueType.delete.mockImplementation(function () {
          throw new prisma_client_1.Prisma.PrismaClientKnownRequestError(
            'Not found',
            {
              code: prisma_error_enum_1.PrismaError.RecordDoesNotExist,
              clientVersion: '4.0.0',
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
                  expect(venueTypeService.delete(999)).rejects.toThrow(
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
    describe('and other error occurs during deletion', function () {
      beforeEach(function () {
        prismaMock.venueType.delete.mockImplementation(function () {
          throw new Error('Unexpected error');
        });
      });
      it('should throw the error', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  expect(venueTypeService.delete(1)).rejects.toThrow(
                    'Unexpected error',
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
});
