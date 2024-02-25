/* eslint-disable prettier/prettier */
import { User } from 'src/user/models/user.model';
import { plural } from 'pluralize';
import { buildRepository } from './database-repository.builder';

export const models = [User];

export const repositories = models.map((m) => ({
  provide: `${plural(m.name)}Repository`,
  useClass: buildRepository(m),
}));
