import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api/v1/task')
export class TaskController {
  // @Post()
  // methodPost(@Req() req: Request) {
  //   return `method: ${req.method}`;
  //   // return res.status(200).json({ message: 'method: ' + req.method });
  // }

  @Get('done')
  methodGet(@Req() req: Request, @Res() res: Response) {
    return res.status(200).json({ message: 'method: ' + req.method });
  }

  @Put('done')
  methodPut(@Req() req: Request, @Res() res: Response) {
    return res.status(200).json({ message: 'method: ' + req.method });
  }

  @Delete('done')
  methodDelete(@Req() req: Request, @Res() res: Response) {
    return res.status(200).json({ message: 'method: ' + req.method });
  }

  @Post(':id/description/:description/isDone/:isDone')
  // methodPostId(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
  //   return res.status(200).json({ message: 'method: ' + req.method, id: id });
  // }
  methodPostId(
    @Param() param: { id: string; description: string; isDone: string },
  ) {
    const { id } = param;
    return { id, param };
  }

  @Get()
  methodGetQuery(@Query() query: { description: string; isDone: string }) {
    const { description, isDone } = query;
    return { description, isDone };
  }

  @Post()
  methodPostBody(@Body() body: { description: string; isDone: string }) {
    const { description, isDone } = body;
    return { description, isDone };
  }
}
