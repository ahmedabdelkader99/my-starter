import { promises } from 'dns';
import { Includeable, WhereOptions } from 'sequelize';

export interface IRepository<T> {
  findOne(
    where: WhereOptions,
    include?: Includeable[],
    attributes?: string[],
  ): Promise<T>;

  findAll(
    where: WhereOptions,
    include?: Includeable[],
    attributes?: string[],
    sort?: any,
  ): Promise<T[]>;
}
