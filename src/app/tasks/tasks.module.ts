import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import {reducer} from '../store/tasks/tasks.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature('task-list', reducer)
  ],
  providers: [
  ]
})
export class TasksModule {
}

