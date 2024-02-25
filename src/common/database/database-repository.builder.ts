import { Global, Injectable } from '@nestjs/common';
import { MyModel, MyModelStatic } from './database.static-model';
import { IRepository } from './repository.interface';
import { WhereOptions, Includeable, or } from 'sequelize';

export function buildRepository(Model: MyModelStatic): any {
  @Global()
  @Injectable()
  class DatabaseRepositoryBuilder implements IRepository<MyModel> {
    async findAll(
      where: WhereOptions = {},
      include: Includeable[] = [],
      attributes?: string[],
      sort = '-createdAt',
    ): Promise<MyModel[]> {
      if (!sort) {
        sort = '-createdAt';
      }
      let order = null;

      if (typeof sort === 'object') {
        order = sort;
      } else {
        order = [
          [sort.replace('-', ''), sort.startsWith('-') ? 'DESC' : 'ASC'],
        ];
      }
      return await Model.findAll({
        where,
        include,
        ...(attributes && { attributes }),
        ...(order && { order }),
      });
    }

    async findOne(
      where: WhereOptions,
      include?: Includeable[],
      attributes?: string[],
    ): Promise<MyModel> {
      return await Model.findOne({
        where,
        include,
        ...(attributes && { attributes }),
      });
    }
  }
  return DatabaseRepositoryBuilder;
}
