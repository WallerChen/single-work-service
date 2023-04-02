'use strict';

const { Controller } = require('egg');
const {userList} = require('../../data/userList')
class HelloController extends Controller {
  // 同步数据demo
  async syncInfo() {
    const ctx = this.ctx;
    for (const userInfo of userList) {
      // 判断是否存在过信息
      let user = await this.ctx.model.User.findOne({ where: { openid: userInfo.openid } });
      // console.log('user:' + JSON.stringify(user();
      // 存在则更新用户
      if(user) {
        await user.update({desc: user.desc});
      } else {
        await this.ctx.model.User.create(userInfo);
      }

     
    }
    ctx.body = 'hello';
  }
}

module.exports = HelloController;
