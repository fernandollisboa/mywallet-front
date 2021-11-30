import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { alertUser } from '../../utils/swalFire';
import { useNavigate } from 'react-router';
import { getUserBalance } from '../../services/transaction';

export default function Balance() {
  const [value, setValue] = useState(0);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    getUserBalance({ token })
      .then((res) => {
        setValue(res.data.userBalance);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 400) {
          alertUser({ text: 'Authentication Error', type: 'error' });
          navigate('/');
        }

        if (err.response.status === 500)
          alertUser({ text: 'Internal Server Error', type: 'error' });
        console.log(err);
      });
  }, [token, navigate]);

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
