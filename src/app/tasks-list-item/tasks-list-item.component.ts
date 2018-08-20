import { Store, select } from '@ngrx/store';

import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {TasksActionTypes} from "../store/tasks/tasks.actions";


interface AppState {
  tasks: any;
}

@Component({
  selector: 'app-tasks-list-item',
  templateUrl: './tasks-list-item.component.html',
  styleUrls: ['./tasks-list-item.component.css']
})
export class TasksListItemComponent {

  constructor(private store: Store<AppState>) {
  }
  @Input() task: any;

  @Output() completeTask = new EventEmitter<any>();
  @Output() editTask = new EventEmitter<any>();
  @Output() deleteTask = new EventEmitter<any>();

  onCompleteTask(): void {
    this.store.dispatch({ type: TasksActionTypes.DoneTask, payload: this.task });
    this.completeTask.emit(this.task);
  }

  onEditTask() {
    this.editTask.emit(this.task);
  }

  onDeleteTask() {
    console.log('delete', this.task);
    this.store.dispatch({ type: TasksActionTypes.DeleteTasks, payload: this.task });

    this.deleteTask.emit(this.task);
  }
}
