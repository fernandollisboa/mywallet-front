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
    padding-top: 0;
    justify-content: center;
    padding-top: 0px;
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

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 5px 0px 5px;
  width: 100%;
  height: 12vh;
  font-weight: 700;
  font-size: 26px;
`;
