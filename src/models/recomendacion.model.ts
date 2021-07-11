import {Entity, model, property} from '@loopback/repository';

@model()
export class Recomendacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idRecomendacion?: number;

  @property({
    type: 'string',
    required: true,
  })
  comentario: string;

  @property({
    type: 'number',
    required: true,
  })
  calificacion: number;

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

  constructor(data?: Partial<Recomendacion>) {
    super(data);
  }
}

export interface RecomendacionRelations {
  // describe navigational properties here
}

export type RecomendacionWithRelations = Recomendacion & RecomendacionRelations;
