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
  ninera_idNinera: number;

  @property({
    type: 'number',
    required: true,
  })
  ninera_persona_idPersona: number;

  @property({
    type: 'number',
    required: true,
  })
  ninera_persona_usuario_idUser: number;

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


  constructor(data?: Partial<Mensaje>) {
    super(data);
  }
}

export interface MensajeRelations {
  // describe navigational properties here
}

export type MensajeWithRelations = Mensaje & MensajeRelations;
