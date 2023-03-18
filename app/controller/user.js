// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  // //  客户端相关
  // // 旧接口 判断用户是否存在
  // async isExsit() {
  //   // 获取openid
  //   const {openid = ''} = this.ctx.headers;
  //   ctx.body =await ctx.service.user.getUser({openid});
  // }
  // // 旧接口 增加用户
  // async addNewUser() {
  //   const {openid = ''} = this.ctx.headers;
  //   const {body = {}} = this.ctx; 
  //   ctx.body =await ctx.service.user.addUser({openid, ...body});
  // }
  // // 旧接口 发布到班级
  // async publicToClass() {
  //   const {openid = ''} = this.ctx.headers;
  // }

  // 用户管理相关
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
      cls: ctx.query.cls,
    };
    // ctx.body = ctx.models;
    ctx.body = await ctx.service.user.getUserInfoByGroup(query);
  }
  // 模糊查询单个用户
  async fuzzySearch() {
    const ctx = this.ctx;
    console.log('ctx.query.nickName:' + ctx.query.nickName);
    ctx.body = await ctx.service.user.getUserInfoByNickname(ctx.query.nickName);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const user = await ctx.service.User.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { score, desc, is_show } = ctx.request.body;
    await user.update({ score, desc, is_show });
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

module.exports = UserController;
