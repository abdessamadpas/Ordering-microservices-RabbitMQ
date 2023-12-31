import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { OrderRepository } from './orders.repository';
import mongoose, { mongo } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';

@Module({
  imports: [
    ConfigModule.forRoot({ 
    isGlobal: true,
    validationSchema: Joi.object({
      DATABASE_URI: Joi.string().required(),
      PORT : Joi.number().required().default(3000),
    }),
    envFilePath: './apps/orders/.env',
  }),
  DatabaseModule,
  MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),

],
  controllers: [OrdersController],
  providers: [OrdersService,OrderRepository],
} )
export class OrdersModule {}