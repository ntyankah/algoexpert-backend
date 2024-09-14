import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Question } from './schemas/question.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('questions')
  async findAll(): Promise<Question[]> {
    return this.appService.findAll();
  }
}
