import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

const configService = new ConfigService();

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    const isProduction = process.env.NODE_ENV === 'production';

    return {
      ssl: isProduction,
      extra: {
        ssl: isProduction
          ? {
              rejectUnauthorized: false,
            }
          : false,
      },
      type: 'postgres',
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get<string>('DB_DATABASE'),
      host: configService.get<string>('DB_HOST'),
      migrationsTableName: 'custom_migration_table',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/database/migrations/*{.ts,.js}'],
      synchronize: false,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  host: configService.get<string>('DB_HOST'),
  migrationsTableName: 'custom_migration_table',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  synchronize: false,
};
