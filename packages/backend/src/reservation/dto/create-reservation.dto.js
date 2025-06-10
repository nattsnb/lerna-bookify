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
exports.CreateReservationDto = void 0;
var class_validator_1 = require('class-validator');
var swagger_1 = require('@nestjs/swagger');
var CreateReservationDto = (function () {
  var _a;
  var _venueId_decorators;
  var _venueId_initializers = [];
  var _venueId_extraInitializers = [];
  var _dateStart_decorators;
  var _dateStart_initializers = [];
  var _dateStart_extraInitializers = [];
  var _dateEnd_decorators;
  var _dateEnd_initializers = [];
  var _dateEnd_extraInitializers = [];
  return (
    (_a = /** @class */ (function () {
      function CreateReservationDto() {
        this.venueId = __runInitializers(this, _venueId_initializers, void 0);
        this.dateStart =
          (__runInitializers(this, _venueId_extraInitializers),
          __runInitializers(this, _dateStart_initializers, void 0));
        this.dateEnd =
          (__runInitializers(this, _dateStart_extraInitializers),
          __runInitializers(this, _dateEnd_initializers, void 0));
        __runInitializers(this, _dateEnd_extraInitializers);
      }
      return CreateReservationDto;
    })()),
    (function () {
      var _metadata =
        typeof Symbol === 'function' && Symbol.metadata
          ? Object.create(null)
          : void 0;
      _venueId_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'ID of the venue being reserved',
          example: 5,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _dateStart_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Start date (YYYY-MM-DD)',
          example: '2025-08-01',
        }),
        (0, class_validator_1.IsDateString)(
          { strict: true },
          { message: 'Must be in YYYY-MM-DD format' },
        ),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _dateEnd_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'End date (YYYY-MM-DD)',
          example: '2025-08-05',
        }),
        (0, class_validator_1.IsDateString)(
          { strict: true },
          { message: 'Must be in YYYY-MM-DD format' },
        ),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      __esDecorate(
        null,
        null,
        _venueId_decorators,
        {
          kind: 'field',
          name: 'venueId',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'venueId' in obj;
            },
            get: function (obj) {
              return obj.venueId;
            },
            set: function (obj, value) {
              obj.venueId = value;
            },
          },
          metadata: _metadata,
        },
        _venueId_initializers,
        _venueId_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _dateStart_decorators,
        {
          kind: 'field',
          name: 'dateStart',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'dateStart' in obj;
            },
            get: function (obj) {
              return obj.dateStart;
            },
            set: function (obj, value) {
              obj.dateStart = value;
            },
          },
          metadata: _metadata,
        },
        _dateStart_initializers,
        _dateStart_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _dateEnd_decorators,
        {
          kind: 'field',
          name: 'dateEnd',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'dateEnd' in obj;
            },
            get: function (obj) {
              return obj.dateEnd;
            },
            set: function (obj, value) {
              obj.dateEnd = value;
            },
          },
          metadata: _metadata,
        },
        _dateEnd_initializers,
        _dateEnd_extraInitializers,
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
exports.CreateReservationDto = CreateReservationDto;
