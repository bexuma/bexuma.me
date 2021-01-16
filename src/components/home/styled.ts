import styled from 'styled-components';

const Container = styled.main`
  width: 970px;
  margin: 0 auto;
  padding-top: 48px;
`;

const BioContainer = styled.div`
  padding-top: 16px;
  display: flex;
  font-size: 18px;
`;

const Bio = styled.div`
  padding-right: 20px;
`;

const PortraitContainer = styled.div`
  width: 300px;
  min-width: 300px;
  padding-top: 16px;
`;

const Portrait = styled.img`
  width: 100%;
  height: auto;
`;

const Alt = styled.span`
  font-size: 12px;
`;

const TagContainer = styled.div`
  padding-top: 4px;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  border: 1px solid black;
  margin-right: 6px;
  margin-bottom: 5px;
  font-size: 16px;
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

export {
  Container,
  BioContainer,
  Bio,
  PortraitContainer,
  Portrait,
  Alt,
  TagContainer,
  Tag,
  Underline,
  Bold,
};
