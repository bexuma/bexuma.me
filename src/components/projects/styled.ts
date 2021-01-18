import styled from 'styled-components';

import { screen } from '../../theme';

const Project = styled.div`
  border-bottom: 1px solid #dfe1e6;
  padding-bottom: 26px;
  margin-bottom: 24px;

  :last-child {
    border-bottom: none;
  }

  a {
    color: #00a3bf;
    font-weight: 500;
    margin-right: 8px;
  }

  a[target='_blank']::after {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
    margin: 0 3px 0 4px;
  }

  @media ${screen.desktop} {
    font-size: 18px;
  }
`;

const LinkContainer = styled.div`
  margin-top: 12px;
`;

const TagContainer = styled.div`
  padding-top: 2px;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 0px 9px 1px 9px;
  border-radius: 16px;
  border: 1px solid #100f10;
  margin-right: 6px;
  margin-bottom: 5px;
  font-size: 12px;

  @media ${screen.laptop} {
    font-size: 14px;
  }
`;

export { Project, TagContainer, Tag, LinkContainer };
