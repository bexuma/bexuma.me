import styled from 'styled-components';

import { screen } from '../../theme';

const BioContainer = styled.div`
  display: flex;
  font-size: 16px;
  flex-direction: column;
  padding-bottom: 32px;

  @media ${screen.tablet} {
    flex-direction: row;
    padding-top: 16px;
  }

  @media ${screen.laptop} {
    font-size: 18px;
  }
`;

const Bio = styled.div`
  padding-bottom: 24px;

  @media ${screen.laptop} {
    padding-right: 24px;
    padding-bottom: 0;
  }
`;

const PortraitContainer = styled.div`
  width: 100%;
  min-width: 300px;
  padding-top: 6px;

  @media ${screen.laptop} {
    display: block;
    width: 300px;
  }
`;

const Portrait = styled.img`
  width: 100%;
  height: auto;
`;

const Alt = styled.figcaption`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  display: block;
`;

const TagContainer = styled.div`
  padding-top: 4px;
  margin-bottom: 32px;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 16px;
  border: 1px solid #100f10;
  margin-right: 8px;
  margin-bottom: 6px;
  font-size: 14px;

  @media ${screen.laptop} {
    font-size: 16px;
  }
`;

const Underline = styled.u`
  /* text-decoration: none;
  border-bottom: 2px solid #00a3bf; */

  text-decoration: underline;
  text-decoration-color: #00a3bf;
  text-decoration-thickness: 2px;
`;

const Bold = styled.b`
  color: #00a3bf;
`;

const Superscript = styled.sup`
  font-size: 14px;
  color: #00a3bf;
  margin-left: 4px;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 320px;
  background-color: #100f10;
  color: #f7f7fe;
  text-align: center;
  border-radius: 6px;
  padding: 6px 12px;
  position: absolute;
  font-size: 12px;

  top: -12px;
  left: 110%;
  margin-left: 5px;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: #100f10;

  ::after {
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    right: 100%; /* To the left of the tooltip */
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #100f10 transparent transparent;
  }
`;

const Tooltip = styled.div`
  position: relative;
  display: none;
  cursor: help;

  @media ${screen.laptop} {
    display: inline-block;
  }

  :hover {
    ${TooltipText} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ContactContainer = styled.section`
  a {
    color: #00a3bf;
    font-weight: 500;
    margin-right: 16px;

    :last-child {
      margin-right: 0;
    }
  }

  a[target='_blank']::after {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
    margin: 0 2px 0 4px;
  }
`;

export {
  BioContainer,
  Bio,
  PortraitContainer,
  Portrait,
  Alt,
  TagContainer,
  Tag,
  Underline,
  Bold,
  Superscript,
  Tooltip,
  TooltipText,
  ContactContainer,
};
