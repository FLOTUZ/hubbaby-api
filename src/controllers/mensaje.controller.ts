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
import {Mensaje} from '../models';
import {MensajeRepository} from '../repositories';

export class MensajeController {
  constructor(
    @repository(MensajeRepository)
    public mensajeRepository : MensajeRepository,
  ) {}

  @post('/mensajes')
  @response(200, {
    description: 'Mensaje model instance',
    content: {'application/json': {schema: getModelSchemaRef(Mensaje)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mensaje, {
            title: 'NewMensaje',
            exclude: ['idMensaje'],
          }),
        },
      },
    })
    mensaje: Omit<Mensaje, 'idMensaje'>,
  ): Promise<Mensaje> {
    return this.mensajeRepository.create(mensaje);
  }

  @get('/mensajes/count')
  @response(200, {
    description: 'Mensaje model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Mensaje) where?: Where<Mensaje>,
  ): Promise<Count> {
    return this.mensajeRepository.count(where);
  }

  @get('/mensajes')
  @response(200, {
    description: 'Array of Mensaje model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Mensaje, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Mensaje) filter?: Filter<Mensaje>,
  ): Promise<Mensaje[]> {
    return this.mensajeRepository.find(filter);
  }

  @patch('/mensajes')
  @response(200, {
    description: 'Mensaje PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mensaje, {partial: true}),
        },
      },
    })
    mensaje: Mensaje,
    @param.where(Mensaje) where?: Where<Mensaje>,
  ): Promise<Count> {
    return this.mensajeRepository.updateAll(mensaje, where);
  }

  @get('/mensajes/{id}')
  @response(200, {
    description: 'Mensaje model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Mensaje, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Mensaje, {exclude: 'where'}) filter?: FilterExcludingWhere<Mensaje>
  ): Promise<Mensaje> {
    return this.mensajeRepository.findById(id, filter);
  }

  @patch('/mensajes/{id}')
  @response(204, {
    description: 'Mensaje PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mensaje, {partial: true}),
        },
      },
    })
    mensaje: Mensaje,
  ): Promise<void> {
    await this.mensajeRepository.updateById(id, mensaje);
  }

  @put('/mensajes/{id}')
  @response(204, {
    description: 'Mensaje PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mensaje: Mensaje,
  ): Promise<void> {
    await this.mensajeRepository.replaceById(id, mensaje);
  }

  @del('/mensajes/{id}')
  @response(204, {
    description: 'Mensaje DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mensajeRepository.deleteById(id);
  }
}
