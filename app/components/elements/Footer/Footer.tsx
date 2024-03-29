import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';

import s from './Footer.module.scss';

interface INavItem {
	icon: string;
	link: string;
}

const navItems: Array<INavItem> = [
	{ icon: 'home', link: '/' },
	{ icon: 'explore', link: '/explore' },
	{ icon: 'place', link: '/place' },
	{ icon: 'person_outline', link: '/person' },
];

export const Footer: FC = () => {
	const { push, pathname } = useRouter();

	return (
		<footer className={s.footer}>
			<nav className={s.footer__nav}>
				{navItems.map((item) => (
					<button
						onClick={() => push(item.link)}
						className={cn(s.button, {
							[s.active]: pathname === item.link,
						})}
						key={item.icon}
					>
						<span className="material-icons-outlined">{item.icon}</span>
					</button>
				))}
			</nav>
		</footer>
	);
};
