import styled from 'styled-components';

interface Props {
  open: boolean;
}

const Container = styled.div<Props>`
  display: ${props => (props.open ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 640px;
  width: '100%';
`;

const ContentChild = styled.div`
  padding: 20px;
`;

const CloseButton = styled.button``;

export { Container, Content, ContentChild, CloseButton };
