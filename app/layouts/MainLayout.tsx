import { FC } from 'react';
import Footer from '../components/common/Footer/Footer';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
