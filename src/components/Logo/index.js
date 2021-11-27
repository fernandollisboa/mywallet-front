import styled from 'styled-components';

export default function Logo() {
  return <LogoWrapper>YourWallet</LogoWrapper>;
}

const LogoWrapper = styled.div`
  align-self: center;
  color: black;
  font-family: 'Lobster', cursive;
  font-size: 40px;
  padding-bottom: 20px;
`;
