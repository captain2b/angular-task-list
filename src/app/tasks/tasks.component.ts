import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TasksActionTypes } from '../store/tasks/tasks.actions';
import {Observable} from 'rxjs/index';

interface AppState {
  tasks: any;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  listState$: Observable<any[]>;

  ngOnInit() {
    this.listState$ = this.store.pipe(select('task-list'));
    this.store.dispatch({ type: TasksActionTypes.LoadTasks });
  }

}
