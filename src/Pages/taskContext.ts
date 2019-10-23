import { createContext } from 'react';

import { TaskMap, Task } from '~/Models';

const tasks: TaskMap = {
  'ea318b16-db32-47a3-8c11-fe8e3869c52e': {
    id: 'ea318b16-db32-47a3-8c11-fe8e3869c52e',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  'd030bd1e-3b6a-4705-8a56-e46eee4fa2ce': {
    id: 'd030bd1e-3b6a-4705-8a56-e46eee4fa2ce',
    description: 'Lorem ipsum dolor sit amet',
  },
  '9460ef15-c9e8-40ae-af62-61b0f0f015a9': {
    id: '9460ef15-c9e8-40ae-af62-61b0f0f015a9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  'fa0a1790-db8d-4f8c-8490-57e68aa957e3': {
    id: 'fa0a1790-db8d-4f8c-8490-57e68aa957e3',
    description: 'Lorem ipsum dolor sit amet',
  },
};

const taskIds = Object.keys(tasks);

export interface TaskContextType {
  tasks: TaskMap;
  taskIds: string[];
  getTaskById: (taskId: string) => Task | undefined;
}

const context = createContext<TaskContextType>({
  tasks,
  taskIds,
  getTaskById: (taskId: string) => tasks[taskId],
});

export { context as TaskContext, tasks, taskIds };
