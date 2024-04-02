import { useEffect } from 'react';
import { Container } from '../container';
import { NavBar } from '../nav-bar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Profile } from '../profile';
import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsAuthenticated,
} from '../../features/user/userSlice';
import { Header } from '../header';

export const Layout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="p-4 flex-2">
          <NavBar />
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
        <div className="p-4 flex-2">
          <div className="flex flex-col gap-5">{!user && <Profile />}</div>
        </div>
      </Container>
    </>
  );
};
