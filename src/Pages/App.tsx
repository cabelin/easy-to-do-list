import React, { useState, useCallback, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { MyGlobalStyle } from '~/Assets/Theme/Global.style';
import { myTheme } from '~/Assets/Theme';
import { Header } from './Header';
import { Main } from './Main';
import { TaskContext, tasks as initialTasks, taskIds as initialTaskIds } from './taskContext';

function App() {
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
  return (
    <ThemeProvider theme={myTheme}>
      <TaskContext.Provider value={taskValue}>
        <MyGlobalStyle />
        <Header />
        <Main />
      </TaskContext.Provider>
    </ThemeProvider>
  );
}

export { App };
