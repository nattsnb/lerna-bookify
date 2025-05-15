'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
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
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== 'default') __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthenticationService = void 0;
const common_1 = require('@nestjs/common');
const user_service_1 = require('../user/user.service');
const bcrypt = __importStar(require('bcrypt'));
const wrong_credentials_exception_1 = require('./wrong-credentials-exception');
const jwt_1 = require('@nestjs/jwt');
const config_1 = require('@nestjs/config');
let AuthenticationService = class AuthenticationService {
  jwtService;
  configService;
  usersService;
  constructor(jwtService, configService, usersService) {
    this.jwtService = jwtService;
    this.configService = configService;
    this.usersService = usersService;
  }
  async signUp(signUpData) {
    const hashedPassword = await bcrypt.hash(signUpData.password, 10);
    return this.usersService.create({
      name: signUpData.name,
      email: signUpData.email,
      password: hashedPassword,
      phoneNumber: signUpData.phoneNumber,
    });
  }
  async logIn(logInData, response) {
    const user = await this.getAuthenticatedUser(logInData);
    const cookie = this.getCookieWithJwtToken(user.id);
    response.setHeader('Set-Cookie', cookie);
    return user;
  }
  logOut(response) {
    const cookie = this.getCookieForLogOut();
    response.setHeader('Set-Cookie', cookie);
  }
  authenticate(request) {
    return request.user;
  }
  async getAuthenticatedUser(logInData) {
    const user = await this.getUserByEmail(logInData.email);
    const isPasswordVerified = await this.verifyPassword(
      logInData.password,
      user.password,
    );
    if (!isPasswordVerified) {
      throw new wrong_credentials_exception_1.WrongCredentialsException();
    }
    return user;
  }
  async getUserByEmail(email) {
    try {
      return await this.usersService.getByEmail(email);
    } catch (error) {
      if (error instanceof common_1.NotFoundException) {
        throw new wrong_credentials_exception_1.WrongCredentialsException();
      }
      throw error;
    }
  }
  async verifyPassword(plainTextPassword, hashedPassword) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }
  getCookieWithJwtToken(userId) {
    const payload = { userId };
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
  }
  getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata('design:paramtypes', [
      jwt_1.JwtService,
      config_1.ConfigService,
      user_service_1.UserService,
    ]),
  ],
  AuthenticationService,
);
//# sourceMappingURL=authentication.service.js.map
