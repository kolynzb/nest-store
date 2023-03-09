import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Product } from './models/product.entity';
import { ProductsService } from './models/products.service';
import { ProductsController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Product])],
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
