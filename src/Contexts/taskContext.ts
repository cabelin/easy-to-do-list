import { createContext } from 'react';

import { TaskMap, Task } from '~/Models';

const tasks: TaskMap = {};
const taskIds = Object.keys(tasks);

export interface TaskContextType {
  tasks: TaskMap;
  taskIds: string[];
  getTaskById: (taskId: string) => Task | undefined;
  addTask: (task: Task) => void;
}

const context = createContext<TaskContextType>({
  tasks,
  taskIds,
  getTaskById: () => undefined,
  addTask: () => undefined,
});

export { context as TaskContext, tasks, taskIds };
