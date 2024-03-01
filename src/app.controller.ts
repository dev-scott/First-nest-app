import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getQueryStrings(@Query('name') username, @Query('age') age): string {
    return `${username} , ${age}`;
  }

  @Get('/askquestion')
  askQuestion(): string {
    return 'How are you';
  }

  @Get(':id')
  getRouteParam(@Param('id') userId): string {
    return `${userId}`;
  }

  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto) {
    return {
      answer: getAnswerDto.answer,
    };
  }
}
