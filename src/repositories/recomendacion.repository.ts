import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LampDataSource} from '../datasources';
import {Recomendacion, RecomendacionRelations} from '../models';

export class RecomendacionRepository extends DefaultCrudRepository<
  Recomendacion,
  typeof Recomendacion.prototype.idRecomendacion,
  RecomendacionRelations
> {
  constructor(
    @inject('datasources.lamp') dataSource: LampDataSource,
  ) {
    super(Recomendacion, dataSource);
  }
}
