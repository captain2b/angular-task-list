import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TasksActionTypes } from '../store/tasks/tasks.actions';
import { Location } from '@angular/common';
import {Observable, Subscription} from 'rxjs/index';
import { ActivatedRoute } from '@angular/router';

interface AppState {
  tasks: any;
  currentTask: {id: string;
  name: string;
  status: boolean;}
}

@Component({
  selector: 'app-task-editor',
  templateUrl: './tasksEditor.component.html',
  styleUrls: ['./tasksEditor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksEditorComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private _location: Location) {
 }
  @Input() name;
  currentId$;
  currentTask$;
  backClicked() {
    this._location.back();
  }
  updateTask(name) {
    console.log(name)
    const newTask = { name, id: this.currentId$};
    this.store.dispatch({ type: TasksActionTypes.UpdateTask, payload: newTask});
    this._location.back();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
     this.currentId$ = params['id'];
    });
    this.store.dispatch({ type: TasksActionTypes.GetTask, payload: this.currentId$ });
    let subsc = this.store.select('task-list').subscribe(data => {this.currentTask$ = data.currentTask; this.name = this.currentTask$.name; console.log(data)});
  }
}
