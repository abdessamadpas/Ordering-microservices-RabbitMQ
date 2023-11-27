import { Controller, Get, Body, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { request } from 'http';
import { CreateOrderRequest } from './dto/create-order.request';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOder( @Body() request: CreateOrderRequest) {
    return this.ordersService.createOder(request);
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }

}
