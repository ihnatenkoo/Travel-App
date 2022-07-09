import { FC } from 'react';
import Footer from '../components/common/Footer/Footer';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <main className="main-container">
      <div className="content-container">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
