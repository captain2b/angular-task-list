import { Action } from '@ngrx/store';


export enum TasksActionTypes {
  LoadTasks = '[Tasks] Load Tasks',
  LoadTasksSuccess = '[Tasks] Load Tasks Success',
  LoadTasksError = '[Tasks] Load Tasks Failure',
  DeleteTasks = '[Tasks] Delete Tasks',
  DeleteTasksSuccess = '[Tasks] Delete Tasks Success',
  DeleteTasksError = '[Tasks] Delete Tasks Failure',
  UpdateTask = '[Tasks] Update Tasks',
  UpdateTaskSuccess = '[Tasks] Update Tasks Success',
  UpdateTaskError = '[Tasks] Update Tasks Failure',
  GetTask = '[Tasks] Get Task',
  GetTaskSuccess = '[Tasks] Get Task Success',
  GetTaskError = '[Tasks] Get Task Failure',
  DoneTask = '[Tasks] Done Task',
  DoneTaskSuccess = '[Tasks] Done Task Success',
  DoneTaskError = '[Tasks] Done Task Failure',
  CreateTask = '[Tasks] Done Task',
  CreateTaskSuccess = '[Tasks] Done Task Success',
  CreateTaskError = '[Tasks] Done Task Failure',
}

export class LoadTasks implements Action {
  readonly type = TasksActionTypes.LoadTasks;
}

export class LoadTasksSuccess implements Action {
  readonly type = TasksActionTypes.LoadTasksSuccess;
  constructor(public payload: any) {}

}
export class LoadTasksError implements Action {
  readonly type = TasksActionTypes.LoadTasksError;

}

export class DeleteTask implements Action {
  readonly type = TasksActionTypes.DeleteTasks;
  constructor(public payload: any) {}
}

export class DeleteTaskSuccess implements Action {
  readonly type = TasksActionTypes.DeleteTasksSuccess;
  constructor(public payload: any) { }
}

export class DeleteTaskError implements Action {
  readonly type = TasksActionTypes.DeleteTasksError;
  constructor(public payload: Error | string) { }
}
export class UpdateTask implements Action {
  readonly type = TasksActionTypes.UpdateTask;
  constructor(public payload: any) { }
}
export class UpdateTaskSuccess implements Action {
  readonly type = TasksActionTypes.UpdateTaskSuccess;
  constructor(public payload: any) { }
}

export class UpdateTaskError implements Action {
  readonly type = TasksActionTypes.UpdateTaskError;
  constructor(public payload: Error | string) { }
}

export class GetTask implements Action {
  readonly type = TasksActionTypes.GetTask;
  constructor(public payload: any) { }
}
export class GetTaskSuccess implements Action {
  readonly type = TasksActionTypes.GetTaskSuccess;
  constructor(public payload: any) { }
}

export class GetTaskError implements Action {
  readonly type = TasksActionTypes.GetTaskError;
  constructor(public payload: Error | string) { }
}

export class DoneTask implements Action {
  readonly type = TasksActionTypes.DoneTask;
  constructor(public payload: any) { }
}
export class DoneTaskSuccess implements Action {
  readonly type = TasksActionTypes.DoneTaskSuccess;
  constructor(public payload: any) { }
}

export class DoneTaskError implements Action {
  readonly type = TasksActionTypes.DoneTaskError;
  constructor(public payload: Error | string) { }
}

export class CreateTask implements Action {
  readonly type = TasksActionTypes.CreateTask;
  constructor(public payload: any) { }
}
export class CreateTaskSuccess implements Action {
  readonly type = TasksActionTypes.CreateTaskSuccess;
  constructor(public payload: any) { }
}

export class CreateTaskError implements Action {
  readonly type = TasksActionTypes.CreateTaskError;
  constructor(public payload: Error | string) { }
}

export type TasksActions =
  LoadTasks
  | LoadTasksSuccess
  | LoadTasksError
  | DeleteTask
  | DeleteTaskSuccess
  | DeleteTaskError
  | UpdateTask
  | UpdateTaskSuccess
  | UpdateTaskError
  | GetTask
  | GetTaskSuccess
  | GetTaskError
  | DoneTask
  | DoneTaskSuccess
  | DoneTaskError
  | CreateTask
  | CreateTaskSuccess
  | CreateTaskError
  ;
