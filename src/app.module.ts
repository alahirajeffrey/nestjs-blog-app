import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot({isGlobal : true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      password:process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities:true,
      synchronize:true
    }),
    BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
