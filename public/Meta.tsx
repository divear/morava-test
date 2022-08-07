import React from "react";
import Head from "next/head";

interface info {
	title: string;
	keywords: string;
	description: string;
}

function Meta(i: info) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={i.keywords} />
			<meta name="description" content={i.description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<meta name="author" content="divear" />
			<title>{i.title}</title>

			{/* twitter */}
			<meta name="twitter:card" content="./mapa3.jpg" />
			<meta name="twitter:title" content="Jak moc jsi moravák?" />
			<meta
				name="twitter:description"
				content="Zjisti, jak moc jsi z moravy."
			/>
			<meta name="twitter:creator" content="@divear0" />
			<meta name="twitter:image" content="./morava.png" />
			<meta name="twitter:domain" content="https://morava.netlify.app/" />
		</Head>
	);
}

Meta.defaultProps = {
	title: "Morava test",
	keywords:
		"morava, test, morava test, moravia, brno, praha, experiment, brün, Brno, Morava",
	description: "Jak moc se chováš jako moravák?",
};

export default Meta;
