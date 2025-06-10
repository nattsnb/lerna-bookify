'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var config_1 = require('prisma/config');
var dotenv_1 = require('dotenv');
(0, dotenv_1.config)();
exports.default = (0, config_1.defineConfig)({
  schema: './prisma/schema',
  earlyAccess: true,
});
