import type { NextPage } from 'next';
import Footer from '../app/components/common/Footer/Footer';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Footer />
    </div>
  );
};

export default Home;
