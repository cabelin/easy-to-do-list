import React, { PropsWithChildren, useCallback } from 'react';

import { Container, Content, ContentChild, CloseButton } from './styles';

interface Props extends PropsWithChildren<any> {
  open: boolean;
  onClose: (confirm: boolean) => void;
}

function Modal({ open, onClose, children }: Props) {
  const handleClickCloseButton = useCallback(() => onClose(false), [onClose]);
  return (
    <Container open={open}>
      {open && (
        <Content>
          <>
            <CloseButton onClick={handleClickCloseButton}>X</CloseButton>
            <ContentChild>{children}</ContentChild>
          </>
        </Content>
      )}
    </Container>
  );
}

export { Modal };
