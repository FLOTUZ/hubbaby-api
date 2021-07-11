import {Entity, model, property} from '@loopback/repository';

@model()
export class Padre extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPadre?: number;

  @property({
    type: 'string',
    required: true,
  })
  parentesco: string;

  @property({
    type: 'number',
    required: true,
  })
  persona_idPersona: number;

  @property({
    type: 'number',
    required: true,
  })
  persona_usuario_idUser: number;


  constructor(data?: Partial<Padre>) {
    super(data);
  }
}

export interface PadreRelations {
  // describe navigational properties here
}

export type PadreWithRelations = Padre & PadreRelations;
