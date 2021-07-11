import {Entity, model, property} from '@loopback/repository';

@model()
export class Notificacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idNotificacion?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
  })
  tipo?: number;

  @property({
    type: 'date',
  })
  fecha?: string;

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


  constructor(data?: Partial<Notificacion>) {
    super(data);
  }
}

export interface NotificacionRelations {
  // describe navigational properties here
}

export type NotificacionWithRelations = Notificacion & NotificacionRelations;
