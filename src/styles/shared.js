import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-bottom: 100px;

  padding-right: 15px;
  padding-left: 15px;

  @media screen and (max-width: 1200px) {
    width: 100vw;
    margin-top: 150px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 800px) {
    margin: 0;
    height: 100vh;
    justify-content: center;
  }
`;
