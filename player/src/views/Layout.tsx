import { useUserContext } from 'mediastore/contextHooks';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
