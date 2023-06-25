import Image from "next/image";
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
					onClick={() => open("https://github.com/divear", "_blank")}
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
						src="https://1.bp.blogspot.com/-hY5-pNrOcKw/XeI_00cpCgI/AAAAAAAAF4A/J7jS49V8kNozycy0PgY6wfc7SUU9gulTgCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340.png"
						alt="Youtube"
					/>
				</button>
			</div>
		</div>
	);
}

export default Footer;
