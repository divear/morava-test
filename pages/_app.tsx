import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Footer from "../components/Footer";
import logo from "../public/moravaLogo.png";
import Image from "next/image";

function MyApp({ Component, pageProps }: AppProps) {
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
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
