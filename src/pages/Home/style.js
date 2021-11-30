import styled from 'styled-components';
export const TransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 90%;
`;

export const TransactionsContainer = styled.div`
  background-color: white;
  width: 100%;
  min-height: 60vh;
  position: relative;
  border-radius: 5px;
  margin: 10px 0px;
`;

export const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

export const Date = styled.div`
  color: #c6c6c6;
  width: 20%;
  max-width: 20%;
`;

export const Description = styled.div`
  color: #000000;
  width: 50%;
`;

export const Value = styled.div`
  color: ${(props) => (props.type === 'INC' ? 'var(--btn-color)' : '#C70000')};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  height: 115px;
  background-color: var(--btn-color);
  border-radius: 3px;
  font-size: 25px;
  color: #fff;
  padding: 10px;
  cursor: pointer;

  outline: none;
  border-style: none;
  box-shadow: none;
  opacity: ${(props) => (props.disabled ? 0.8 : 1)};
  &:focus,
  &:active {
    border-style: outset;
    border: none;
  }
  p {
    max-width: 45px;
    font-size: 20px;
    word-wrap: nowrap;
    font-weight: 700;
    line-height: 20px;
  }
`;

export const WarningMsg = styled.div`
  font-weight: 700;
  padding: 50% 10% 0% 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 120%;
`;
