import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<div className="socialMedia">
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
						alt=""
					/>
				</button>
			</div>
		</>
	);
}

export default MyApp;
