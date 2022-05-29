import { DataSource, DataSourceOptions } from 'typeorm';
import typeOrmConfig from './src/database/typeorm-migrations.config';

const dataSource = new DataSource(typeOrmConfig as DataSourceOptions);

export default dataSource;
