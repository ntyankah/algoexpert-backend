import { ApiProperty } from '@nestjs/swagger';
export class CreateCatDto {
    @ApiProperty({ description: 'The name of the cat' })
    readonly name: string;
    @ApiProperty({ description: 'The age of the user' })
    readonly age: number;
    @ApiProperty({ description: 'The breed of the user' })
    readonly breed: string;
  }