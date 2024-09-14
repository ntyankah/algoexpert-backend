import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Question } from './schemas/question.schema';
import { QuestionDetail } from './schemas/question.detail.schema';

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

  @Get('questions/:id')
  async findQuestionDetails(@Param('id') uid: string): Promise<QuestionDetail> {
    return this.appService.findQuestionDetails(uid);
  }
}
