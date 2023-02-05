import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      synchronize: true,
      logging: false,
      entities: [User, Product],
      migrations: [],
      subscribers: [],
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
