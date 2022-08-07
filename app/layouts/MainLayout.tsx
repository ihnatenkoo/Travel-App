import { FC } from 'react';

import { Footer } from '@/elements/index';

interface IMainLayout {
	children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
	return (
		<main className="main-container">
			{children}
			<Footer />
		</main>
	);
};

export default MainLayout;
