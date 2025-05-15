'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TransformPhoneNumberToDisplay = TransformPhoneNumberToDisplay;
const class_transformer_1 = require('class-transformer');
function TransformPhoneNumberToDisplay() {
  return (0, class_transformer_1.Transform)(({ value }) => {
    if (!value || typeof value !== 'string') {
      return value;
    }
    const numberLength = value.length;
    const visiblePart = value.substring(numberLength - 3, numberLength);
    return `${'*'.repeat(numberLength - 3)}${visiblePart}`;
  });
}
//# sourceMappingURL=transform-phone-number-to-display.js.map
