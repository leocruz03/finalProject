import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // * el task component requiere un input *
  @Input() task: ITask | undefined; // ! el undefined es de momento !
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask() {
    console.log('eliminar tarea', this.task?.title)
    this.delete.emit(this.task) // * notificamos al componente superior la tarea a eliminar *
  }

}
