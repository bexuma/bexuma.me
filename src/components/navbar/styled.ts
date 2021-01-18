import styled from 'styled-components';

import { screen } from '../../theme';

const Container = styled.nav`
  width: 100%;
  height: 64px;
  background-color: #37b9f1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: #f7f7fe;
    text-decoration: none;
    font-weight: bold;
  }
`;

const NavContainer = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${screen.laptop} {
    width: 50%;
  }
`;

const Nav = styled.li`
  display: inline-block;
  list-style: none;
  flex: 1;
  text-align: center;
  font-weight: 500;

  a[target='_blank']::after {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
    margin: 0 3px 0 6px;
    filter: brightness(0) invert(1);
  }
`;

const ModeContainer = styled.div`
  right: 0;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  display: none;
`;

const ModeLabel = styled.label`
  font-size: 12px;
`;

export { Container, ModeContainer, ModeLabel, NavContainer, Nav };
