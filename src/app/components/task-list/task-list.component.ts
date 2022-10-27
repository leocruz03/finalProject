import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // TODO: reformular cómo una lista de tareas TODO:
  task_one: ITask = {
    title: 'task one',
    description: 'description one',
    isCompleted: false,
    level: Levels.Info
  }
  
  task_two: ITask = {
    title: 'task two',
    description: 'description two',
    isCompleted: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask) {
    /* 
      TODO: sustituir por un splice para eliminar de una lista de tareas
    */
    alert(`se procede a eliminar la tarea ${task.title}`)
  }

}
