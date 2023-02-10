import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api/v1/task')
export class TaskController {
  @Post()
  methodPost(@Req() req: Request) {
    return `method: ${req.method}`
    // return res.status(200).json({ message: 'method: ' + req.method });
  }

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

  // @Post
} 
