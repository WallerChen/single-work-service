import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1675394296747_2638';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  // const bizConfig = {
  //   sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  // };
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    swaggerEgg: {
      schema: {
        path: '/app/schema', // JSON Schema directory
      },
      swagger: {
        info: {
          title: '单身同学录Swagger',
          description: 'Testing the Fastify swagger API',
          version: '0.1.0'
        },
        externalDocs: {
          url: 'https://swagger.io',
          description: 'Find more info here'
        },
        host: '127.0.0.1:7001', // should be egg server's host, otherwise result in cross origin error
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
          { name: 'home', description: 'Home related end-points' }
        ],
        securityDefinitions: {
          api_key: {
            type: 'apiKey', // basic/apiKey/oauth2
            name: 'Authorization', // selfdefined parameter, usually use 'Authorization'
            in: 'header', // query or header, usually use 'header'
          },
          github_auth: {
            type: 'oauth2',
            authorizationUrl: 'http://swagger.io/api/oauth/dialog',
            flow: 'implicit',
            scopes: {
              'write:homes': 'modify home info',
              'read:homes': 'read home info',
            },
          },
        },
        security: [
          {
            api_key: [], // select 'api_key' to security(defined in `securityDefinitions`)
          },
        ], // Cacution: security is array type
      },
    },
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'school_yearbook',
      host: 'sh-cynosdbmysql-grp-mt21sa7w.sql.tencentcdb.com',
      port: 25858,
      username: 'root',
      password: 'qwer@123123',
      // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
      // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
      // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
      // more sequelize options
    }
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
