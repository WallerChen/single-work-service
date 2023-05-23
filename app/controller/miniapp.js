// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class MiniController extends Controller {
  async index() {
    const ctx = this.ctx;
    const openid = ctx.header['x-wx-openid'];
    // const query = {
    //   limit: toInt(ctx.query.limit),
    //   offset: toInt(ctx.query.offset),
    //   cls: ctx.query.cls,
    // };
    // // ctx.body = ctx.models;
    // ctx.body = await ctx.service.user.getUserInfoByGroup(query);
    ctx.body = await ctx.model.User.findOne({
      where:{ 
          openid :openid
      }
  });
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const user = await ctx.service.User.create({ ...body });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const {body} = ctx.request;
    console.log(body.desc);
    console.log(body.image_list);
    const user = await ctx.model.User.findOne({
            where:{ 
                openid :ctx.request.body.openid
            }
        });
    if (!user) {
      ctx.status = 404;
      return;
    }
    console.log('useruser:' + JSON.stringify(user));
    let xxx = await user.update({image_list: body.image_list + '', desc: body.desc });
    // console.log('xxx:' + JSON.stringify(xxx));
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = MiniController;
