const { Sequelize, DataTypes } = require("sequelize");

// 从环境变量中读取数据库配置
const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_ADDRESS = "" } = process.env;

const [host, port] = MYSQL_ADDRESS.split(":");

const sequelize = new Sequelize("nodejs_demo", 'root', 'qwer@123123', {
  host: 'sh-cynosdbmysql-grp-mt21sa7w.sql.tencentcdb.com',
  port: 25858,
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

// 定义数据模型
const Counter = sequelize.define("Counter", {
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

// 数据库初始化方法
async function init() {
  await Counter.sync({ alter: true });
}

// 导出初始化方法和模型
module.exports = {
  init,
  Counter,
};
