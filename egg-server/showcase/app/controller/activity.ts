import { Controller } from 'egg';

/**
* @controller Activity
*/
export default class ActivityController extends Controller {
  /**
  * @summary 活动入口
  * @description 活动列表页
  * @router get /
  * @request ?id= integer id 请求id
  * @response 200 indexJsonBody
  */
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}