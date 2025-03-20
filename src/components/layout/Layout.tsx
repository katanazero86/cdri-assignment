import { Outlet } from 'react-router';
import Header from '../header/Header.tsx';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
