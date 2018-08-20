import { Action } from '@ngrx/store';
import { TaskState, initialState} from './tasks.state';
import { TasksActions, TasksActionTypes} from './tasks.actions';

export interface ActionWithPayload extends Action {
  payload: any;
}
export function reducer(state = initialState, action: ActionWithPayload): TaskState {
  switch (action.type) {
    case TasksActionTypes.LoadTasksSuccess: {
      return {
        ...state,
        tasks: [
          ...action.payload,
        ]
      };
    }
    case TasksActionTypes.LoadTasksError: {
    const error = action.payload;
    return {
      ...state,
      error
    };
  }case TasksActionTypes.GetTaskSuccess: {
      return {
        ...state,
        currentTask: {...action.payload}
      };
    }
    case TasksActionTypes.GetTaskError: {
    const error = action.payload;
    return {
      ...state,
      error
    };
  }
    case TasksActionTypes.DeleteTasksSuccess: {
    return {
      ...state
    };
    }
    case TasksActionTypes.DeleteTasksError: {
      const error = action.payload;
      return {
        ...state,
        error
      };
    }
    default:
      return state;
  }
}
