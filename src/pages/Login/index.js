import { useState } from 'react';
import Swal from 'sweetalert2';
import Form from '../../components/Form';
import Logo from '../../components/Logo';
import { PageWrapper } from '../../styles/shared';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('token');

  function login(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log('login');

    if (!email.trim() || !password.trim())
      alertError({ text: 'All the fields must be completed!' });
  }

  function alertError({ text }) {
    Swal.fire({ title: 'Error!', text, icon: 'error', confirmButtonText: 'Cool' });
  }

  function togglePasswordVisibility() {
    setPasswordVisibility((passwordVisibility) => !passwordVisibility);
  }

  return (
    <PageWrapper>
      <Logo />
      <Form onSubmit={login}>
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
      </Form>
    </PageWrapper>
  );
}
