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
import {Ninera} from '../models';
import {NineraRepository} from '../repositories';

export class NineraController {
  constructor(
    @repository(NineraRepository)
    public nineraRepository : NineraRepository,
  ) {}

  @post('/nineras')
  @response(200, {
    description: 'Ninera model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ninera)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ninera, {
            title: 'NewNinera',
            exclude: ['idNinera'],
          }),
        },
      },
    })
    ninera: Omit<Ninera, 'idNinera'>,
  ): Promise<Ninera> {
    return this.nineraRepository.create(ninera);
  }

  @get('/nineras/count')
  @response(200, {
    description: 'Ninera model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ninera) where?: Where<Ninera>,
  ): Promise<Count> {
    return this.nineraRepository.count(where);
  }

  @get('/nineras')
  @response(200, {
    description: 'Array of Ninera model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ninera, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ninera) filter?: Filter<Ninera>,
  ): Promise<Ninera[]> {
    return this.nineraRepository.find(filter);
  }

  @patch('/nineras')
  @response(200, {
    description: 'Ninera PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ninera, {partial: true}),
        },
      },
    })
    ninera: Ninera,
    @param.where(Ninera) where?: Where<Ninera>,
  ): Promise<Count> {
    return this.nineraRepository.updateAll(ninera, where);
  }

  @get('/nineras/{id}')
  @response(200, {
    description: 'Ninera model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ninera, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Ninera, {exclude: 'where'}) filter?: FilterExcludingWhere<Ninera>
  ): Promise<Ninera> {
    return this.nineraRepository.findById(id, filter);
  }

  @patch('/nineras/{id}')
  @response(204, {
    description: 'Ninera PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ninera, {partial: true}),
        },
      },
    })
    ninera: Ninera,
  ): Promise<void> {
    await this.nineraRepository.updateById(id, ninera);
  }

  @put('/nineras/{id}')
  @response(204, {
    description: 'Ninera PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ninera: Ninera,
  ): Promise<void> {
    await this.nineraRepository.replaceById(id, ninera);
  }

  @del('/nineras/{id}')
  @response(204, {
    description: 'Ninera DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.nineraRepository.deleteById(id);
  }
}
