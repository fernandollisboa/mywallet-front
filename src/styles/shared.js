import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  padding-top: 200px;
  padding-bottom: 100px;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (max-width: 1200px) {
    width: 100vw;
    padding-top: 150px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 800px) {
    /* margin: 0;
    justify-content: center; */ //TO-DO tirar isso
    padding-top: 125px;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 15px;
  text-decoration: none;
  color: white;
  font-size: 17px;
  font-weight: 700;
  line-height: 140%;
  width: 200px;
  text-align: center;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
