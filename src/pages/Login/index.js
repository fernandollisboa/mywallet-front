import { useState } from 'react';
import { useNavigate } from 'react-router';
import Form from '../../components/Form';
import Logo from '../../components/Logo';
import { PageWrapper, StyledLink } from '../../styles/shared';
import { postLogin } from '../../services/auth';
import { alertUser } from '../../utils/swalFire';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  //const token = localStorage.getItem('token'); TO-DO verify localstorage

  function sendData(e) {
    e.preventDefault();
    setIsLoading(true);

    if (!email.trim() || !password.trim()) {
      alertUser({ text: 'All the fields must be completed' });

      setIsLoading(false);
    } else {
      postLogin({ email, password })
        .then((res) => {
          alertUser({ text: 'Welcome', type: 'success' });
          console.log(res);
          navigate('/home');
        })
        .catch((err) => {
          if (err.response.status === 401)
            alertUser({ text: 'Please check your password', type: 'error' });

          if (err.response.status === 400)
            alertUser({ text: 'Please fill all fields correctly', type: 'error' });

          if (err.response.status === 500)
            alertUser({ text: 'Internal Server Error', type: 'error' });

          setIsLoading(false);
        });
    }
  }

  function togglePasswordVisibility() {
    setPasswordVisibility((passwordVisibility) => !passwordVisibility);
  }

  return (
    <PageWrapper>
      <Logo />
      <Form onSubmit={sendData}>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={isLoading}
          placeholder="E-mail"
        />
        <input
          type={passwordVisibility ? 'text' : 'password'}
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          disabled={isLoading}
          placeholder="Password"
        />
        <button type="submit" disabled={isLoading}>
          Login
        </button>
        <button onClick={togglePasswordVisibility}>mudar visibilidade senha</button>
        <StyledLink to="/sign-up">Don't have an account? Click here!</StyledLink>
      </Form>
    </PageWrapper>
  );
}
