import {Entity, model, property} from '@loopback/repository';

@model()
export class MetodoPago extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idMetodoPago?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'object',
  })
  data?: object;

  @property({
    type: 'number',
    required: true,
  })
  padre_idPadre: number;

  @property({
    type: 'number',
    required: true,
  })
  padre_persona_idPersona: number;

  @property({
    type: 'number',
    required: true,
  })
  padre_persona_usuario_idUser: number;


  constructor(data?: Partial<MetodoPago>) {
    super(data);
  }
}

export interface MetodoPagoRelations {
  // describe navigational properties here
}

export type MetodoPagoWithRelations = MetodoPago & MetodoPagoRelations;
