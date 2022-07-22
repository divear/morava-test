import React, { useEffect, useRef, useState } from "react";
import mapa from "../public/mapa.jpg";
import questions from "../public/questions.json";

function test() {
	const canvasRef = useRef(null);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [question, setQuestion] = useState("Who?");
	const [answer, setAnswer] = useState(["adksfkl", "asdfas", "asdfd", "ddd"]);
	const [level, setLevel] = useState("");
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

		img.onload = function () {
			c.drawImage(img, 0, 0, width, height);
			player.draw(c);
		};
	}, [Player]);

	useEffect(() => {
		console.log(questions.questions);
	}, []);

	return (
		<div>
			<div className="mapa">
				<h1>50.54% moravák</h1>
				<canvas ref={canvasRef} width={width} height={height} />
			</div>
			<div className="blackbox">
				<h1>{question}</h1>
				<div className="answers">
					<button>{answer[0]}</button>
					<button>{answer[1]}</button>
					<button>{answer[2]}</button>
					<button>{answer[3]}</button>
				</div>
			</div>
		</div>
	);
}

export default test;
