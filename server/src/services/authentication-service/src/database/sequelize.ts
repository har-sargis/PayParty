// @ts-nocheck
import { Sequelize } from 'sequelize-typescript';
import path from 'path';

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    models: [path.join(__dirname, '../models')],
  },
);
