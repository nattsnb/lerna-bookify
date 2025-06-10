'use strict';
var __runInitializers =
  (this && this.__runInitializers) ||
  function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue
        ? initializers[i].call(thisArg, value)
        : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
var __esDecorate =
  (this && this.__esDecorate) ||
  function (
    ctor,
    descriptorIn,
    decorators,
    contextIn,
    initializers,
    extraInitializers,
  ) {
    function accept(f) {
      if (f !== void 0 && typeof f !== 'function')
        throw new TypeError('Function expected');
      return f;
    }
    var kind = contextIn.kind,
      key = kind === 'getter' ? 'get' : kind === 'setter' ? 'set' : 'value';
    var target =
      !descriptorIn && ctor
        ? contextIn['static']
          ? ctor
          : ctor.prototype
        : null;
    var descriptor =
      descriptorIn ||
      (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === 'access' ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done)
          throw new TypeError(
            'Cannot add initializers after decoration has completed',
          );
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(
        kind === 'accessor'
          ? { get: descriptor.get, set: descriptor.set }
          : descriptor[key],
        context,
      );
      if (kind === 'accessor') {
        if (result === void 0) continue;
        if (result === null || typeof result !== 'object')
          throw new TypeError('Object expected');
        if ((_ = accept(result.get))) descriptor.get = _;
        if ((_ = accept(result.set))) descriptor.set = _;
        if ((_ = accept(result.init))) initializers.unshift(_);
      } else if ((_ = accept(result))) {
        if (kind === 'field') initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
var __setFunctionName =
  (this && this.__setFunctionName) ||
  function (f, name, prefix) {
    if (typeof name === 'symbol')
      name = name.description ? '['.concat(name.description, ']') : '';
    return Object.defineProperty(f, 'name', {
      configurable: true,
      value: prefix ? ''.concat(prefix, ' ', name) : name,
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.FavouriteController = void 0;
var common_1 = require('@nestjs/common');
var jwt_authentication_guard_1 = require('../authentication/jwt-authentication.guard');
var swagger_1 = require('@nestjs/swagger');
var create_favourite_dto_1 = require('./dto/create-favourite.dto');
var FavouriteController = (function () {
  var _classDecorators = [(0, common_1.Controller)('favourite')];
  var _classDescriptor;
  var _classExtraInitializers = [];
  var _classThis;
  var _instanceExtraInitializers = [];
  var _getAll_decorators;
  var _getByUser_decorators;
  var _getByVenue_decorators;
  var _getOne_decorators;
  var _create_decorators;
  var _delete_decorators;
  var FavouriteController = (_classThis = /** @class */ (function () {
    function FavouriteController_1(favouriteService) {
      this.favouriteService =
        (__runInitializers(this, _instanceExtraInitializers), favouriteService);
    }
    FavouriteController_1.prototype.getAll = function () {
      return this.favouriteService.getAll();
    };
    FavouriteController_1.prototype.getByUser = function (id) {
      return this.favouriteService.getByUser(id);
    };
    FavouriteController_1.prototype.getByVenue = function (id) {
      return this.favouriteService.getByVenue(id);
    };
    FavouriteController_1.prototype.getOne = function (id) {
      return this.favouriteService.getOne(id);
    };
    FavouriteController_1.prototype.create = function (dto, request) {
      return this.favouriteService.create(dto.venueId, request.user.id);
    };
    FavouriteController_1.prototype.delete = function (id) {
      return this.favouriteService.delete(id);
    };
    return FavouriteController_1;
  })());
  __setFunctionName(_classThis, 'FavouriteController');
  (function () {
    var _metadata =
      typeof Symbol === 'function' && Symbol.metadata
        ? Object.create(null)
        : void 0;
    _getAll_decorators = [(0, common_1.Get)()];
    _getByUser_decorators = [(0, common_1.Get)('user/:id')];
    _getByVenue_decorators = [(0, common_1.Get)('venue/:id')];
    _getOne_decorators = [(0, common_1.Get)(':id')];
    _create_decorators = [
      (0, common_1.Post)(),
      (0, common_1.UseGuards)(
        jwt_authentication_guard_1.JwtAuthenticationGuard,
      ),
      (0, swagger_1.ApiBody)({
        type: create_favourite_dto_1.CreateFavouriteDto,
      }),
    ];
    _delete_decorators = [(0, common_1.Delete)(':id')];
    __esDecorate(
      _classThis,
      null,
      _getAll_decorators,
      {
        kind: 'method',
        name: 'getAll',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'getAll' in obj;
          },
          get: function (obj) {
            return obj.getAll;
          },
        },
        metadata: _metadata,
      },
      null,
      _instanceExtraInitializers,
    );
    __esDecorate(
      _classThis,
      null,
      _getByUser_decorators,
      {
        kind: 'method',
        name: 'getByUser',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'getByUser' in obj;
          },
          get: function (obj) {
            return obj.getByUser;
          },
        },
        metadata: _metadata,
      },
      null,
      _instanceExtraInitializers,
    );
    __esDecorate(
      _classThis,
      null,
      _getByVenue_decorators,
      {
        kind: 'method',
        name: 'getByVenue',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'getByVenue' in obj;
          },
          get: function (obj) {
            return obj.getByVenue;
          },
        },
        metadata: _metadata,
      },
      null,
      _instanceExtraInitializers,
    );
    __esDecorate(
      _classThis,
      null,
      _getOne_decorators,
      {
        kind: 'method',
        name: 'getOne',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'getOne' in obj;
          },
          get: function (obj) {
            return obj.getOne;
          },
        },
        metadata: _metadata,
      },
      null,
      _instanceExtraInitializers,
    );
    __esDecorate(
      _classThis,
      null,
      _create_decorators,
      {
        kind: 'method',
        name: 'create',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'create' in obj;
          },
          get: function (obj) {
            return obj.create;
          },
        },
        metadata: _metadata,
      },
      null,
      _instanceExtraInitializers,
    );
    __esDecorate(
      _classThis,
      null,
      _delete_decorators,
      {
        kind: 'method',
        name: 'delete',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'delete' in obj;
          },
          get: function (obj) {
            return obj.delete;
          },
        },
        metadata: _metadata,
      },
      null,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: 'class', name: _classThis.name, metadata: _metadata },
      null,
      _classExtraInitializers,
    );
    FavouriteController = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (FavouriteController = _classThis);
})();
exports.FavouriteController = FavouriteController;
