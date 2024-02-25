import { ConfigService } from '@nestjs/config';
import { models } from './database.models';

export const config = (configService: ConfigService) => {
  return {
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASS'),
    database:
      configService.get('NODE_ENV') === 'test'
        ? configService.get('TEST_DB_NAME')
        : configService.get('DB_NAME'),
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    dialect: 'postgres',
    models,
  };
};
