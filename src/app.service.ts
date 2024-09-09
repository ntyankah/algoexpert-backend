import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const databaseName = this.configService.get<string>('DATABASE_USER')
    const passWord = this.configService.get<string>('DATABASE_PASSWORD')
    console.log('name: ', databaseName)
    console.log('password: ', passWord)
    return 'Hello World!';
  }
}
