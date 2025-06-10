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
exports.CreateRatingDto = void 0;
var class_validator_1 = require('class-validator');
var swagger_1 = require('@nestjs/swagger');
var CreateRatingDto = (function () {
  var _a;
  var _score_decorators;
  var _score_initializers = [];
  var _score_extraInitializers = [];
  var _review_decorators;
  var _review_initializers = [];
  var _review_extraInitializers = [];
  var _reservationId_decorators;
  var _reservationId_initializers = [];
  var _reservationId_extraInitializers = [];
  return (
    (_a = /** @class */ (function () {
      function CreateRatingDto() {
        this.score = __runInitializers(this, _score_initializers, void 0);
        this.review =
          (__runInitializers(this, _score_extraInitializers),
          __runInitializers(this, _review_initializers, void 0));
        this.reservationId =
          (__runInitializers(this, _review_extraInitializers),
          __runInitializers(this, _reservationId_initializers, void 0));
        __runInitializers(this, _reservationId_extraInitializers);
      }
      return CreateRatingDto;
    })()),
    (function () {
      var _metadata =
        typeof Symbol === 'function' && Symbol.metadata
          ? Object.create(null)
          : void 0;
      _score_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Numerical rating score (e.g. 1–5)',
          example: 4,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _review_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Optional written review from the user',
          example: 'Amazing place, would definitely book again!',
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)({
          message: 'Review cannot be an empty string if provided',
        }),
      ];
      _reservationId_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'ID of the reservation associated with this rating',
          example: 45,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      __esDecorate(
        null,
        null,
        _score_decorators,
        {
          kind: 'field',
          name: 'score',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'score' in obj;
            },
            get: function (obj) {
              return obj.score;
            },
            set: function (obj, value) {
              obj.score = value;
            },
          },
          metadata: _metadata,
        },
        _score_initializers,
        _score_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _review_decorators,
        {
          kind: 'field',
          name: 'review',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'review' in obj;
            },
            get: function (obj) {
              return obj.review;
            },
            set: function (obj, value) {
              obj.review = value;
            },
          },
          metadata: _metadata,
        },
        _review_initializers,
        _review_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _reservationId_decorators,
        {
          kind: 'field',
          name: 'reservationId',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'reservationId' in obj;
            },
            get: function (obj) {
              return obj.reservationId;
            },
            set: function (obj, value) {
              obj.reservationId = value;
            },
          },
          metadata: _metadata,
        },
        _reservationId_initializers,
        _reservationId_extraInitializers,
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
exports.CreateRatingDto = CreateRatingDto;
