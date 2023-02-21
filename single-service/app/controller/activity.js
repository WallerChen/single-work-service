// app/controller/activity.js
const { Controller } = require('egg');

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class ActivityController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Activity.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Activity.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const activity = await ctx.model.Activity.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = activity;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const activity = await ctx.model.Activity.findByPk(id);
    if (!activity) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await activity.update({ name, age });
    ctx.body = activity;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.Activity.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = ActivityController;
