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
var amenity_service_1 = require('./amenity.service');
var prisma_service_1 = require('../database/prisma.service');
var common_1 = require('@nestjs/common');
var prisma_client_1 = require('@bookify/prisma-client');
var prisma_error_enum_1 = require('../database/prisma-error.enum');
describe('The AmenityService', function () {
  var amenityService;
  var findUniqueMock;
  var findManyMock;
  var createMock;
  var updateMock;
  var deleteMock;
  var amenitiesArray;
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var module;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            findUniqueMock = jest.fn();
            findManyMock = jest.fn();
            createMock = jest.fn();
            updateMock = jest.fn();
            deleteMock = jest.fn();
            return [
              4 /*yield*/,
              testing_1.Test.createTestingModule({
                providers: [
                  amenity_service_1.AmenityService,
                  {
                    provide: prisma_service_1.PrismaService,
                    useValue: {
                      amenity: {
                        findUnique: findUniqueMock,
                        findMany: findManyMock,
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
            amenityService = module.get(amenity_service_1.AmenityService);
            amenitiesArray = [
              { id: 1, name: 'WiFi', categoryId: 1 },
              { id: 2, name: 'Swimming Pool', categoryId: 1 },
              { id: 3, name: 'Air Conditioning', categoryId: 2 },
            ];
            return [2 /*return*/];
        }
      });
    });
  });
  describe('when the getAll function is called', function () {
    describe('and amenities exist', function () {
      beforeEach(function () {
        findManyMock.mockResolvedValue(amenitiesArray);
      });
      it('should return the list of amenities', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, amenityService.getAll()];
              case 1:
                result = _a.sent();
                expect(result).toEqual(amenitiesArray);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and no amenities exist', function () {
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
                        return [4 /*yield*/, amenityService.getAll()];
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
  describe('when the getOne function is called', function () {
    describe('and amenity with given ID exists', function () {
      beforeEach(function () {
        findUniqueMock.mockResolvedValue(amenitiesArray[0]);
      });
      it('should return the amenity', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  amenityService.getOne(amenitiesArray[0].id),
                ];
              case 1:
                result = _a.sent();
                expect(result).toBe(amenitiesArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and amenity with given ID does not exist', function () {
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
                          amenityService.getOne(amenitiesArray[0].id),
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
  describe('when the create function is called', function () {
    var createData;
    beforeEach(function () {
      createData = {
        name: amenitiesArray[0].name,
        categoryId: amenitiesArray[0].categoryId,
      };
    });
    describe('and the create method returns the amenity', function () {
      beforeEach(function () {
        createMock.mockResolvedValue(amenitiesArray[0]);
      });
      it('should return the created amenity', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, amenityService.create(createData)];
              case 1:
                result = _a.sent();
                expect(result).toEqual(amenitiesArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and the category does not exist', function () {
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
                        return [4 /*yield*/, amenityService.create(createData)];
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
  describe('when the update function is called', function () {
    var updateData;
    var newName = 'New Product Name';
    beforeEach(function () {
      updateData = {
        name: newName,
      };
    });
    describe('and amenity with given id exists', function () {
      var updateResult;
      beforeEach(function () {
        updateResult = {
          id: amenitiesArray[0].id,
          name: newName,
          categoryId: amenitiesArray[0].categoryId,
        };
        updateMock.mockResolvedValue(updateResult);
      });
      it('should return the updated amenity', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  amenityService.update(amenitiesArray[0].id, updateData),
                ];
              case 1:
                result = _a.sent();
                expect(result).toEqual(updateResult);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and amenity or category does not exist', function () {
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
                          amenityService.update(
                            amenitiesArray[0].id,
                            updateData,
                          ),
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
  describe('when the delete function is called', function () {
    describe('and amenity exists', function () {
      beforeEach(function () {
        deleteMock.mockResolvedValue(amenitiesArray[0]);
      });
      it('should return the deleted amenity', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  amenityService.delete(amenitiesArray[0].id),
                ];
              case 1:
                result = _a.sent();
                expect(result).toBe(amenitiesArray[0]);
                return [2 /*return*/];
            }
          });
        });
      });
    });
    describe('and amenity does not exist', function () {
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
                        return [
                          4 /*yield*/,
                          amenityService.delete(amenitiesArray[0].id),
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
});
