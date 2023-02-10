import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  // @Post()
  // @HttpCode(204)
  // create(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send();
  //   return 'This action adds a new cat';
  // }
  // @Get()
  // findAll(@Req() request: Request, @Res() res: Response): string {
  //   res.status(HttpStatus.OK).send();
  //   return 'This action returns all cats';
  // }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   this.catsService.create(createCatDto);
  // }

  // @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }
}
