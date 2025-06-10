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
var authentication_service_1 = require('./authentication.service');
var testing_1 = require('@nestjs/testing');
var config_1 = require('@nestjs/config');
var jwt_1 = require('@nestjs/jwt');
var user_service_1 = require('../user/user.service');
var common_1 = require('@nestjs/common');
var wrong_credentials_exception_1 = require('./wrong-credentials-exception');
var bcrypt_1 = require('bcrypt');
var prisma_client_1 = require('@bookify/prisma-client');
var prisma_error_enum_1 = require('../database/prisma-error.enum');
describe('The AuthenticationService', function () {
  var getByEmailMock;
  var createMock;
  var authenticationService;
  var password;
  var userData;
  var response;
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var jwtSignMock, configGetMock, module, hashedPassword;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            getByEmailMock = jest.fn();
            createMock = jest.fn();
            jwtSignMock = jest.fn().mockReturnValue('mocked-token');
            configGetMock = jest.fn().mockReturnValue('43200');
            return [
              4 /*yield*/,
              testing_1.Test.createTestingModule({
                providers: [
                  authentication_service_1.AuthenticationService,
                  {
                    provide: user_service_1.UserService,
                    useValue: {
                      getByEmail: getByEmailMock,
                      create: createMock,
                    },
                  },
                  {
                    provide: jwt_1.JwtService,
                    useValue: {
                      sign: jwtSignMock,
                    },
                  },
                  {
                    provide: config_1.ConfigService,
                    useValue: {
                      get: configGetMock,
                    },
                  },
                ],
                imports: [
                  config_1.ConfigModule.forRoot(),
                  jwt_1.JwtModule.register({
                    secretOrPrivateKey: 'Secret key',
                  }),
                ],
              }).compile(),
            ];
          case 1:
            module = _a.sent();
            return [
              4 /*yield*/,
              module.get(authentication_service_1.AuthenticationService),
            ];
          case 2:
            authenticationService = _a.sent();
            password = 'strongPassword123';
            return [4 /*yield*/, (0, bcrypt_1.hash)(password, 10)];
          case 3:
            hashedPassword = _a.sent();
            userData = {
              id: 1,
              email: 'jane.doe@example.com',
              name: 'Jane Doe',
              password: hashedPassword,
              phoneNumber: '123456789',
            };
            response = {
              setHeader: jest.fn(),
            };
            return [2 /*return*/];
        }
      });
    });
  });
  describe('signUp', function () {
    var signUpData;
    beforeEach(function () {
      signUpData = {
        name: userData.name,
        email: userData.email,
        password: password,
        phoneNumber: userData.phoneNumber,
      };
    });
    it('should return valid user when data is correct', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              createMock.mockResolvedValue(userData);
              return [4 /*yield*/, authenticationService.signUp(signUpData)];
            case 1:
              result = _a.sent();
              expect(result).toBe(userData);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw ConflictException when email is already taken', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              createMock.mockRejectedValue(
                new prisma_client_1.Prisma.PrismaClientKnownRequestError(
                  'Unique constraint failed',
                  {
                    code: prisma_error_enum_1.PrismaError
                      .UniqueConstraintViolated,
                    clientVersion: prisma_client_1.Prisma.prismaVersion.client,
                  },
                ),
              );
              return [
                4 /*yield*/,
                expect(
                  authenticationService.signUp(signUpData),
                ).rejects.toThrow(
                  prisma_client_1.Prisma.PrismaClientKnownRequestError,
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
  describe('logIn', function () {
    it('should return user and set cookie when credentials are valid', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var logInData, result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              getByEmailMock.mockResolvedValue(userData);
              logInData = { email: userData.email, password: password };
              return [
                4 /*yield*/,
                authenticationService.logIn(logInData, response),
              ];
            case 1:
              result = _a.sent();
              expect(response.setHeader).toHaveBeenCalledWith(
                'Set-Cookie',
                'Authentication=mocked-token; HttpOnly; Path=/; Max-Age=43200',
              );
              expect(result).toBe(userData);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw WrongCredentialsException when email is not found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var logInData;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              getByEmailMock.mockRejectedValue(
                new common_1.NotFoundException(),
              );
              logInData = { email: 'notfound@example.com', password: password };
              return [
                4 /*yield*/,
                expect(
                  authenticationService.logIn(logInData, response),
                ).rejects.toThrow(
                  wrong_credentials_exception_1.WrongCredentialsException,
                ),
              ];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw WrongCredentialsException when password is incorrect', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var logInData;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              getByEmailMock.mockResolvedValue(userData);
              logInData = {
                email: userData.email,
                password: 'wrongPassword',
              };
              return [
                4 /*yield*/,
                expect(
                  authenticationService.logIn(logInData, response),
                ).rejects.toThrow(
                  wrong_credentials_exception_1.WrongCredentialsException,
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
  describe('getCookieWithJwtToken', function () {
    it('should return cookie with token and expiration', function () {
      var result = authenticationService.getCookieWithJwtToken(userData.id);
      expect(result).toBe(
        'Authentication=mocked-token; HttpOnly; Path=/; Max-Age=43200',
      );
    });
  });
  describe('getCookieForLogOut', function () {
    it('should return cookie clearing authentication', function () {
      var result = authenticationService.getCookieForLogOut();
      expect(result).toBe('Authentication=; HttpOnly; Path=/; Max-Age=0');
    });
  });
  describe('authenticate', function () {
    it('should return user from request', function () {
      var request = { user: userData };
      var result = authenticationService.authenticate(request);
      expect(result).toBe(userData);
    });
  });
  describe('getAuthenticatedUser', function () {
    it('should return user when email and password are valid', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              getByEmailMock.mockResolvedValue(userData);
              return [
                4 /*yield*/,
                authenticationService.getAuthenticatedUser({
                  email: userData.email,
                  password: password,
                }),
              ];
            case 1:
              result = _a.sent();
              expect(result).toBe(userData);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw WrongCredentialsException when password is invalid', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              getByEmailMock.mockResolvedValue(userData);
              result = authenticationService.getAuthenticatedUser({
                email: userData.email,
                password: 'invalid-password',
              });
              return [
                4 /*yield*/,
                expect(result).rejects.toThrow(
                  wrong_credentials_exception_1.WrongCredentialsException,
                ),
              ];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw WrongCredentialsException when user not found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              getByEmailMock.mockRejectedValue(
                new common_1.NotFoundException(),
              );
              result = authenticationService.getAuthenticatedUser({
                email: 'notfound@example.com',
                password: password,
              });
              return [
                4 /*yield*/,
                expect(result).rejects.toThrow(
                  wrong_credentials_exception_1.WrongCredentialsException,
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
  describe('verifyPassword', function () {
    it('should return true if passwords match', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var plain, hashed, result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              plain = 'test123';
              return [4 /*yield*/, (0, bcrypt_1.hash)(plain, 10)];
            case 1:
              hashed = _a.sent();
              return [
                4 /*yield*/,
                authenticationService.verifyPassword(plain, hashed),
              ];
            case 2:
              result = _a.sent();
              expect(result).toBe(true);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should return false if passwords do not match', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                authenticationService.verifyPassword(
                  'wrong',
                  userData.password,
                ),
              ];
            case 1:
              result = _a.sent();
              expect(result).toBe(false);
              return [2 /*return*/];
          }
        });
      });
    });
  });
  describe('getUserByEmail', function () {
    it('should return user if found', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              getByEmailMock.mockResolvedValue(userData);
              return [
                4 /*yield*/,
                authenticationService.getUserByEmail(userData.email),
              ];
            case 1:
              result = _a.sent();
              expect(result).toBe(userData);
              return [2 /*return*/];
          }
        });
      });
    });
    it('should throw WrongCredentialsException if NotFoundException is thrown', function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              getByEmailMock.mockRejectedValue(
                new common_1.NotFoundException(),
              );
              return [
                4 /*yield*/,
                expect(
                  authenticationService.getUserByEmail('notfound@example.com'),
                ).rejects.toThrow(
                  wrong_credentials_exception_1.WrongCredentialsException,
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
