import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cat/cat.module';
import { Question, QuestionSchema } from './schemas/question.schema';
import { QuestionDetail, QuestionDetailSchema } from './schemas/question.detail.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env.example'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get<string>('MONGODB_URI'), // Access environment variable
        }
      },
    }),
    MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema, collection: 'question' }]),
    MongooseModule.forFeature([{ name: QuestionDetail.name, schema: QuestionDetailSchema, collection: 'question_detail' }]),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
