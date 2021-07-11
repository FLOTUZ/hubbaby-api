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
import {Padre} from '../models';
import {PadreRepository} from '../repositories';

export class PadreController {
  constructor(
    @repository(PadreRepository)
    public padreRepository : PadreRepository,
  ) {}

  @post('/padres')
  @response(200, {
    description: 'Padre model instance',
    content: {'application/json': {schema: getModelSchemaRef(Padre)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Padre, {
            title: 'NewPadre',
            exclude: ['idPadre'],
          }),
        },
      },
    })
    padre: Omit<Padre, 'idPadre'>,
  ): Promise<Padre> {
    return this.padreRepository.create(padre);
  }

  @get('/padres/count')
  @response(200, {
    description: 'Padre model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Padre) where?: Where<Padre>,
  ): Promise<Count> {
    return this.padreRepository.count(where);
  }

  @get('/padres')
  @response(200, {
    description: 'Array of Padre model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Padre, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Padre) filter?: Filter<Padre>,
  ): Promise<Padre[]> {
    return this.padreRepository.find(filter);
  }

  @patch('/padres')
  @response(200, {
    description: 'Padre PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Padre, {partial: true}),
        },
      },
    })
    padre: Padre,
    @param.where(Padre) where?: Where<Padre>,
  ): Promise<Count> {
    return this.padreRepository.updateAll(padre, where);
  }

  @get('/padres/{id}')
  @response(200, {
    description: 'Padre model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Padre, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Padre, {exclude: 'where'}) filter?: FilterExcludingWhere<Padre>
  ): Promise<Padre> {
    return this.padreRepository.findById(id, filter);
  }

  @patch('/padres/{id}')
  @response(204, {
    description: 'Padre PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Padre, {partial: true}),
        },
      },
    })
    padre: Padre,
  ): Promise<void> {
    await this.padreRepository.updateById(id, padre);
  }

  @put('/padres/{id}')
  @response(204, {
    description: 'Padre PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() padre: Padre,
  ): Promise<void> {
    await this.padreRepository.replaceById(id, padre);
  }

  @del('/padres/{id}')
  @response(204, {
    description: 'Padre DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.padreRepository.deleteById(id);
  }
}
