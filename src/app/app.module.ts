import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {StoreModule} from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import {ServerEffects} from './store/tasks/tasks.effect';
import {HttpClientModule} from "@angular/common/http";
import {TasksModule} from "./tasks/tasks.module";
import {TasksListItemComponent} from "./tasks-list-item/tasks-list-item.component";
import {TasksEditorComponent} from "./tasksEditor/tasksEditor.component";
import {CreateTasksPageComponent} from "./createTasksPage/createTasksPage.component";
import {ChartModule} from "angular-highcharts";
import {StatisticComponent} from "./statistics/statistics.component";


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksListItemComponent,
    PageNotFoundComponent,
    TasksEditorComponent,
    CreateTasksPageComponent,
    StatisticComponent
  ],
  imports: [
    AppRoutingModule,
    TasksModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ChartModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([ServerEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
