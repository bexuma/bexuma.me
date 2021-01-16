import styled from 'styled-components';

const Container = styled.main`
  width: 50%;
  margin: 0 auto;
  padding-top: 40px;
`;

const Bio = styled.div`
  padding-top: 24px;
  display: inline-flex;
  font-size: 16px;
`;

const Portrait = styled.img`
  width: 300px;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 0px 6px;
  border-radius: 8px;
  border: 1px solid black;
  margin-left: 6px;
`;

const Underline = styled.u`
  /* text-decoration: none;
  border-bottom: 2px solid #00a3bf; */

  text-decoration: underline;
  text-decoration-color: #00a3bf;
  text-decoration-thickness: 2px;
`;

export { Container, Bio, Portrait, Tag, Underline };
