import { useState } from 'react';
import { useNavigate } from 'react-router';
import Form from '../../components/Form';
import Logo from '../../components/Logo';
import { postSignUp } from '../../services/auth';
import { PageWrapper } from '../../styles/shared';
import { StyledLink } from '../../styles/shared';
import { alertUser } from '../../utils/swalFire';

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function sendData(e) {
    e.preventDefault();
    setIsLoading(true);

    if (!email.trim() || !password.trim()) {
      alertUser({ text: 'All the fields must be completed!', type: 'error' });
      setIsLoading(false);
      return;
    }

    postSignUp({ name, email, password, repeatPassword })
      .then((res) => {
        alertUser({ text: 'Created!', type: 'success' });
        navigate('/');
      })
      .catch((err) => {
        if (err.response.status === 400)
          alertUser({ text: 'Please fill all fields correctly', type: 'error' });

        if (err.response.status === 409)
          alertUser({ text: 'E-mail already registered', type: 'error' });
        setIsLoading(false);
      });
  }

  return (
    <PageWrapper>
      <Logo />
      <Form onSubmit={sendData} disabled={isLoading}>
        <input
          type="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          disabled={isLoading}
          placeholder="Name"
        />

        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={isLoading}
          placeholder="E-mail"
        />

        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          disabled={isLoading}
          placeholder="Password"
        />

        <input
          type="password"
          required
          value={repeatPassword}
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
          disabled={isLoading}
          placeholder="Confirm Password"
        />

        <button type="submit" disabled={isLoading}>
          Create Account
        </button>
        <StyledLink to="/">Already has an account? Click here!</StyledLink>
      </Form>
    </PageWrapper>
  );
}
