'use strict';

const { Controller } = require('egg');
const {userList} = require('../../data/userList')
class HelloController extends Controller {
  // 同步数据demo
  async syncInfo() {
    const ctx = this.ctx;
    for (const userInfo of userList) {
      await this.ctx.model.User.create(userInfo);
    }
    ctx.body = 'hello';
  }
}

module.exports = HelloController;
