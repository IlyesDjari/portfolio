'use strict';

/**
 * ios-dev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ios-dev.ios-dev');
