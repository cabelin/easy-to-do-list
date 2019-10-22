import styled from 'styled-components';

const Container = styled.div`
  padding: 8px;

  max-width: 640px;
  width: 100%;
  margin: 8px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin-left: 8px;
`;

export { Container, Header, Title };
