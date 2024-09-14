import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Question {
    
    @Prop()
    uid: string;

    @Prop()
    type: string;

    @Prop()
    name: string;

    @Prop()
    releaseDate: string;

    @Prop()
    instructor: string;

    @Prop()
    category: string;

    @Prop()
    difficulty: number;

    @Prop()
    isFree: boolean;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);