import React, { useContext } from 'react';

import { TaskContext } from '~/Contexts/taskContext';
import { useModal } from '~/Components/Modals/useModal';
import { TodoAddModal } from '~/Pages/Main/TodoAdd';
import { Container, Header, Title } from './styles';
import { TodoItem } from './TodoItem';

function TodoList() {
  const { taskIds } = useContext(TaskContext);
  const [modalOpen, handleOpenModal, handleCloseModal] = useModal();
  return (
    <>
      <Container>
        <Header>
          <Title>Tasks</Title>
          <button onClick={handleOpenModal}>Add Task</button>
        </Header>
        <hr />
        <ul>
          {taskIds.map((taskId: string) => (
            <TodoItem key={taskId} taskId={taskId} />
          ))}
        </ul>
      </Container>
      <TodoAddModal open={modalOpen} onClose={handleCloseModal} />
    </>
  );
}

export { TodoList };
