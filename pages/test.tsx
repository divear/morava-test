import React, { useEffect, useRef, useState } from "react";
import mapa from "../public/mapa.jpg";
import questions from "../public/questions.json";

function test() {
	const canvasRef = useRef(null);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [question, setQuestion] = useState("Who?");
	const [answer, setAnswer] = useState(["adksfkl", "asdfas", "asdfd", "ddd"]);
	const [level, setLevel] = useState(0);
	const [px, setPx] = useState(0);
	const [py, setPy] = useState(0);

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
		const canvas: any = canvasRef.current;

		const c = canvas && canvas.getContext("2d");
		setHeight(window.innerHeight / 1.5);
		setWidth(window.innerWidth / 2);
		if (!px) {
			let [x, y] = [width / 2, height / 2];
			setPx(x);
			setPy(y);
		}

		const img: any = new Image();
		img.src = mapa.src;

		img.onload = function () {
			c.drawImage(img, 0, 0, width, height);
			players.push(new Player(px, py, "red", 15));
			players.forEach((p: any) => {
				if (!px) return;

				console.log(p);
				p.draw(c);
			});
		};
	}, [players, level]);

	useEffect(() => {
		setQuestion(questions.questions[level].q);
		setAnswer(questions.questions[level].a);
	}, [level]);

	const rn = [0, 1, 2, 3];

	function nextLevel(answerScore: number) {
		setLevel(level + 1);
		switch (answerScore) {
			case 0:
				console.log("Praha");
				//const canvas: any = canvasRef.current;
				//const c = canvas && canvas.getContext("2d");
				//const player = new Player(x, y, "red", 105);
				//players[0].update(c)

				//players.push(new Player(100, y, "blue", 30));
				//console.log(players);
				console.log(px);

				setPx(px + 100);

				return;
			case 1:
				console.log("Brno");
				return;
			case 2:
				console.log("Ostrava");
				return;
			case 3:
				console.log("Ústí");
				return;
		}
	}
	return (
		<div>
			<div className="mapa">
				<h1>50.54% moravák</h1>
				<canvas ref={canvasRef} width={width} height={height} />
			</div>
			<div className="blackbox">
				<h1>{question}</h1>
				<div className="answers">
					<button onClick={() => nextLevel(0)}>
						{"1. " + answer[rn[0]]}
					</button>
					<button onClick={() => nextLevel(1)}>
						{"2. " + answer[rn[1]]}
					</button>
					<button onClick={() => nextLevel(2)}>
						{"3. " + answer[rn[2]]}
					</button>
					<button onClick={() => nextLevel(3)}>
						{"4. " + answer[rn[3]]}
					</button>
				</div>
			</div>
		</div>
	);
}

export default test;
