const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

const Contact = require('./contact')(sequelize);

sequelize.sync();

module.exports = {
  sequelize,
  Contact,
};
