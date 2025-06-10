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
exports.CreateVenueDto = void 0;
var class_validator_1 = require('class-validator');
var swagger_1 = require('@nestjs/swagger');
var CreateVenueDto = (function () {
  var _a;
  var _name_decorators;
  var _name_initializers = [];
  var _name_extraInitializers = [];
  var _description_decorators;
  var _description_initializers = [];
  var _description_extraInitializers = [];
  var _images_decorators;
  var _images_initializers = [];
  var _images_extraInitializers = [];
  var _pricePerNightInEURCent_decorators;
  var _pricePerNightInEURCent_initializers = [];
  var _pricePerNightInEURCent_extraInitializers = [];
  var _rating_decorators;
  var _rating_initializers = [];
  var _rating_extraInitializers = [];
  var _capacity_decorators;
  var _capacity_initializers = [];
  var _capacity_extraInitializers = [];
  var _amountsOfBeds_decorators;
  var _amountsOfBeds_initializers = [];
  var _amountsOfBeds_extraInitializers = [];
  var _extraSleepingDetails_decorators;
  var _extraSleepingDetails_initializers = [];
  var _extraSleepingDetails_extraInitializers = [];
  var _checkInHour_decorators;
  var _checkInHour_initializers = [];
  var _checkInHour_extraInitializers = [];
  var _checkOutHour_decorators;
  var _checkOutHour_initializers = [];
  var _checkOutHour_extraInitializers = [];
  var _distanceFromCityCenterInMeters_decorators;
  var _distanceFromCityCenterInMeters_initializers = [];
  var _distanceFromCityCenterInMeters_extraInitializers = [];
  var _facebookUrl_decorators;
  var _facebookUrl_initializers = [];
  var _facebookUrl_extraInitializers = [];
  var _instagramUrl_decorators;
  var _instagramUrl_initializers = [];
  var _instagramUrl_extraInitializers = [];
  var _twitterUrl_decorators;
  var _twitterUrl_initializers = [];
  var _twitterUrl_extraInitializers = [];
  var _websiteUrl_decorators;
  var _websiteUrl_initializers = [];
  var _websiteUrl_extraInitializers = [];
  var _streetNumber_decorators;
  var _streetNumber_initializers = [];
  var _streetNumber_extraInitializers = [];
  var _streetName_decorators;
  var _streetName_initializers = [];
  var _streetName_extraInitializers = [];
  var _postalCode_decorators;
  var _postalCode_initializers = [];
  var _postalCode_extraInitializers = [];
  var _city_decorators;
  var _city_initializers = [];
  var _city_extraInitializers = [];
  var _amenitiesIds_decorators;
  var _amenitiesIds_initializers = [];
  var _amenitiesIds_extraInitializers = [];
  var _venueTypeId_decorators;
  var _venueTypeId_initializers = [];
  var _venueTypeId_extraInitializers = [];
  return (
    (_a = /** @class */ (function () {
      function CreateVenueDto() {
        this.name = __runInitializers(this, _name_initializers, void 0);
        this.description =
          (__runInitializers(this, _name_extraInitializers),
          __runInitializers(this, _description_initializers, void 0));
        this.images =
          (__runInitializers(this, _description_extraInitializers),
          __runInitializers(this, _images_initializers, void 0));
        this.pricePerNightInEURCent =
          (__runInitializers(this, _images_extraInitializers),
          __runInitializers(
            this,
            _pricePerNightInEURCent_initializers,
            void 0,
          ));
        this.rating =
          (__runInitializers(this, _pricePerNightInEURCent_extraInitializers),
          __runInitializers(this, _rating_initializers, void 0));
        this.capacity =
          (__runInitializers(this, _rating_extraInitializers),
          __runInitializers(this, _capacity_initializers, void 0));
        this.amountsOfBeds =
          (__runInitializers(this, _capacity_extraInitializers),
          __runInitializers(this, _amountsOfBeds_initializers, void 0));
        this.extraSleepingDetails =
          (__runInitializers(this, _amountsOfBeds_extraInitializers),
          __runInitializers(this, _extraSleepingDetails_initializers, void 0));
        this.checkInHour =
          (__runInitializers(this, _extraSleepingDetails_extraInitializers),
          __runInitializers(this, _checkInHour_initializers, void 0));
        this.checkOutHour =
          (__runInitializers(this, _checkInHour_extraInitializers),
          __runInitializers(this, _checkOutHour_initializers, void 0));
        this.distanceFromCityCenterInMeters =
          (__runInitializers(this, _checkOutHour_extraInitializers),
          __runInitializers(
            this,
            _distanceFromCityCenterInMeters_initializers,
            void 0,
          ));
        this.facebookUrl =
          (__runInitializers(
            this,
            _distanceFromCityCenterInMeters_extraInitializers,
          ),
          __runInitializers(this, _facebookUrl_initializers, void 0));
        this.instagramUrl =
          (__runInitializers(this, _facebookUrl_extraInitializers),
          __runInitializers(this, _instagramUrl_initializers, void 0));
        this.twitterUrl =
          (__runInitializers(this, _instagramUrl_extraInitializers),
          __runInitializers(this, _twitterUrl_initializers, void 0));
        this.websiteUrl =
          (__runInitializers(this, _twitterUrl_extraInitializers),
          __runInitializers(this, _websiteUrl_initializers, void 0));
        this.streetNumber =
          (__runInitializers(this, _websiteUrl_extraInitializers),
          __runInitializers(this, _streetNumber_initializers, void 0));
        this.streetName =
          (__runInitializers(this, _streetNumber_extraInitializers),
          __runInitializers(this, _streetName_initializers, void 0));
        this.postalCode =
          (__runInitializers(this, _streetName_extraInitializers),
          __runInitializers(this, _postalCode_initializers, void 0));
        this.city =
          (__runInitializers(this, _postalCode_extraInitializers),
          __runInitializers(this, _city_initializers, void 0));
        this.amenitiesIds =
          (__runInitializers(this, _city_extraInitializers),
          __runInitializers(this, _amenitiesIds_initializers, void 0));
        this.venueTypeId =
          (__runInitializers(this, _amenitiesIds_extraInitializers),
          __runInitializers(this, _venueTypeId_initializers, void 0));
        __runInitializers(this, _venueTypeId_extraInitializers);
      }
      return CreateVenueDto;
    })()),
    (function () {
      var _metadata =
        typeof Symbol === 'function' && Symbol.metadata
          ? Object.create(null)
          : void 0;
      _name_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Name of the venue',
          example: 'Seaside Villa',
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _description_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Description of the venue',
          example: 'A beautiful villa near the beach with a private pool.',
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _images_decorators = [
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
      ];
      _pricePerNightInEURCent_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Price per night in EUR cents',
          example: 12000,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _rating_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Average rating of the venue',
          example: 4.8,
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _capacity_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Maximum guest capacity',
          example: 6,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _amountsOfBeds_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Number of beds',
          example: 3,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _extraSleepingDetails_decorators = [
        (0, swagger_1.ApiProperty)({
          description:
            'Details about additional sleeping arrangements (max 80 characters)',
          example: 'Sofa bed available for 1 adult.',
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.MaxLength)(80, {
          message: 'Extra sleeping details must be at most 80 characters long',
        }),
      ];
      _checkInHour_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Check-in hour in 24h format',
          example: 15,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _checkOutHour_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Check-out hour in 24h format',
          example: 11,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _distanceFromCityCenterInMeters_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Distance from city center in meters',
          example: 1500,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _facebookUrl_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Facebook page URL',
          example: 'https://facebook.com/seasidevilla',
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
      ];
      _instagramUrl_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Instagram profile URL',
          example: 'https://instagram.com/seasidevilla',
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
      ];
      _twitterUrl_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Twitter profile URL',
          example: 'https://twitter.com/seasidevilla',
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
      ];
      _websiteUrl_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'Official website URL',
          example: 'https://seasidevilla.com',
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
      ];
      _streetNumber_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Street number of the venue',
          example: '1',
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _streetName_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Street name of the venue',
          example: 'Praça do Comércio',
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _postalCode_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'Postal code of the venue location',
          example: '1100-148',
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _city_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'City where the venue is located',
          example: 'Lisboa',
        }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
      ];
      _amenitiesIds_decorators = [
        (0, swagger_1.ApiPropertyOptional)({
          description: 'IDs of associated amenities',
          example: [1, 3, 7],
        }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsInt)({ each: true }),
      ];
      _venueTypeId_decorators = [
        (0, swagger_1.ApiProperty)({
          description: 'ID of the venue type',
          example: 1,
        }),
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
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
        _description_decorators,
        {
          kind: 'field',
          name: 'description',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'description' in obj;
            },
            get: function (obj) {
              return obj.description;
            },
            set: function (obj, value) {
              obj.description = value;
            },
          },
          metadata: _metadata,
        },
        _description_initializers,
        _description_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _images_decorators,
        {
          kind: 'field',
          name: 'images',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'images' in obj;
            },
            get: function (obj) {
              return obj.images;
            },
            set: function (obj, value) {
              obj.images = value;
            },
          },
          metadata: _metadata,
        },
        _images_initializers,
        _images_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _pricePerNightInEURCent_decorators,
        {
          kind: 'field',
          name: 'pricePerNightInEURCent',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'pricePerNightInEURCent' in obj;
            },
            get: function (obj) {
              return obj.pricePerNightInEURCent;
            },
            set: function (obj, value) {
              obj.pricePerNightInEURCent = value;
            },
          },
          metadata: _metadata,
        },
        _pricePerNightInEURCent_initializers,
        _pricePerNightInEURCent_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _rating_decorators,
        {
          kind: 'field',
          name: 'rating',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'rating' in obj;
            },
            get: function (obj) {
              return obj.rating;
            },
            set: function (obj, value) {
              obj.rating = value;
            },
          },
          metadata: _metadata,
        },
        _rating_initializers,
        _rating_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _capacity_decorators,
        {
          kind: 'field',
          name: 'capacity',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'capacity' in obj;
            },
            get: function (obj) {
              return obj.capacity;
            },
            set: function (obj, value) {
              obj.capacity = value;
            },
          },
          metadata: _metadata,
        },
        _capacity_initializers,
        _capacity_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _amountsOfBeds_decorators,
        {
          kind: 'field',
          name: 'amountsOfBeds',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'amountsOfBeds' in obj;
            },
            get: function (obj) {
              return obj.amountsOfBeds;
            },
            set: function (obj, value) {
              obj.amountsOfBeds = value;
            },
          },
          metadata: _metadata,
        },
        _amountsOfBeds_initializers,
        _amountsOfBeds_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _extraSleepingDetails_decorators,
        {
          kind: 'field',
          name: 'extraSleepingDetails',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'extraSleepingDetails' in obj;
            },
            get: function (obj) {
              return obj.extraSleepingDetails;
            },
            set: function (obj, value) {
              obj.extraSleepingDetails = value;
            },
          },
          metadata: _metadata,
        },
        _extraSleepingDetails_initializers,
        _extraSleepingDetails_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _checkInHour_decorators,
        {
          kind: 'field',
          name: 'checkInHour',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'checkInHour' in obj;
            },
            get: function (obj) {
              return obj.checkInHour;
            },
            set: function (obj, value) {
              obj.checkInHour = value;
            },
          },
          metadata: _metadata,
        },
        _checkInHour_initializers,
        _checkInHour_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _checkOutHour_decorators,
        {
          kind: 'field',
          name: 'checkOutHour',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'checkOutHour' in obj;
            },
            get: function (obj) {
              return obj.checkOutHour;
            },
            set: function (obj, value) {
              obj.checkOutHour = value;
            },
          },
          metadata: _metadata,
        },
        _checkOutHour_initializers,
        _checkOutHour_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _distanceFromCityCenterInMeters_decorators,
        {
          kind: 'field',
          name: 'distanceFromCityCenterInMeters',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'distanceFromCityCenterInMeters' in obj;
            },
            get: function (obj) {
              return obj.distanceFromCityCenterInMeters;
            },
            set: function (obj, value) {
              obj.distanceFromCityCenterInMeters = value;
            },
          },
          metadata: _metadata,
        },
        _distanceFromCityCenterInMeters_initializers,
        _distanceFromCityCenterInMeters_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _facebookUrl_decorators,
        {
          kind: 'field',
          name: 'facebookUrl',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'facebookUrl' in obj;
            },
            get: function (obj) {
              return obj.facebookUrl;
            },
            set: function (obj, value) {
              obj.facebookUrl = value;
            },
          },
          metadata: _metadata,
        },
        _facebookUrl_initializers,
        _facebookUrl_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _instagramUrl_decorators,
        {
          kind: 'field',
          name: 'instagramUrl',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'instagramUrl' in obj;
            },
            get: function (obj) {
              return obj.instagramUrl;
            },
            set: function (obj, value) {
              obj.instagramUrl = value;
            },
          },
          metadata: _metadata,
        },
        _instagramUrl_initializers,
        _instagramUrl_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _twitterUrl_decorators,
        {
          kind: 'field',
          name: 'twitterUrl',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'twitterUrl' in obj;
            },
            get: function (obj) {
              return obj.twitterUrl;
            },
            set: function (obj, value) {
              obj.twitterUrl = value;
            },
          },
          metadata: _metadata,
        },
        _twitterUrl_initializers,
        _twitterUrl_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _websiteUrl_decorators,
        {
          kind: 'field',
          name: 'websiteUrl',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'websiteUrl' in obj;
            },
            get: function (obj) {
              return obj.websiteUrl;
            },
            set: function (obj, value) {
              obj.websiteUrl = value;
            },
          },
          metadata: _metadata,
        },
        _websiteUrl_initializers,
        _websiteUrl_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _streetNumber_decorators,
        {
          kind: 'field',
          name: 'streetNumber',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'streetNumber' in obj;
            },
            get: function (obj) {
              return obj.streetNumber;
            },
            set: function (obj, value) {
              obj.streetNumber = value;
            },
          },
          metadata: _metadata,
        },
        _streetNumber_initializers,
        _streetNumber_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _streetName_decorators,
        {
          kind: 'field',
          name: 'streetName',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'streetName' in obj;
            },
            get: function (obj) {
              return obj.streetName;
            },
            set: function (obj, value) {
              obj.streetName = value;
            },
          },
          metadata: _metadata,
        },
        _streetName_initializers,
        _streetName_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _postalCode_decorators,
        {
          kind: 'field',
          name: 'postalCode',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'postalCode' in obj;
            },
            get: function (obj) {
              return obj.postalCode;
            },
            set: function (obj, value) {
              obj.postalCode = value;
            },
          },
          metadata: _metadata,
        },
        _postalCode_initializers,
        _postalCode_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _city_decorators,
        {
          kind: 'field',
          name: 'city',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'city' in obj;
            },
            get: function (obj) {
              return obj.city;
            },
            set: function (obj, value) {
              obj.city = value;
            },
          },
          metadata: _metadata,
        },
        _city_initializers,
        _city_extraInitializers,
      );
      __esDecorate(
        null,
        null,
        _amenitiesIds_decorators,
        {
          kind: 'field',
          name: 'amenitiesIds',
          static: false,
          private: false,
          access: {
            has: function (obj) {
              return 'amenitiesIds' in obj;
            },
            get: function (obj) {
              return obj.amenitiesIds;
            },
            set: function (obj, value) {
              obj.amenitiesIds = value;
            },
          },
          metadata: _metadata,
        },
        _amenitiesIds_initializers,
        _amenitiesIds_extraInitializers,
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
exports.CreateVenueDto = CreateVenueDto;
