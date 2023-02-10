import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, TaskController],
  providers: [AppService, CatsService, TaskService],
})
export class AppModule {}
