import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDetailDocument = HydratedDocument<QuestionDetail>;

@Schema()
export class QuestionDetail {
    @Prop()    
    uid: string
    @Prop()
    testStrategy: string
    @Prop()
    name: string
    @Prop()
    releaseDate: string
    @Prop()
    category: string
    @Prop()
    difficulty: number
    @Prop()
    languagesSupported: string
    @Prop()
    assessmentSummary: string
    @Prop()
    prompt: string
    @Prop()
    hints: string
    @Prop()
    spaceTime: string
    @Prop()
    notes: string
    @Prop()
    isSlowExecution: boolean
    @Prop()
    isLongOutput: boolean
    @Prop()
    visualization: string
    @Prop()
    resources: string
    @Prop()
    customInputVars: string
    @Prop()
    tests: string
    @Prop()
    jsonTests: string
}

export const QuestionDetailSchema = SchemaFactory.createForClass(QuestionDetail);