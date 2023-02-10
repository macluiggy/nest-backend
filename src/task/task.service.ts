import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { Task } from './task.interface';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class TaskService {
  task: Task[] = [];
  create(taskDto: TaskDto): Task {
    const { description, isDone } = taskDto;
    const task = {
      id: uuidV4(),
      description,
      isDone,
    };
    return task;
  }
}
