import React, { useEffect, useRef, useState } from "react";
import mapa from "../public/mapa.jpg";

function test() {
	const canvasRef = useRef(null);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

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
	}
	const [x, y] = [width / 2, height / 2];
	const player = new Player(x, y, "red", 15);

	useEffect(() => {
		const canvas: any = canvasRef.current;

		const c = canvas && canvas.getContext("2d");
		setHeight(window.innerHeight / 1.5);
		setWidth(window.innerWidth / 2);

		const img: any = new Image();
		img.src = mapa.src;
		console.log(mapa);
		console.log(img);

		img.onload = function () {
			c.drawImage(img, 0, 0, width, height);
			player.draw(c);
		};
	}, [Player]);

	function nextQuestion() {}

	return (
		<div>
			<div className="mapa">
				<h1>50.54% moravák</h1>
				<canvas ref={canvasRef} width={width} height={height} />
			</div>
			<div className="blackbox">
				<h1>test</h1>
				<button onClick={nextQuestion}>next</button>
			</div>
		</div>
	);
}

export default test;
