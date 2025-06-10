'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TransformPhoneNumberToDisplay = TransformPhoneNumberToDisplay;
var class_transformer_1 = require('class-transformer');
function TransformPhoneNumberToDisplay() {
  return (0, class_transformer_1.Transform)(function (_a) {
    var value = _a.value;
    if (!value || typeof value !== 'string') {
      return value;
    }
    var numberLength = value.length;
    var visiblePart = value.substring(numberLength - 3, numberLength);
    return ''.concat('*'.repeat(numberLength - 3)).concat(visiblePart);
  });
}
