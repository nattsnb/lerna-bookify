'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.WrongCredentialsException = void 0;
const common_1 = require('@nestjs/common');
class WrongCredentialsException extends common_1.UnauthorizedException {
  constructor() {
    super('Wrong credentials provided.');
  }
}
exports.WrongCredentialsException = WrongCredentialsException;
//# sourceMappingURL=wrong-credentials-exception.js.map
