import React from 'react';

import { Container } from './styles';
import { ActionBar } from './ActionBar';
import { TodoList } from './TodoList';

function Main() {
  return (
    <Container>
      <ActionBar />
      <TodoList />
    </Container>
  );
}

export { Main };
