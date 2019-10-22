import React, { useContext } from 'react';

import { TaskContext } from '~/Pages/taskContext';
import { Container, Header, Title } from './styles';
import { TodoItem } from './TodoItem';

function TodoList() {
  const { taskIds } = useContext(TaskContext);
  return (
    <Container>
      <Header>
        <Title>Tasks</Title>
      </Header>
      <hr />
      <ul>
        {taskIds.map((taskId: string) => (
          <TodoItem key={taskId} taskId={taskId} />
        ))}
      </ul>
    </Container>
  );
}

export { TodoList };
