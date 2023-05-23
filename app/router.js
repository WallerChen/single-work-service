'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 服务是否正常查询
  router.get('cron', '/syncInfo', controller.cron.syncInfo);

  // 客户端相关
  router.get('home', '/home/getUserCardlist', controller.home.getUserCardlist);
  router.resources('user', '/user', controller.user);
  router.post('miniapp', '/miniapp/update', controller.miniapp.update);
  router.post('miniapp', '/miniapp/userinfo', controller.miniapp.index);

  // 旧版接口判断用户是否存在
  // router.resources('user', '/user/exsit', controller.user.isEsit);


  // 运营相关
  router.resources('admin/users', '/admin/users/resultful', controller.user);
  router.get('admin/users', '/admin/users/fuzzySearch', controller.user.fuzzySearch);
  router.get('admin/users', '/admin/users/index', controller.user.index);


  router.resources('activity', '/activity', controller.activity);
};
