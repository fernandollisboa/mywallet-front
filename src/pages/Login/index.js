import { useState } from 'react';
import { useNavigate } from 'react-router';
import Form from '../../components/Form';
import Logo from '../../components/Logo';
import { PageWrapper, StyledLink } from '../../styles/shared';
import { postLogin } from '../../services/auth';
import { alertUser } from '../../utils/swalFire';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

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
      alertUser({ text: 'All the fields must be completed', type: 'error' });

      setIsLoading(false);
    } else {
      postLogin({ email, password })
        .then((res) => {
          console.log(res.data.token);
          localStorage.setItem('token', res.data.token);
          alertUser({ text: 'Welcome', type: 'success' });
          navigate('/app/');
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

        <div className="password-input">
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
          <div onClick={togglePasswordVisibility}>
            {passwordVisibility ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </div>
        </div>

        <button type="submit" disabled={isLoading}>
          Login
        </button>
        <StyledLink to="/sign-up">Don't have an account? Click here!</StyledLink>
      </Form>
    </PageWrapper>
  );
}
