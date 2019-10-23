import React, { useCallback, useContext } from 'react';

import { Modal } from '~/Components/Modals';
import { Task } from '~/Models';
import { TaskContext } from '~/Contexts/taskContext';
import { TodoAddForm } from './Components/TodoAddForm';

interface Props {
  open: boolean;
  onClose: () => void;
}

function TodoAddModal({ open, onClose }: Props) {
  const { addTask } = useContext(TaskContext);

  const handleSubmit = useCallback(
    (task: Task) => {
      onClose();
      addTask({
        ...task,
      });
    },
    [addTask, onClose],
  );

  return (
    <Modal open={open} onClose={onClose}>
      <TodoAddForm onSubmit={handleSubmit} />
    </Modal>
  );
}

export { TodoAddModal };
