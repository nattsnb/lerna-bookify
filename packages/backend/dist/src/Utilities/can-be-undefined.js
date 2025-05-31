"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanBeUndefined = CanBeUndefined;
const class_validator_1 = require("class-validator");
function CanBeUndefined() {
    return (0, class_validator_1.ValidateIf)((_, value) => value !== undefined);
}
//# sourceMappingURL=can-be-undefined.js.map