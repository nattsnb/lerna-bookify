'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const core_1 = require('@nestjs/core');
const app_module_1 = require('./app.module');
const config_1 = require('@nestjs/config');
const common_1 = require('@nestjs/common');
const swagger_1 = require('@nestjs/swagger');
const cookie_parser_1 = __importDefault(require('cookie-parser'));
async function bootstrap() {
  const app = await core_1.NestFactory.create(app_module_1.AppModule);
  const configService = app.get(config_1.ConfigService);
  app.use((0, cookie_parser_1.default)());
  app.useGlobalPipes(
    new common_1.ValidationPipe({
      transform: true,
      whitelist: true,
      forbidUnknownValues: false,
    }),
  );
  app.enableCors({
    origin: configService.get('FRONTEND_URL'),
    credentials: true,
  });
  const swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle('Bookify API')
    .setDescription('API for venue booking system')
    .setVersion('1.0')
    .build();
  const documentFactory = () =>
    swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
  swagger_1.SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
