import {Entity, model, property} from '@loopback/repository';

@model()
export class Reservacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idReservacion?: number;

  @property({
    type: 'number',
    required: true,
  })
  n_hijos: number;

  @property({
    type: 'geopoint',
    required: true,
  })
  ubicacion: string;

  @property({
    type: 'date',
    required: true,
  })
  llegada_fecha: string;

  @property({
    type: 'date',
    required: true,
  })
  salida_fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  llegada_hora: string;

  @property({
    type: 'date',
    required: true,
  })
  salida_hora: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
  })
  descuento: number;

  @property({
    type: 'number',
    required: true,
  })
  comisionXservicio: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

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


  constructor(data?: Partial<Reservacion>) {
    super(data);
  }
}

export interface ReservacionRelations {
  // describe navigational properties here
}

export type ReservacionWithRelations = Reservacion & ReservacionRelations;
