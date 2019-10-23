import React, { useCallback, useState, useEffect, createRef } from 'react';

import { Container, InputFormDescription } from './styles';
import { Task } from '~/Models';

interface Props {
  onSubmit: (task: Task) => void;
}

function TodoAddForm({ onSubmit }: Props) {
  const [description, setDescription] = useState('');

  const inputDescriptionRef = createRef<HTMLInputElement>();
  useEffect(() => {
    if (inputDescriptionRef.current) {
      inputDescriptionRef.current.focus();
    }
  }, [inputDescriptionRef]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (description) {
        onSubmit({ description });
      }
    },
    [onSubmit, description],
  );

  const handleInputDescriptionChange = useCallback(({ target }) => {
    const { value } = target;
    setDescription(value);
  }, []);

  return (
    <Container onSubmit={handleSubmit}>
      <h1>Add Task</h1>
      <InputFormDescription>
        <label htmlFor="description">Description</label>
        <input
          ref={inputDescriptionRef}
          name="description"
          onChange={handleInputDescriptionChange}
        />
      </InputFormDescription>
      <button type="submit">Salvar</button>
    </Container>
  );
}

export { TodoAddForm };
