import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface IMeta {
	title: string;
	description?: string;
	image?: string;
}

export const Meta: FC<IMeta> = ({ title, description, image }) => {
	const { asPath } = useRouter();
	const currentUrl = `${process.env.NEXT_PUBLIC_URL}${asPath}`;
	const pageTitle = `${title} | Travel App`;

	return (
		<Head>
			<title itemProp="headline">{pageTitle}</title>
			{description ? (
				<>
					<meta itemProp="description" name="description" content={description} />
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={title} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || '/logo.jpg'} />
					<meta property="og:site_name" content="Travel App" />
					<meta property="og:description" content={description} />
				</>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
		</Head>
	);
};
