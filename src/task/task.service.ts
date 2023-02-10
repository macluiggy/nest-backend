import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { Task } from './task.interface';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class TaskService {
  tasks: Task[] = [];
  create(taskDto: TaskDto): Task {
    const { description, isDone } = taskDto;
    const task = {
      id: uuidV4(),
      description,
      isDone,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  update(id: string, taskDto: TaskDto): Task {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        this.tasks[i] = {
          ...this.tasks[i],
          ...taskDto,
        };
        return this.tasks[i];
      }
    }
  }
}
