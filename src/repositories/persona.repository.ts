import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LampDataSource} from '../datasources';
import {Persona, PersonaRelations} from '../models';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.idPersona,
  PersonaRelations
> {
  constructor(
    @inject('datasources.lamp') dataSource: LampDataSource,
  ) {
    super(Persona, dataSource);
  }
}
