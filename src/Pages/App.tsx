import React from 'react';
import { ThemeProvider } from 'styled-components';

import { MyGlobalStyle } from '~/Assets/Theme/Global.style';
import { myTheme } from '~/Assets/Theme';
import { Header } from './Header';
import { Main } from './Main';
import { TaskContext } from '../Contexts/taskContext';
import { useTaskContextValue } from '../Contexts/useTaskContextValue';

function App() {
  const taskValue = useTaskContextValue();
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
