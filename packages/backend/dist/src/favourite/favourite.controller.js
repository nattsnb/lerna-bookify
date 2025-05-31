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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouriteController = void 0;
const common_1 = require("@nestjs/common");
const favourite_service_1 = require("./favourite.service");
const jwt_authentication_guard_1 = require("../authentication/jwt-authentication.guard");
const swagger_1 = require("@nestjs/swagger");
const create_favourite_dto_1 = require("./dto/create-favourite.dto");
let FavouriteController = class FavouriteController {
    favouriteService;
    constructor(favouriteService) {
        this.favouriteService = favouriteService;
    }
    getAll() {
        return this.favouriteService.getAll();
    }
    getByUser(id) {
        return this.favouriteService.getByUser(id);
    }
    getByVenue(id) {
        return this.favouriteService.getByVenue(id);
    }
    getOne(id) {
        return this.favouriteService.getOne(id);
    }
    create(dto, request) {
        return this.favouriteService.create(dto.venueId, request.user.id);
    }
    delete(id) {
        return this.favouriteService.delete(id);
    }
};
exports.FavouriteController = FavouriteController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavouriteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavouriteController.prototype, "getByUser", null);
__decorate([
    (0, common_1.Get)('venue/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavouriteController.prototype, "getByVenue", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavouriteController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.JwtAuthenticationGuard),
    (0, swagger_1.ApiBody)({ type: create_favourite_dto_1.CreateFavouriteDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_favourite_dto_1.CreateFavouriteDto, Object]),
    __metadata("design:returntype", void 0)
], FavouriteController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavouriteController.prototype, "delete", null);
exports.FavouriteController = FavouriteController = __decorate([
    (0, common_1.Controller)('favourite'),
    __metadata("design:paramtypes", [favourite_service_1.FavouriteService])
], FavouriteController);
//# sourceMappingURL=favourite.controller.js.map