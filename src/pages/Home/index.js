import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import Header from '../../components/Header';
import { PageWrapper } from '../../styles/shared';
import { alertUser } from '../../utils/swalFire';
import { getUserTransactions } from '../../services/transaction';
import StyledLoader from '../../components/Loader/index';
import Balance from '../../components/Balance';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import {
  TransactionsContainer,
  TransactionsList,
  Transaction,
  WarningMsg,
  Date,
  Description,
  Value,
  ButtonsContainer,
  Button,
} from './style';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(fetchTransactions, [token, navigate]);

  function fetchTransactions() {
    getUserTransactions({ token })
      .then((res) => {
        setTransactions([...res.data]);
        setIsLoading(false);
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
  }

  return (
    <PageWrapper>
      <Header />
      <TransactionsContainer>
        <TransactionsList>
          {isLoading ? (
            <StyledLoader />
          ) : !transactions.length ? (
            <WarningMsg>
              No data yet. Your incomes/outcomes will be here when you register them! =)
            </WarningMsg>
          ) : (
            transactions.map((t, i) => (
              <Transaction key={i}>
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
