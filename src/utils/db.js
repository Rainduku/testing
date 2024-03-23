const { sequelize } = require('../config');
const { TodoModel } = require('../models');
const { todoSeeders } = require('../seeders');
const logger = require('./logger');

function syncTables() {
  return Promise.all([TodoModel.sync()]);
}

function seedData() {
  return Promise.all([todoSeeders()]);
}

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Connection to the database has been established successfully.');

    await syncTables();

    await seedData();

    logger.info('Database synchronized successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};

syncDatabase();
