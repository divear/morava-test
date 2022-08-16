import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Footer from "../components/Footer";
import logo from "../public/moravaLogo.png";
import burger from "../public/burger.png";

function MyApp({ Component, pageProps }: AppProps) {
	const [modal, setModal] = useState(false);
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		router.events.on("hashChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
			router.events.off("hashChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            });
        `,
				}}
			/>
			{/* header*/}
			<div onClick={() => (location.href = "/")} className="logo">
				<Image src={logo} width={160} height={90} />
			</div>
			{/* burger menu */}
			<div className="burger" onClick={() => setModal(!modal)}>
				<Image src={burger} width={50} height={50}></Image>
			</div>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
