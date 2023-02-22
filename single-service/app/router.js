'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 客户端相关
  router.get('home', '/home/getUserCardlist', controller.home.getUserCardlist);

  router.resources('home', '/home', controller.home);
  router.resources('users', '/users', controller.user);
  router.resources('activity', '/activity', controller.activity);
};
