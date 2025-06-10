'use strict';
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
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthenticationResponseDto = void 0;
var class_transformer_1 = require('class-transformer');
var transform_phone_number_to_display_1 = require('../../Utilities/transform-phone-number-to-display');
var swagger_1 = require('@nestjs/swagger');
var AuthenticationResponseDto = (function () {
  var _a;
  var _id_decorators;
  var _id_initializers = [];
  var _id_extraInitializers = [];
  var _email_decorators;
  var _email_initializers = [];
  var _email_extraInitializers = [];
  var _name_decorators;
  var _name_initializers = [];
  var _name_extraInitializers = [];
  var _password_decorators;
  var _password_initializers = [];
  var _password_extraInitializers = [];
  var _phoneNumber_decorators;
  var _phoneNumber_initializers = [];
  var _phoneNumber_extraInitializers = [];
  return (
    (_a = /** @class */ (function () {
      function AuthenticationResponseDto() {
        this.id = __runInitializers(this, _id_initializers, void 0);
        this.email =
          (__runInitializers(this, _id_extraInitializers),
          __runInitializers(this, _email_initializers, void 0));
        this.name =
          (__runInitializers(this, _email_extraInitializers),
          __runInitializers(this, _name_initializers, void 0));
        this.password =
          (__runInitializers(this, _name_extraInitializers),
          __runInitializers(this, _password_initializers, void 0));
        this.phoneNumber =
          (__runInitializers(this, _password_extraInitializers),
          __runInitializers(this, _phoneNumber_initializers, void 0));
        __runInitializers(this, _phoneNumber_extraInitializers);
      }
      return AuthenticationResponseDto;
    })()),
    (function () {
      var _metadata =
        typeof Symbol === 'function' && Symbol.metadata
          ? Object.create(null)
          : void 0;
      _id_decorators = [(0, swagger_1.ApiProperty)()];
      _email_decorators = [(0, swagger_1.ApiProperty)()];
      _name_decorators = [(0, swagger_1.ApiProperty)()];
      _password_decorators = [(0, class_transformer_1.Exclude)()];
      _phoneNumber_decorators = [
        (0, swagger_1.ApiProperty)(),
        (0,
        transform_phone_number_to_display_1.TransformPhoneNumberToDisplay)(),
      ];
      __esDecorate(
        null,
        null,
        _id_decorators,
        {
          kind: 'field',
          name: 'id',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'id' in obj;
            },
            get: function (obj) {
              return obj.id;
            },
            set: function (obj, value) {
              obj.id = value;
            },
          },
          metadata: _metadata,
        },
        _id_initializers,
        _id_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _email_decorators,
        {
          kind: 'field',
          name: 'email',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'email' in obj;
            },
            get: function (obj) {
              return obj.email;
            },
            set: function (obj, value) {
              obj.email = value;
            },
          },
          metadata: _metadata,
        },
        _email_initializers,
        _email_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _name_decorators,
        {
          kind: 'field',
          name: 'name',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'name' in obj;
            },
            get: function (obj) {
              return obj.name;
            },
            set: function (obj, value) {
              obj.name = value;
            },
          },
          metadata: _metadata,
        },
        _name_initializers,
        _name_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _password_decorators,
        {
          kind: 'field',
          name: 'password',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'password' in obj;
            },
            get: function (obj) {
              return obj.password;
            },
            set: function (obj, value) {
              obj.password = value;
            },
          },
          metadata: _metadata,
        },
        _password_initializers,
        _password_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _phoneNumber_decorators,
        {
          kind: 'field',
          name: 'phoneNumber',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'phoneNumber' in obj;
            },
            get: function (obj) {
              return obj.phoneNumber;
            },
            set: function (obj, value) {
              obj.phoneNumber = value;
            },
          },
          metadata: _metadata,
        },
        _phoneNumber_initializers,
        _phoneNumber_extraInitializers,
      );
      if (_metadata)
        Object.defineProperty(_a, Symbol.metadata, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: _metadata,
        });
    })(),
    _a
  );
})();
exports.AuthenticationResponseDto = AuthenticationResponseDto;
