import {Entity, model, property} from '@loopback/repository';

@model()
export class Ninera extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idNinera?: number;

  @property({
    type: 'object',
    required: true,
  })
  area_servicio: object;

  @property({
    type: 'string',
    required: true,
  })
  facebook: string;

  @property({
    type: 'string',
  })
  sobre_mi?: string;

  @property({
    type: 'object',
  })
  habilidades_relevantes?: object;

  @property({
    type: 'object',
    required: true,
  })
  idiomas: object;

  @property({
    type: 'date',
  })
  vista_ultima_vez?: string;

  @property({
    type: 'number',
    required: true,
  })
  idPersona: number;

  @property({
    type: 'number',
    required: true,
  })
  idUser: number;

  constructor(data?: Partial<Ninera>) {
    super(data);
  }
}

export interface NineraRelations {
  // describe navigational properties here
}

export type NineraWithRelations = Ninera & NineraRelations;
