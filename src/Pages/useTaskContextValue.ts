import { useState, useCallback, useMemo } from 'react';

import { tasks as initialTasks, taskIds as initialTaskIds } from './taskContext';

function useTaskContextValue() {
  const [tasks] = useState(initialTasks);
  const [taskIds] = useState(initialTaskIds);

  const getTaskById = useCallback((taskId: string) => tasks[taskId], [tasks]);

  const taskValue = useMemo(
    () => ({
      tasks,
      taskIds,
      getTaskById,
    }),
    [tasks, taskIds, getTaskById],
  );
  return taskValue;
}

export { useTaskContextValue };
