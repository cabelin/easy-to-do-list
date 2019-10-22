import styled from 'styled-components';

const Container = styled.div`
  color: #ffffff;
  height: 70px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.main};
`;

export { Container };
