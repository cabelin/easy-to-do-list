export interface Task {
  id?: string;
  description: string;
}

export interface TaskMap {
  [k: string]: Task;
}
