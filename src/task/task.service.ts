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
    const newTask = { id, ...taskDto };
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, ...taskDto } : task,
    );
    return newTask;
  }

  delete(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
