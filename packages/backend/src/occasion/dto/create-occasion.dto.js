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
exports.CreateOccasionDto = void 0;
var class_validator_1 = require('class-validator');
var swagger_1 = require('@nestjs/swagger');
var CreateOccasionDto = (function () {
  var _a;
  var _name_decorators;
  var _name_initializers = [];
  var _name_extraInitializers = [];
  var _amenities_decorators;
  var _amenities_initializers = [];
  var _amenities_extraInitializers = [];
  return (
    (_a = /** @class */ (function () {
      function CreateOccasionDto() {
        this.name = __runInitializers(this, _name_initializers, void 0);
        this.amenities =
          (__runInitializers(this, _name_extraInitializers),
          __runInitializers(this, _amenities_initializers, void 0));
        __runInitializers(this, _amenities_extraInitializers);
      }
      return CreateOccasionDto;
    })()),
    (function () {
      var _metadata =
        typeof Symbol === 'function' && Symbol.metadata
          ? Object.create(null)
          : void 0;
      _name_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Name of the occasion',
          example: 'Birthday Party',
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _amenities_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'List of amenity IDs associated with the occasion',
          example: [1, 2, 5],
          required: true,
        }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsInt)({ each: true }),
      ];
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
        _amenities_decorators,
        {
          kind: 'field',
          name: 'amenities',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'amenities' in obj;
            },
            get: function (obj) {
              return obj.amenities;
            },
            set: function (obj, value) {
              obj.amenities = value;
            },
          },
          metadata: _metadata,
        },
        _amenities_initializers,
        _amenities_extraInitializers,
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
exports.CreateOccasionDto = CreateOccasionDto;
