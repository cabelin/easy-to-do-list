export interface Task {
  id: string;
  text: string;
}

export interface TaskMap {
  [k: string]: Task;
}
