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

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    margin-right: 16px;

    :last-child {
      margin-right: 0;
    }
  }

  @media ${screen.tablet} {
    padding-right: 12px;
  }

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
  border: 1px solid ${({ theme }) => theme.colors.font};
  margin-right: 8px;
  margin-bottom: 6px;
  font-size: 14px;

  @media ${screen.laptop} {
    font-size: 16px;
  }
`;

const Underline = styled.u`
  /* text-decoration: none;
  border-bottom: 2px solid #${({ theme }) => theme.colors.primary}; */

  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.primary};
  text-decoration-thickness: 2px;
`;

const Bold = styled.b`
  color: ${({ theme }) => theme.colors.primary};
`;

const Superscript = styled.sup`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 4px;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 248px;
  background-color: ${({ theme }) => theme.colors.font};
  color: ${({ theme }) => theme.colors.background};
  text-align: left;
  border-radius: 6px;
  padding: 6px 16px;
  position: absolute;
  font-size: 12px;

  top: -12px;
  left: 110%;
  margin-left: 5px;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: ${({ theme }) => theme.colors.font};

  ::after {
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    right: 100%; /* To the left of the tooltip */
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.colors.font} transparent
      transparent;
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
    color: ${({ theme }) => theme.colors.primary};
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

const Line = styled.span`
  display: block;
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
  Line,
};
