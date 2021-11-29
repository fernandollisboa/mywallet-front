import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserBalance } from '../../services/transaction';

export default function Balance() {
  const [value, setValue] = useState(0);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getUserBalance({ token })
      .then((res) => {
        setValue(res.data.userBalance);
      })
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <BalanceWrapper>
      <p>Balance:</p>
      <Value>$ {value.toFixed(2)}</Value>
    </BalanceWrapper>
  );
}

const BalanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  background-color: white;
  z-index: 1;
  bottom: 0;
  border: 0.25px groove green;
  padding: 10px 5px 5px 5px;
  p {
    color: black;
    font-weight: bolder;
  }
`;

const Value = styled.div`
  color: black;
  padding: 0px 2px;
`;
