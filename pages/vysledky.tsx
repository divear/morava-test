import React, { useEffect, useRef, useState } from "react";
import mapa from "../public/mapa2.gif";
import reload from "../public/reload.svg";

function result() {
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
			<div className="blackbox center">
				<h1>Výsledky</h1>
				<h2>{procent}% moravák</h2>
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
			</div>
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
					Follow @divear0
				</button>
				<h1>dlfsd</h1>
			</div>
		</>
	);
}

export default result;
