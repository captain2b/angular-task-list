import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TasksActionTypes } from '../store/tasks/tasks.actions';
import { Location } from '@angular/common';
import {Observable, Subscription} from 'rxjs/index';
import { ActivatedRoute } from '@angular/router';
interface AppState {
  tasks: any;
}

@Component({
  selector: 'app-create-task',
  templateUrl: './createTasksPage.component.html',
  styleUrls: ['./createTasksPage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTasksPageComponent implements OnInit {
  @Input() id;
  @Input() name;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private _location: Location) {
 }
  backClicked() {
    this._location.back();
  }
  createTask(id, name){
    const newTask = {id, name, status: false};
    this.store.dispatch({ type: TasksActionTypes.CreateTask, payload: newTask});
    this._location.back();
  }

  ngOnInit() {
  }

}
