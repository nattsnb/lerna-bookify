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
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthenticationResponseDto = void 0;
const class_transformer_1 = require('class-transformer');
const transform_phone_number_to_display_1 = require('../../Utilities/transform-phone-number-to-display');
const swagger_1 = require('@nestjs/swagger');
class AuthenticationResponseDto {
  id;
  email;
  name;
  password;
  phoneNumber;
}
exports.AuthenticationResponseDto = AuthenticationResponseDto;
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', Number)],
  AuthenticationResponseDto.prototype,
  'id',
  void 0,
);
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', String)],
  AuthenticationResponseDto.prototype,
  'email',
  void 0,
);
__decorate(
  [(0, swagger_1.ApiProperty)(), __metadata('design:type', String)],
  AuthenticationResponseDto.prototype,
  'name',
  void 0,
);
__decorate(
  [(0, class_transformer_1.Exclude)(), __metadata('design:type', String)],
  AuthenticationResponseDto.prototype,
  'password',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)(),
    (0, transform_phone_number_to_display_1.TransformPhoneNumberToDisplay)(),
    __metadata('design:type', String),
  ],
  AuthenticationResponseDto.prototype,
  'phoneNumber',
  void 0,
);
//# sourceMappingURL=authentication-response.dto.js.map
