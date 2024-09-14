import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Question } from './schemas/question.schema';
import { QuestionDetail } from './schemas/question.detail.schema';

const allowedUids = ['validate-subsequence', 'river-sizes', 'shift-linked-list', 'max-profit-with-k-transactions']

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
    if (!allowedUids.includes(uid)) throw new NotFoundException('Question not found')
    return this.appService.findQuestionDetails(uid);
  }
}
