"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOccasionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_occasion_dto_1 = require("./create-occasion.dto");
class UpdateOccasionDto extends (0, mapped_types_1.PartialType)(create_occasion_dto_1.CreateOccasionDto) {
}
exports.UpdateOccasionDto = UpdateOccasionDto;
//# sourceMappingURL=update-occasion.dto.js.map