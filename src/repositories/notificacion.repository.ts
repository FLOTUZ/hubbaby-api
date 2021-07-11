import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LampDataSource} from '../datasources';
import {Notificacion, NotificacionRelations} from '../models';

export class NotificacionRepository extends DefaultCrudRepository<
  Notificacion,
  typeof Notificacion.prototype.idNotificacion,
  NotificacionRelations
> {
  constructor(
    @inject('datasources.lamp') dataSource: LampDataSource,
  ) {
    super(Notificacion, dataSource);
  }
}
