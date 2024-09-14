import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';
import { QuestionDetail } from './schemas/question.detail.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Question.name) private readonly model: Model<Question>, @InjectModel(QuestionDetail.name) private readonly detailModel: Model<QuestionDetail>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<Question[]> {
    return this.model.find().exec();
  }

  async findQuestionDetails(uid: string): Promise<QuestionDetail> {
    return this.detailModel.findOne({uid}).exec();
  }
}
