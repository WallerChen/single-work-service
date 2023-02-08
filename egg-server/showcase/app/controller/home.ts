import { Controller } from 'egg';

/**
* @controller Home
*/
export default class HomeController extends Controller {
  /**
  * @summary 首页入口
  * @description 首页第一次请求接口
  * @router get /
  * @request ?id= integer id 请求id
  * @response 200 indexJsonBody
  */
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}