import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.main`
  flex: 1;
  padding: 20px;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 0px 6px;
  border-radius: 8px;
  border: 1px solid black;
  margin-left: 6px;
`;

export { AppContainer, Container, Tag };
