export const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string, 10),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  logging: false,
};
