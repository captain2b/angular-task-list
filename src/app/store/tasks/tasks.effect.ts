import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  TasksActionTypes, DeleteTaskSuccess, DeleteTaskError, UpdateTaskError,
  UpdateTaskSuccess
} from './tasks.actions';
import {pluck} from "rxjs/internal/operators";

@Injectable()
export class ServerEffects {


  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(TasksActionTypes.LoadTasks),
    mergeMap(action =>
      this.http.get('http://localhost:3000/tasks').pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: TasksActionTypes.LoadTasksSuccess, payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: TasksActionTypes.LoadTasksError }))
      )
    )
  );
  @Effect()
  get$: Observable<Action> = this.actions$.pipe(
    ofType(TasksActionTypes.GetTask),
    pluck('payload'),
    mergeMap(id =>
      this.http.get('http://localhost:3000/tasks/' + id).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: TasksActionTypes.GetTaskSuccess, payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: TasksActionTypes.GetTaskError }))
      )
    )
  );
  @Effect()
  deleteTask$: Observable<Action> = this.actions$.pipe(
    ofType(TasksActionTypes.DeleteTasks),
    pluck('payload'),
    mergeMap(action =>
      this.http.delete('http://localhost:3000/tasks/' + action.id).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: TasksActionTypes.LoadTasks})),
        // If request fails, dispatch failed action
        catchError((error) => of({ type: TasksActionTypes.DeleteTasksError, payload: error }))
      )
    )
  );
  @Effect()
  doneTask$: Observable<Action> = this.actions$.pipe(
    ofType(TasksActionTypes.DoneTask),
    pluck('payload'),
    mergeMap(action =>
      this.http.patch('http://localhost:3000/tasks/' + action.id, {status: true}).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: TasksActionTypes.LoadTasks})),
        // If request fails, dispatch failed action
        catchError((error) => of({ type: TasksActionTypes.DoneTaskError, payload: error }))
      )
    )
  );
  @Effect()
  editTask$: Observable<Action> = this.actions$.pipe(
    ofType(TasksActionTypes.UpdateTask),
    pluck('payload'),
    mergeMap(action =>
      this.http.patch('http://localhost:3000/tasks/' + action.id, {name: action.name}).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: TasksActionTypes.UpdateTaskSuccess})),
        // If request fails, dispatch failed action
        catchError((error) => of({ type: TasksActionTypes.UpdateTaskError, payload: error }))
      )
    )
  );
  @Effect()
  createTask$: Observable<Action> = this.actions$.pipe(
    ofType(TasksActionTypes.CreateTask),
    pluck('payload'),
    mergeMap(action =>
      this.http.post('http://localhost:3000/tasks', action).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: TasksActionTypes.CreateTaskSuccess})),
        // If request fails, dispatch failed action
        catchError((error) => of({ type: TasksActionTypes.CreateTaskError, payload: error }))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
