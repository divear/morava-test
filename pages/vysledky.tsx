import React, { useEffect, useRef, useState } from "react";
import mapa from "../public/mapa2.gif";
import Meta from "../public/Meta";
import reload from "../public/reload.svg";

function Result() {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const canvasRef = useRef(null);
	const [procent, setProcent] = useState("");
	const [px, setPx] = useState<any>();
	const [py, setPy] = useState<any>();
	class Player {
		x: number;
		y: number;
		color: String;
		size: number;
		constructor(x: number, y: number, color: String, size: number) {
			this.x = x;
			this.y = y;
			this.color = color;
			this.size = size;
		}
		draw(c: any) {
			if (typeof window === "undefined") {
				return;
			}

			c.beginPath();
			c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
			c.fillStyle = this.color;
			c.fill();
		}
		update(c: any, mx: number, my: number) {
			if (this.x > 3000 || this.x < 0 || this.y < 0 || this.y > 3000)
				return;
			this.draw(c);
			this.x = this.x + mx;
			this.y = this.y + my;
			this.draw(c);
		}
	}
	let players: any = [];
	useEffect(() => {
		setProcent(localStorage.getItem("p") || "Unknown");
		setPx(localStorage.getItem("x") && localStorage.getItem("x"));
		setPy(localStorage.getItem("y") && localStorage.getItem("y"));

		const canvas: any = canvasRef.current;

		const c = canvas && canvas.getContext("2d");
		setHeight(window.innerHeight / 1.5);
		setWidth(window.innerWidth / 2);

		const img: any = new Image();
		img.src = mapa.src;
		console.log(img.src);

		img.onload = function () {
			console.log(width);

			c.drawImage(img, 0, 0, width, height);
			players.push(new Player(px, py, "yellow", 10));
			players.forEach((p: any) => {
				console.log(p);

				if (!px) return;
				p.draw(c);
			});
		};
	}, [px, py]);

	return (
		<>
			<Meta title="Výsledky" />
			<div className="blackbox center">
				<h1>Výsledky</h1>
				<div className="progressPar">
					<div
						className={procent > "0" ? "progress" : "emptyProgress"}
						style={{
							width: `${procent}%`,
						}}
					>
						<p className="percentText">{procent}% moravák</p>
					</div>
				</div>
				<canvas
					className="resultCanvas"
					ref={canvasRef}
					width={width}
					height={height}
				/>
				<button
					onClick={() => (location.href = "test")}
					className="sb reload"
				>
					Zkusit znovu
				</button>
				<button
					className="shareResultOnTwitter"
					onClick={() =>
						open(
							`https://twitter.com/intent/tweet?text=Jsem+${procent}%25+moravák!&url=https://morava.lol`,
							"_blank"
						)
					}
				>
					Sdílet na
					<img
						className="tLogo"
						src="https://clipartcraft.com/images/white-twitter-logo-icon-8.png"
						alt="twitteru"
					/>
				</button>
			</div>
		</>
	);
}

export default Result;
