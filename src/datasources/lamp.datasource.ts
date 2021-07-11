import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'lamp',
  connector: 'mysql',
  url: '',
  host: '198.199.83.125',
  port: 3306,
  user: 'emmanuel',
  password: 'papaya papaya',
  database: 'hubbaby'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LampDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'lamp';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.lamp', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
