import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LampDataSource} from '../datasources';
import {Reservacion, ReservacionRelations} from '../models';

export class ReservacionRepository extends DefaultCrudRepository<
  Reservacion,
  typeof Reservacion.prototype.idReservacion,
  ReservacionRelations
> {
  constructor(
    @inject('datasources.lamp') dataSource: LampDataSource,
  ) {
    super(Reservacion, dataSource);
  }
}
