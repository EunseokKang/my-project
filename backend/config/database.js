const { Sequelize } = require('sequelize');

module.exports = new Sequelize('Seed', 'root', '3876001qC@', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // 로깅 비활성화
});
