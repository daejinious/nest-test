import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
// 한글 주석처리a}
// 0 abcdef
export class AppModule {
  /**
   *
   * @returns string
   */
  findAll(): string {
    const a = {};
    const b = 2;
    if (a === b) {
      console.log(`test a = ${a}`);
    } else {
      console.log(`test a = ${a}`);
    }
    return 'test';
  }
}
