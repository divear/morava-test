import React from "react";

function Footer() {
	return (
		<div>
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
						src="https://www.logolynx.com/images/logolynx/a0/a09d30b78b51bd1bfd6403019b1e5958.png"
						alt="Youtube"
					/>
				</button>
			</div>
		</div>
	);
}

export default Footer;
