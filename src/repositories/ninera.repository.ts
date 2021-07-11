import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LampDataSource} from '../datasources';
import {Ninera, NineraRelations} from '../models';

export class NineraRepository extends DefaultCrudRepository<
  Ninera,
  typeof Ninera.prototype.idNinera,
  NineraRelations
> {
  constructor(
    @inject('datasources.lamp') dataSource: LampDataSource,
  ) {
    super(Ninera, dataSource);
  }
}
