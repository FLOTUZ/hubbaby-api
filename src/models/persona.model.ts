import {Entity, model, property} from '@loopback/repository';

@model()
export class Persona extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPersona?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  a_paterno: string;

  @property({
    type: 'string',
    required: true,
  })
  a_materno: string;

  @property({
    type: 'string',
    required: true,
  })
  curp: string;

  @property({
    type: 'date',
  })
  cumpleanos?: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @property({
    type: 'string',
  })
  ine_frontal?: string;

  @property({
    type: 'string',
  })
  ine_trasera?: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'number',
    required: true,
  })
  idUser: number;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
