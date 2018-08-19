import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BrowserModule} from "@angular/platform-browser";
import {TasksEditorComponent} from './tasksEditor/tasksEditor.component';
import {CreateTasksPageComponent} from './createTasksPage/createTasksPage.component';

const appRoutes: Routes = [

  { path: 'tasks', component:  TasksComponent},
  { path: 'createTask', component:  CreateTasksPageComponent},
  { path: 'task/:id', component:  TasksEditorComponent},
  { path: 'statistic',      component: AppComponent },
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {
}

