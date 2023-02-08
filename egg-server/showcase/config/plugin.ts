import { EggPlugin } from 'egg';
const plugin: EggPlugin = {
   swaggerdoc: {
    enable: true, // 是否启用
    package: 'egg-swagger-doc' // 指定包名称
   },
   sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
};

export default plugin;
