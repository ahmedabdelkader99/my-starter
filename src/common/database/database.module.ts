import { Global, Module } from '@nestjs/common';
import { repositories } from './database.models';
import { databaseProvider } from './database.providers';

@Global()
@Module({
  providers: [...repositories, databaseProvider],
  exports: [...repositories, databaseProvider],
})
export class DatabaseModule {}
