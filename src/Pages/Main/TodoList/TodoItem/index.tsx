import React, { useContext } from 'react';

import { Container, Text } from './styles';
import { TaskContext } from '~/Pages/taskContext';

interface Props {
  taskId: string;
}

function TodoItem({ taskId }: Props) {
  const { getTaskById } = useContext(TaskContext);
  const task = getTaskById(taskId);
  if (!task) {
    return null;
  }
  const { description } = task;
  return (
    <Container>
      <Text>{description}</Text>
    </Container>
  );
}

export { TodoItem };
