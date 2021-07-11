import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Recomendacion} from '../models';
import {RecomendacionRepository} from '../repositories';

export class RecomendacionController {
  constructor(
    @repository(RecomendacionRepository)
    public recomendacionRepository : RecomendacionRepository,
  ) {}

  @post('/recomendaciones')
  @response(200, {
    description: 'Recomendacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Recomendacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recomendacion, {
            title: 'NewRecomendacion',
            exclude: ['idRecomendacion'],
          }),
        },
      },
    })
    recomendacion: Omit<Recomendacion, 'idRecomendacion'>,
  ): Promise<Recomendacion> {
    return this.recomendacionRepository.create(recomendacion);
  }

  @get('/recomendaciones/count')
  @response(200, {
    description: 'Recomendacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Recomendacion) where?: Where<Recomendacion>,
  ): Promise<Count> {
    return this.recomendacionRepository.count(where);
  }

  @get('/recomendaciones')
  @response(200, {
    description: 'Array of Recomendacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Recomendacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Recomendacion) filter?: Filter<Recomendacion>,
  ): Promise<Recomendacion[]> {
    return this.recomendacionRepository.find(filter);
  }

  @patch('/recomendaciones')
  @response(200, {
    description: 'Recomendacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recomendacion, {partial: true}),
        },
      },
    })
    recomendacion: Recomendacion,
    @param.where(Recomendacion) where?: Where<Recomendacion>,
  ): Promise<Count> {
    return this.recomendacionRepository.updateAll(recomendacion, where);
  }

  @get('/recomendaciones/{id}')
  @response(200, {
    description: 'Recomendacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Recomendacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Recomendacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Recomendacion>
  ): Promise<Recomendacion> {
    return this.recomendacionRepository.findById(id, filter);
  }

  @patch('/recomendaciones/{id}')
  @response(204, {
    description: 'Recomendacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recomendacion, {partial: true}),
        },
      },
    })
    recomendacion: Recomendacion,
  ): Promise<void> {
    await this.recomendacionRepository.updateById(id, recomendacion);
  }

  @put('/recomendaciones/{id}')
  @response(204, {
    description: 'Recomendacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() recomendacion: Recomendacion,
  ): Promise<void> {
    await this.recomendacionRepository.replaceById(id, recomendacion);
  }

  @del('/recomendaciones/{id}')
  @response(204, {
    description: 'Recomendacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.recomendacionRepository.deleteById(id);
  }
}
