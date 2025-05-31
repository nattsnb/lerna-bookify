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
exports.AuthenticationController = void 0;
const authentication_service_1 = require("./authentication.service");
const common_1 = require("@nestjs/common");
const sign_up_dto_1 = require("./dto/sign-up.dto");
const log_in_dto_1 = require("./dto/log-in.dto");
const jwt_authentication_guard_1 = require("./jwt-authentication.guard");
const authentication_response_dto_1 = require("./dto/authentication-response.dto");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
let AuthenticationController = class AuthenticationController {
    authenticationService;
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    async signUp(signUpData) {
        return this.authenticationService.signUp(signUpData);
    }
    async logIn(logInData, response) {
        return this.authenticationService.logIn(logInData, response);
    }
    logOut(response) {
        return this.authenticationService.logOut(response);
    }
    authenticate(request) {
        return this.authenticationService.authenticate(request);
    }
};
exports.AuthenticationController = AuthenticationController;
__decorate([
    (0, common_1.Post)('sign-up'),
    (0, swagger_1.ApiBody)({ type: sign_up_dto_1.SignUpDto }),
    (0, class_transformer_1.TransformPlainToInstance)(authentication_response_dto_1.AuthenticationResponseDto),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "signUp", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('log-in'),
    (0, swagger_1.ApiBody)({ type: log_in_dto_1.LogInDto }),
    (0, class_transformer_1.TransformPlainToInstance)(authentication_response_dto_1.AuthenticationResponseDto),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [log_in_dto_1.LogInDto, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "logIn", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('log-out'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "logOut", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.JwtAuthenticationGuard),
    (0, common_1.Get)(),
    (0, class_transformer_1.TransformPlainToInstance)(authentication_response_dto_1.AuthenticationResponseDto),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "authenticate", null);
exports.AuthenticationController = AuthenticationController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('authentication'),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AuthenticationController);
//# sourceMappingURL=authentication.controller.js.map