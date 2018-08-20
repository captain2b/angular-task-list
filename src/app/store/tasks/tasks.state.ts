

export interface TaskState {
  tasks: any;
  error?: string;
  currentTask?: any;
}
export const initialState: TaskState = {
  tasks: []
};
