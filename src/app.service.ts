import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Question.name) private readonly model: Model<Question>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<Question[]> {
    console.log('code got here')
    return this.model.find().exec();
  }
}
