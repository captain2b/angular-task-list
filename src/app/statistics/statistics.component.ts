import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TasksActionTypes } from '../store/tasks/tasks.actions';
import {Observable} from 'rxjs/index';
import { Chart } from 'angular-highcharts';

interface AppState {
  tasks: any;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  template: `
    <button (click)="add()">Add Point!</button>
    <div [chart]="chart"></div>
  `
})
// export class TasksComponent implements OnInit {
//
//
//
// }

export class StatisticComponent {
  constructor(private store: Store<AppState>) {
  }

  listState$: Observable<any[]>;
  done$: number;
  tobedone$: number;

  ngOnInit() {
    this.listState$ = this.store.pipe(select('task-list'));
    this.store.dispatch({ type: TasksActionTypes.LoadTasks });
    // for(let i=0; i< this.listState$.tasks.length; i++){
    //   console.log(this.listState$.tasks[i])
    // }

  }
    chart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Task Ratio'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          data: [{name: 'Done', y: 5}, {name: 'To Be Done', y: 6}]
        }
      ]
    });
}
