import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UsePipes,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TaskService } from './task.service';
import { ValidationPipe } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';

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
  constructor(private readonly taskService: TaskService) {}
  @Post('create')
  createTask(@Body() body: TaskDto) {
    throw new BadRequestException('Error de peticion');
    // throw new HttpException('Error de peticion', HttpStatus.BAD_REQUEST);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     reject('error');
    //   }, 2000);
    // })
    // return this.taskService.create(body);
  }

  @Get('select')
  getTasks() {
    return this.taskService.findAll();
  }

  @Get('select/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put('update/:id')
  updateTask(@Param('id') id: string, @Body() body: TaskDto) {
    return this.taskService.update(id, body);
  }

  @Delete('delete/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
