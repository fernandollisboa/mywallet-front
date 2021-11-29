import { IoExitOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { HeaderWrapper } from '../../styles/shared';

export default function Header() {
  const name = localStorage.getItem('username');
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate('/');
  }
  return (
    <HeaderWrapper>
      <h1>Hello, {name}</h1>
      <IoExitOutline onClick={logout} />
    </HeaderWrapper>
  );
}
