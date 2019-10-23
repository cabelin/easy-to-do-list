import { useState, useCallback, useMemo, useEffect } from 'react';
import uuid from 'uuid/v1';

import { Task } from '~/Models';
import { tasks as initialTasks, taskIds as initialTaskIds } from './taskContext';

function useTaskContextValue() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskIds, setTaskIds] = useState(initialTaskIds);

  const getTaskById = useCallback((taskId: string) => tasks[taskId], [tasks]);

  const addTask = useCallback((task: Task) => {
    const newTaskId = uuid();
    setTasks(oldTasks => ({
      ...oldTasks,
      [newTaskId]: {
        ...task,
        id: newTaskId,
      },
    }));
  }, []);

  useEffect(() => {
    const newTaskIds = Object.keys(tasks);
    setTaskIds(newTaskIds);
  }, [tasks]);

  const taskValue = useMemo(() => {
    return {
      tasks,
      taskIds,
      getTaskById,
      addTask,
    };
  }, [tasks, taskIds, getTaskById, addTask]);
  return taskValue;
}

export { useTaskContextValue };
