/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminProductsController } from './admin.products.controler';
@Module({
  controllers: [AdminController, AdminProductsController],
})
export class AdminModule {}
