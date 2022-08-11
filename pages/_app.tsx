import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

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
			<Component {...pageProps} />
			<div className="socialMedia">
				divear 2022©
				<button
					onClick={() =>
						open(
							"https://twitter.com/divear0?ref_src=twsrc%5Etfw",
							"_blank"
						)
					}
					className="sb share"
					data-size="large"
					data-show-screen-name="false"
					data-show-count="false"
				>
					<img
						className="tLogo"
						src="https://clipartcraft.com/images/white-twitter-logo-icon-8.png"
						alt="Twitter"
					/>
				</button>
				<button
					onClick={() =>
						open("https://github.com/lukascobit", "_blank")
					}
					style={{ backgroundColor: "#0d1117" }}
					className="sb share"
					data-size="large"
					data-show-screen-name="false"
					data-show-count="false"
				>
					<img
						className="gLogo"
						src="https://pngimg.com/uploads/github/github_PNG80.png"
						alt="Github"
					/>
				</button>
				<button
					onClick={() =>
						open(
							"https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
							"_blank"
						)
					}
					style={{ backgroundColor: "#0d1117" }}
					className="sb share ytButton"
					data-size="large"
					data-show-screen-name="false"
					data-show-count="false"
				>
					<img
						className="ytLogo"
						src="https://gizmos.republica.com/files/2014/05/youtube-logo.jpg"
						alt="Youtube"
					/>
				</button>
			</div>
		</>
	);
}

export default MyApp;
