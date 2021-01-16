import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav`
  width: 300px;
  height: calc(100vh - 20px);
  background-color: #f9f9f9;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Copyright = styled.span`
  text-align: center;
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

export { AppContainer, Nav, Copyright, Container, Tag };
