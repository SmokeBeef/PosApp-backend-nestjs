import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { mysqlEntities } from './mysql.entities';

export const mysqlOption = (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: mysqlEntities,
  synchronize: true,
  logging: true,
});
