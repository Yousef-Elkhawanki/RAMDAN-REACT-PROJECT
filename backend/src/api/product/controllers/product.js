"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query("api::product.product").findOne({
      where: { slug: id },
      populate: ["image"],
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx); // Call sanitizeOutput directly

    return this.transformResponse(sanitizedEntity); // Call transformResponse directly
  },
}));
