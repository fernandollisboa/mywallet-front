import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import Header from '../../components/Header';
import { PageWrapper } from '../../styles/shared';
import { getUserTransactions } from '../../services/transaction';
import StyledLoader from '../../components/Loader/index';
import Balance from '../../components/Balance';
import styled from 'styled-components';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(fetchTransactions, [token]);

  function fetchTransactions() {
    getUserTransactions({ token })
      .then((res) => {
        console.log(res.data);
        setTransactions([...res.data]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <PageWrapper>
      <Header />
      <TransactionsContainer>
        <TransactionsList>
          {isLoading ? (
            <StyledLoader />
          ) : !transactions.length ? (
            <WarningMsg>No data yet. Create your first transaction right now! =)</WarningMsg>
          ) : (
            transactions.map((t) => (
              <Transaction>
                <Date>{dayjs(t.createdAt).format('DD-MM')}</Date>
                <Description>{t.description}</Description> <Value type={t.type}>{t.value}</Value>
              </Transaction>
            ))
          )}
        </TransactionsList>
        {isLoading || !transactions.length ? ' ' : <Balance />}
      </TransactionsContainer>

      <ButtonsContainer>
        <Button disabled={isLoading} onClick={() => navigate('/app/new-transaction/income')}>
          <IoAddCircleOutline /> <p>New Income</p>
        </Button>

        <Button disabled={isLoading} onClick={() => navigate('/app/new-transaction/expense')}>
          <IoRemoveCircleOutline /> <p>New Expense</p>
        </Button>
      </ButtonsContainer>
    </PageWrapper>
  );
}

const TransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 90%;
`;

const TransactionsContainer = styled.div`
  background-color: white;
  width: 100%;
  min-height: 60vh;
  position: relative;
  border-radius: 5px;
  margin: 10px 0px;
`;

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

const Date = styled.div`
  color: #c6c6c6;
  width: 20%;
  max-width: 20%;
`;

const Description = styled.div`
  color: #000000;
  width: 50%;
`;

const Value = styled.div`
  color: ${(props) => (props.type === 'INC' ? 'var(--btn-color)' : '#C70000')};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
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

const WarningMsg = styled.div`
  /* height: 50vh; */
  font-weight: 700;
  padding: 50% 20% 0% 20%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 120%;
`;
