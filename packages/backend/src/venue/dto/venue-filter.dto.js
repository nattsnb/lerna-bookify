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
exports.VenueFilterDto = void 0;
var class_transformer_1 = require('class-transformer');
var class_validator_1 = require('class-validator');
var swagger_1 = require('@nestjs/swagger');
var VenueFilterDto = (function () {
  var _a;
  var _amenities_decorators;
  var _amenities_initializers = [];
  var _amenities_extraInitializers = [];
  var _occasions_decorators;
  var _occasions_initializers = [];
  var _occasions_extraInitializers = [];
  var _venueTypeId_decorators;
  var _venueTypeId_initializers = [];
  var _venueTypeId_extraInitializers = [];
  var _pricePerNightInEURCentMin_decorators;
  var _pricePerNightInEURCentMin_initializers = [];
  var _pricePerNightInEURCentMin_extraInitializers = [];
  var _pricePerNightInEURCentMax_decorators;
  var _pricePerNightInEURCentMax_initializers = [];
  var _pricePerNightInEURCentMax_extraInitializers = [];
  var _dateStart_decorators;
  var _dateStart_initializers = [];
  var _dateStart_extraInitializers = [];
  var _dateEnd_decorators;
  var _dateEnd_initializers = [];
  var _dateEnd_extraInitializers = [];
  var _guests_decorators;
  var _guests_initializers = [];
  var _guests_extraInitializers = [];
  var _radiusKm_decorators;
  var _radiusKm_initializers = [];
  var _radiusKm_extraInitializers = [];
  var _latitude_decorators;
  var _latitude_initializers = [];
  var _latitude_extraInitializers = [];
  var _longitude_decorators;
  var _longitude_initializers = [];
  var _longitude_extraInitializers = [];
  return (
    (_a = /** @class */ (function () {
      function VenueFilterDto() {
        this.amenities = __runInitializers(
          this,
          _amenities_initializers,
          void 0,
        );
        this.occasions =
          (__runInitializers(this, _amenities_extraInitializers),
          __runInitializers(this, _occasions_initializers, void 0));
        this.venueTypeId =
          (__runInitializers(this, _occasions_extraInitializers),
          __runInitializers(this, _venueTypeId_initializers, void 0));
        this.pricePerNightInEURCentMin =
          (__runInitializers(this, _venueTypeId_extraInitializers),
          __runInitializers(
            this,
            _pricePerNightInEURCentMin_initializers,
            void 0,
          ));
        this.pricePerNightInEURCentMax =
          (__runInitializers(
            this,
            _pricePerNightInEURCentMin_extraInitializers,
          ),
          __runInitializers(
            this,
            _pricePerNightInEURCentMax_initializers,
            void 0,
          ));
        this.dateStart =
          (__runInitializers(
            this,
            _pricePerNightInEURCentMax_extraInitializers,
          ),
          __runInitializers(this, _dateStart_initializers, void 0));
        this.dateEnd =
          (__runInitializers(this, _dateStart_extraInitializers),
          __runInitializers(this, _dateEnd_initializers, void 0));
        this.guests =
          (__runInitializers(this, _dateEnd_extraInitializers),
          __runInitializers(this, _guests_initializers, void 0));
        this.radiusKm =
          (__runInitializers(this, _guests_extraInitializers),
          __runInitializers(this, _radiusKm_initializers, void 0));
        this.latitude =
          (__runInitializers(this, _radiusKm_extraInitializers),
          __runInitializers(this, _latitude_initializers, void 0));
        this.longitude =
          (__runInitializers(this, _latitude_extraInitializers),
          __runInitializers(this, _longitude_initializers, void 0));
        __runInitializers(this, _longitude_extraInitializers);
      }
      return VenueFilterDto;
    })()),
    (function () {
      var _metadata =
        typeof Symbol === 'function' && Symbol.metadata
          ? Object.create(null)
          : void 0;
      _amenities_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Array of amenity IDs',
          example: [1, 2, 3],
          type: [Number],
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Transform)(function (_b) {
          var value = _b.value;
          if (Array.isArray(value)) return value.map(Number);
          if (typeof value === 'string' && value.trim() !== '')
            return value.split(',').map(Number);
          return [];
        }),
        (0, class_validator_1.IsInt)({ each: true }),
      ];
      _occasions_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Array of occasion IDs',
          example: [4, 5],
          type: [Number],
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Transform)(function (_b) {
          var value = _b.value;
          if (Array.isArray(value)) return value.map(Number);
          if (typeof value === 'string' && value.trim() !== '')
            return value.split(',').map(Number);
          return [];
        }),
        (0, class_validator_1.IsInt)({ each: true }),
      ];
      _venueTypeId_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Venue type ID',
          example: 1,
          type: Number,
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_b) {
          var value = _b.value;
          return Number(value);
        }),
        (0, class_validator_1.IsInt)(),
      ];
      _pricePerNightInEURCentMin_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Minimum price per night',
          example: 100,
          type: Number,
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_b) {
          var value = _b.value;
          return Number(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(0),
      ];
      _pricePerNightInEURCentMax_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Maximum price per night',
          example: 500,
          type: Number,
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_b) {
          var value = _b.value;
          return Number(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(0),
      ];
      _dateStart_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Start date for reservation (YYYY-MM-DD)',
          example: '2025-07-01',
          type: String,
          format: 'date',
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDateString)(),
      ];
      _dateEnd_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'End date for reservation (YYYY-MM-DD)',
          example: '2025-07-05',
          type: String,
          format: 'date',
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDateString)(),
      ];
      _guests_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Minimum number of guests',
          example: 4,
          type: Number,
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_b) {
          var value = _b.value;
          return Number(value);
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
      ];
      _radiusKm_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Search radius in kilometers from the specified city',
          example: 10,
          type: Number,
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_b) {
          var value = _b.value;
          return Number(value);
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(0),
      ];
      _latitude_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Latitude of reference point',
          example: 54.352,
          type: Number,
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_b) {
          var value = _b.value;
          return Number(value);
        }),
        (0, class_validator_1.IsNumber)(),
      ];
      _longitude_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Longitude of reference point',
          example: 18.6466,
          type: Number,
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_b) {
          var value = _b.value;
          return Number(value);
        }),
        (0, class_validator_1.IsNumber)(),
      ];
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
      __esDecorate(
        null,
        null,
        _occasions_decorators,
        {
          kind: 'field',
          name: 'occasions',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'occasions' in obj;
            },
            get: function (obj) {
              return obj.occasions;
            },
            set: function (obj, value) {
              obj.occasions = value;
            },
          },
          metadata: _metadata,
        },
        _occasions_initializers,
        _occasions_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _venueTypeId_decorators,
        {
          kind: 'field',
          name: 'venueTypeId',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'venueTypeId' in obj;
            },
            get: function (obj) {
              return obj.venueTypeId;
            },
            set: function (obj, value) {
              obj.venueTypeId = value;
            },
          },
          metadata: _metadata,
        },
        _venueTypeId_initializers,
        _venueTypeId_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _pricePerNightInEURCentMin_decorators,
        {
          kind: 'field',
          name: 'pricePerNightInEURCentMin',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'pricePerNightInEURCentMin' in obj;
            },
            get: function (obj) {
              return obj.pricePerNightInEURCentMin;
            },
            set: function (obj, value) {
              obj.pricePerNightInEURCentMin = value;
            },
          },
          metadata: _metadata,
        },
        _pricePerNightInEURCentMin_initializers,
        _pricePerNightInEURCentMin_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _pricePerNightInEURCentMax_decorators,
        {
          kind: 'field',
          name: 'pricePerNightInEURCentMax',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'pricePerNightInEURCentMax' in obj;
            },
            get: function (obj) {
              return obj.pricePerNightInEURCentMax;
            },
            set: function (obj, value) {
              obj.pricePerNightInEURCentMax = value;
            },
          },
          metadata: _metadata,
        },
        _pricePerNightInEURCentMax_initializers,
        _pricePerNightInEURCentMax_extraInitializers,
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
      __esDecorate(
        null,
        null,
        _guests_decorators,
        {
          kind: 'field',
          name: 'guests',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'guests' in obj;
            },
            get: function (obj) {
              return obj.guests;
            },
            set: function (obj, value) {
              obj.guests = value;
            },
          },
          metadata: _metadata,
        },
        _guests_initializers,
        _guests_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _radiusKm_decorators,
        {
          kind: 'field',
          name: 'radiusKm',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'radiusKm' in obj;
            },
            get: function (obj) {
              return obj.radiusKm;
            },
            set: function (obj, value) {
              obj.radiusKm = value;
            },
          },
          metadata: _metadata,
        },
        _radiusKm_initializers,
        _radiusKm_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _latitude_decorators,
        {
          kind: 'field',
          name: 'latitude',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'latitude' in obj;
            },
            get: function (obj) {
              return obj.latitude;
            },
            set: function (obj, value) {
              obj.latitude = value;
            },
          },
          metadata: _metadata,
        },
        _latitude_initializers,
        _latitude_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _longitude_decorators,
        {
          kind: 'field',
          name: 'longitude',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'longitude' in obj;
            },
            get: function (obj) {
              return obj.longitude;
            },
            set: function (obj, value) {
              obj.longitude = value;
            },
          },
          metadata: _metadata,
        },
        _longitude_initializers,
        _longitude_extraInitializers,
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
exports.VenueFilterDto = VenueFilterDto;
