'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CanBeUndefined = CanBeUndefined;
var class_validator_1 = require('class-validator');
function CanBeUndefined() {
  return (0, class_validator_1.ValidateIf)(function (_, value) {
    return value !== undefined;
  });
}
