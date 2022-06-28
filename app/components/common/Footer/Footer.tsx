import { useRouter } from 'next/router';
import { FC } from 'react';

import s from './Footer.module.scss';

const navItems = [
  { icon: 'home', link: '/' },
  { icon: 'explore', link: '/explore' },
  { icon: 'place', link: '/place' },
  { icon: 'person_outline', link: '/person' }
];

const Footer: FC = () => {
  const { push } = useRouter();

  return (
    <footer className={s.footer}>
      <nav className={s.footer__nav}>
        {navItems.map((item) => {
          return (
            <button onClick={() => push(item.link)} key={item.icon}>
              <span className="material-icons-outlined">{item.icon}</span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
