import { CatsService } from './cats/cats.service';
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly CatsService: CatsService,
  ) {}

  @Get()
  getHello() {
    return this.CatsService.hiCatServiceProduct();
  }
}
