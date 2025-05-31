"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVenueDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateVenueDto {
    name;
    description;
    images;
    pricePerNightInEURCent;
    rating;
    capacity;
    amountsOfBeds;
    extraSleepingDetails;
    checkInHour;
    checkOutHour;
    distanceFromCityCenterInMeters;
    facebookUrl;
    instagramUrl;
    twitterUrl;
    websiteUrl;
    streetNumber;
    streetName;
    postalCode;
    city;
    amenitiesIds;
}
exports.CreateVenueDto = CreateVenueDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the venue', example: 'Seaside Villa' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the venue',
        example: 'A beautiful villa near the beach with a private pool.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of image URLs',
        example: [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
        ],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateVenueDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price per night in EUR cents', example: 12000 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateVenueDto.prototype, "pricePerNightInEURCent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average rating of the venue', example: 4.8 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateVenueDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum guest capacity', example: 6 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateVenueDto.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of beds', example: 3 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateVenueDto.prototype, "amountsOfBeds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Details about additional sleeping arrangements (max 80 characters)',
        example: 'Sofa bed available for 1 adult.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(80, {
        message: 'Extra sleeping details must be at most 80 characters long',
    }),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "extraSleepingDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in hour in 24h format', example: 15 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateVenueDto.prototype, "checkInHour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out hour in 24h format', example: 11 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateVenueDto.prototype, "checkOutHour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance from city center in meters',
        example: 1500,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateVenueDto.prototype, "distanceFromCityCenterInMeters", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Facebook page URL',
        example: 'https://facebook.com/seasidevilla',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "facebookUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Instagram profile URL',
        example: 'https://instagram.com/seasidevilla',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "instagramUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Twitter profile URL',
        example: 'https://twitter.com/seasidevilla',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "twitterUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Official website URL',
        example: 'https://seasidevilla.com',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "websiteUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Street number of the venue', example: '25B' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "streetNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Street name of the venue',
        example: 'Ocean Drive',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "streetName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Postal code of the venue location',
        example: '10001',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'City where the venue is located',
        example: 'Lisbon',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVenueDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'IDs of associated amenities',
        example: [1, 3, 7],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], CreateVenueDto.prototype, "amenitiesIds", void 0);
//# sourceMappingURL=create-venue.dto.js.map