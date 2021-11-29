import styled from 'styled-components';

export const StyledLoaderWrapper = styled.div`
  width: 611px;
  flex: 1;
  height: 360px;
  color: var(--btn-color);
  font-size: 20px;
  line-height: 300%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1230px) {
    width: 100%;
  }
`;
