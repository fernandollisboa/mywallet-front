import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../styles/shared';
import { HeaderWrapper } from '../../styles/shared';
import { alertUser } from '../../utils/swalFire';
import { postTransaction } from '../../services/transaction';
import { StyledLink } from '../../styles/shared';
import Form from '../../components/Form';

export default function NewTransaction() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { type } = useParams();
  const token = localStorage.getItem('token');

  function submitTransaction(e) {
    e.preventDefault();
    setIsLoading(true);

    if (!value?.trim() || !description?.trim()) {
      alertUser({ text: 'All the fields must be completed', type: 'error' });

      setIsLoading(false);
    }

    let dbType;
    if (type === 'income') dbType = 'INC';
    if (type === 'expense') dbType = 'OUT';

    postTransaction({ token, value, type: dbType, description })
      .then(() => {
        alertUser({ text: `New ${type} added successfully`, type: 'success' });
        navigate('/app');
      })
      .catch((err) => console.log(err));
  }

  return (
    <PageWrapper style={{ justifyContent: 'flex-start', marginTop: '15px' }}>
      <HeaderWrapper>
        <p>{`New ${type}`}</p>
      </HeaderWrapper>

      <Form onSubmit={submitTransaction} disabled={isLoading}>
        <input
          type="number"
          min="0,01"
          max="9999999"
          required
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={isLoading}
          placeholder="Value"
        />

        <input
          type="text"
          required
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          disabled={isLoading}
          placeholder="Description"
        />

        <button type="submit" disabled={isLoading}>
          Save {type}
        </button>
      </Form>
      <StyledLink style={{ alignSelf: 'center' }} to="/app">
        Back
      </StyledLink>
    </PageWrapper>
  );
}
