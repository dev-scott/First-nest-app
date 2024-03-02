import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';
import { SumServiceService } from './sum-service/sum-service.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumServiceService,
  ) {}

  @Get()
  getHello(@Req() req, @Res() res): void {
    console.log(req.headers);
    // return this.appService.getHello();
    res.status(400).json({
      res: this.appService.getHello(),
    });
  }

  // @Get()
  // getQueryStrings(@Query('name') username, @Query('age') age): string {
  //   return `${username} , ${age}`;
  // }

  @Get('/askquestion')
  askQuestion(): string {
    return 'How are you';
  }

  // @Get(':id')
  // getRouteParam(@Param('id') userId): string {
  //   return `${userId}`;
  // }

  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto) {
    return {
      answer: getAnswerDto.answer,
    };
  }
  @Get('/sum')
  getSum(@Query('num1') a, @Query('num2') b) {
    return this.sumService.getsum(a, b);
  }
}
