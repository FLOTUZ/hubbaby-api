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
import {MetodoPago} from '../models';
import {MetodoPagoRepository} from '../repositories';

export class MetodoPagoController {
  constructor(
    @repository(MetodoPagoRepository)
    public metodoPagoRepository : MetodoPagoRepository,
  ) {}

  @post('/metodos-pago')
  @response(200, {
    description: 'MetodoPago model instance',
    content: {'application/json': {schema: getModelSchemaRef(MetodoPago)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetodoPago, {
            title: 'NewMetodoPago',
            exclude: ['idMetodoPago'],
          }),
        },
      },
    })
    metodoPago: Omit<MetodoPago, 'idMetodoPago'>,
  ): Promise<MetodoPago> {
    return this.metodoPagoRepository.create(metodoPago);
  }

  @get('/metodos-pago/count')
  @response(200, {
    description: 'MetodoPago model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MetodoPago) where?: Where<MetodoPago>,
  ): Promise<Count> {
    return this.metodoPagoRepository.count(where);
  }

  @get('/metodos-pago')
  @response(200, {
    description: 'Array of MetodoPago model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MetodoPago, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MetodoPago) filter?: Filter<MetodoPago>,
  ): Promise<MetodoPago[]> {
    return this.metodoPagoRepository.find(filter);
  }

  @patch('/metodos-pago')
  @response(200, {
    description: 'MetodoPago PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetodoPago, {partial: true}),
        },
      },
    })
    metodoPago: MetodoPago,
    @param.where(MetodoPago) where?: Where<MetodoPago>,
  ): Promise<Count> {
    return this.metodoPagoRepository.updateAll(metodoPago, where);
  }

  @get('/metodos-pago/{id}')
  @response(200, {
    description: 'MetodoPago model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MetodoPago, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(MetodoPago, {exclude: 'where'}) filter?: FilterExcludingWhere<MetodoPago>
  ): Promise<MetodoPago> {
    return this.metodoPagoRepository.findById(id, filter);
  }

  @patch('/metodos-pago/{id}')
  @response(204, {
    description: 'MetodoPago PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetodoPago, {partial: true}),
        },
      },
    })
    metodoPago: MetodoPago,
  ): Promise<void> {
    await this.metodoPagoRepository.updateById(id, metodoPago);
  }

  @put('/metodos-pago/{id}')
  @response(204, {
    description: 'MetodoPago PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() metodoPago: MetodoPago,
  ): Promise<void> {
    await this.metodoPagoRepository.replaceById(id, metodoPago);
  }

  @del('/metodos-pago/{id}')
  @response(204, {
    description: 'MetodoPago DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.metodoPagoRepository.deleteById(id);
  }
}
