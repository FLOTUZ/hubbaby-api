import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LampDataSource} from '../datasources';
import {Padre, PadreRelations} from '../models';

export class PadreRepository extends DefaultCrudRepository<
  Padre,
  typeof Padre.prototype.idPadre,
  PadreRelations
> {
  constructor(
    @inject('datasources.lamp') dataSource: LampDataSource,
  ) {
    super(Padre, dataSource);
  }
}
