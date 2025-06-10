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
var occasion_service_1 = require('./occasion.service');
var prisma_service_1 = require('../database/prisma.service');
var common_1 = require('@nestjs/common');
var prisma_client_1 = require('@bookify/prisma-client');
var prisma_error_enum_1 = require('../database/prisma-error.enum');
describe('The OccasionService', function () {
  var occasionService;
  var findManyMock;
  var findUniqueMock;
  var createMock;
  var updateMock;
  var deleteMock;
  var occasionsArray;
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var module;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            findManyMock = jest.fn();
            findUniqueMock = jest.fn();
            createMock = jest.fn();
            updateMock = jest.fn();
            deleteMock = jest.fn();
            return [
              4 /*yield*/,
              testing_1.Test.createTestingModule({
                providers: [
                  occasion_service_1.OccasionService,
                  {
                    provide: prisma_service_1.PrismaService,
                    useValue: {
                      occasion: {
                        findMany: findManyMock,
                        findUnique: findUniqueMock,
                        create: createMock,
                        update: updateMock,
                        delete: deleteMock,
                      },
                    },
                  },
                ],
              }).compile(),
            ];
          case 1:
            module = _a.sent();
            occasionService = module.get(occasion_service_1.OccasionService);
            occasionsArray = [
              { id: 1, name: 'Birthday' },
              { id: 2, name: 'Wedding' },
            ];
            return [2 /*return*/];
        }
      });
    });
  });
  describe('when getAll is called', function () {
    describe('and occasions exist', function () {
      beforeEach(function () {
        findManyMock.mockResolvedValue(occasionsArray);
      });
      it('should return all occasions', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, occasionService.getAll()];
              case 1:
                result = _a.sent();
                expect(result).toEqual(occasionsArray);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and no occasions exist', function () {
      beforeEach(function () {
        findManyMock.mockResolvedValue([]);
      });
      it('should throw NotFoundException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            return [
              2 /*return*/,
              expect(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4 /*yield*/, occasionService.getAll()];
                      case 1:
                        _a.sent();
                        return [2 /*return*/];
                    }
                  });
                });
              }).rejects.toThrow(common_1.NotFoundException),
            ];
          });
        });
      });
    });
  });
  describe('when getOne is called', function () {
    describe('and occasion exists', function () {
      beforeEach(function () {
        findUniqueMock.mockResolvedValue(occasionsArray[0]);
      });
      it('should return the occasion', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  occasionService.getOne(occasionsArray[0].id),
                ];
              case 1:
                result = _a.sent();
                expect(result).toEqual(occasionsArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and occasion does not exist', function () {
      beforeEach(function () {
        findUniqueMock.mockResolvedValue(null);
      });
      it('should throw NotFoundException', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            return [
              2 /*return*/,
              expect(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4 /*yield*/,
                          occasionService.getOne(occasionsArray[0].id),
                        ];
                      case 1:
                        _a.sent();
                        return [2 /*return*/];
                    }
                  });
                });
              }).rejects.toThrow(common_1.NotFoundException),
            ];
          });
        });
      });
    });
  });
  describe('when create is called', function () {
    var createData;
    beforeEach(function () {
      createData = {
        name: occasionsArray[0].name,
        amenities: [1, 2],
      };
    });
    describe('and all amenities exist', function () {
      beforeEach(function () {
        createMock.mockResolvedValue(occasionsArray[0]);
      });
      it('should call create with correct amenities', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, occasionService.create(createData)];
              case 1:
                _a.sent();
                expect(createMock).toHaveBeenCalledWith({
                  data: {
                    name: createData.name,
                    amenities: {
                      connect: [
                        { id: createData.amenities[0] },
                        { id: createData.amenities[1] },
                      ],
                    },
                  },
                });
                return [2 /*return*/];
            }
          });
        });
      });
      it('should return created occasion', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, occasionService.create(createData)];
              case 1:
                result = _a.sent();
                expect(result).toEqual(occasionsArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and some amenities do not exist', function () {
      beforeEach(function () {
        createMock.mockImplementation(function () {
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
            return [
              2 /*return*/,
              expect(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4 /*yield*/,
                          occasionService.create(createData),
                        ];
                      case 1:
                        _a.sent();
                        return [2 /*return*/];
                    }
                  });
                });
              }).rejects.toThrow(common_1.NotFoundException),
            ];
          });
        });
      });
    });
  });
  describe('when update is called', function () {
    var updateData;
    var newName = 'Updated Occasion';
    beforeEach(function () {
      updateData = {
        name: newName,
        amenities: [1, 2],
      };
    });
    describe('and update succeeds', function () {
      beforeEach(function () {
        updateMock.mockResolvedValue({
          id: occasionsArray[0].id,
          name: newName,
        });
      });
      it('should return updated occasion', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  occasionService.update(occasionsArray[0].id, updateData),
                ];
              case 1:
                result = _a.sent();
                expect(result).toEqual({
                  id: occasionsArray[0].id,
                  name: newName,
                });
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and occasion or amenities do not exist', function () {
      beforeEach(function () {
        updateMock.mockImplementation(function () {
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
            return [
              2 /*return*/,
              expect(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4 /*yield*/,
                          occasionService.update(99, updateData),
                        ];
                      case 1:
                        _a.sent();
                        return [2 /*return*/];
                    }
                  });
                });
              }).rejects.toThrow(common_1.NotFoundException),
            ];
          });
        });
      });
    });
  });
  describe('when delete is called', function () {
    describe('and occasion exists', function () {
      beforeEach(function () {
        deleteMock.mockResolvedValue(occasionsArray[0]);
      });
      it('should return deleted occasion', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  occasionService.delete(occasionsArray[0].id),
                ];
              case 1:
                result = _a.sent();
                expect(result).toEqual(occasionsArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and occasion does not exist', function () {
      beforeEach(function () {
        deleteMock.mockImplementation(function () {
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
            return [
              2 /*return*/,
              expect(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4 /*yield*/, occasionService.delete(999)];
                      case 1:
                        _a.sent();
                        return [2 /*return*/];
                    }
                  });
                });
              }).rejects.toThrow(common_1.NotFoundException),
            ];
          });
        });
      });
    });
  });
});
