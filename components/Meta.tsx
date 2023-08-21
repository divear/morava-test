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
			<meta
				content="MoravaTest - Jak moc jsi moravák?"
				property="og:title"
			/>
			<meta content="https://morava.netlify.app" property="og:url" />
			<meta
				content="https://morava.netlify.app/_next/static/media/mapa3.ca826749.jpg"
				property="og:image"
			/>
			<meta property="og:type" content="website" />
			<meta
				content="Zjisti, jak moc jsi z Moravy"
				property="og:description"
			/>{" "}
			<meta
				content="#ff8000"
				data-react-helmet="true"
				name="theme-color"
			/>
			<title>{i.title}</title>
			{/* twitter */}
			<meta name="twitter:card" content="summary_large_image"></meta>
			<meta name="twitter:title" content="Jak moc jsi moravák?" />
			<meta
				name="twitter:description"
				content="Zjisti, jak moc jsi z Moravy."
			/>
			<meta name="twitter:creator" content="@divear0" />
			<meta
				name="twitter:image"
				content="https://morava.lol/_next/static/media/mapa3.ca826749.jpg"
			/>
			<meta name="twitter:domain" content="https://morava.lol/" />
		</Head>
	);
}

Meta.defaultProps = {
	title: "Morava test",
	keywords:
		"Morava,xd,morava,test,morava test,moravia,brno,praha,experiment,brün,Brno,Morava,lol,Lol,moravatest,morava.lol,moravia.lol,mora,kviz,Brün",
	description: "Jak moc se chováš jako moravák?",
};

export default Meta;
