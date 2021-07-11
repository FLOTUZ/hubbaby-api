import {Entity, model, property} from '@loopback/repository';

@model()
export class Mensaje extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idMensaje?: number;

  @property({
    type: 'string',
    required: true,
  })
  cuerpo: string;

  @property({
    type: 'string',
    required: true,
  })
  horaEnvio: string;

  @property({
    type: 'number',
    required: true,
  })
  idNinera: number;

  @property({
    type: 'number',
    required: true,
  })
  idPadre: number;

  constructor(data?: Partial<Mensaje>) {
    super(data);
  }
}

export interface MensajeRelations {
  // describe navigational properties here
}

export type MensajeWithRelations = Mensaje & MensajeRelations;
