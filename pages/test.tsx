import React, { useEffect, useRef, useState } from "react";
import mapa from "../public/mapa.jpg";
import Meta from "../components/Meta";
import questions from "../public/questions.json";

function Test() {
	const canvasRef = useRef(null);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [question, setQuestion] = useState("Who?");
	const [answer, setAnswer] = useState(["adksfkl", "asdfas", "asdfd", "ddd"]);
	const [level, setLevel] = useState(0);
	const [px, setPx] = useState(0);
	const [py, setPy] = useState(0);
	const [procent, setProcent] = useState(50);
	const [imgIndex, setImgIndex] = useState(0);
	const isImage = answer[3] == "img";

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
				p.draw(c);
			});
		};
	}, [players, level]);

	useEffect(() => {
		setQuestion(questions.questions[level].q);
		setAnswer(questions.questions[level].a);
		if (isImage) {
			console.log(imgIndex);

			setImgIndex(imgIndex + 1);
		}
	}, [level]);

	function nextLevel(answerScore: number) {
		setLevel(level + 1);

		//finish
		if (level == questions.questions.length - 1) {
			localStorage.setItem("p", procent.toString());
			localStorage.setItem("x", px.toString());
			localStorage.setItem("y", py.toString());

			window.location.href = "vysledky";
		}
		const r = Math.round(Math.random() * 10);
		switch (answerScore) {
			case 0:
				setPx(px - 20);
				setPy(py - 10);
				setProcent(procent - 10 - r);
				return;
			case 1:
				setPx(px + 30);
				setPy(py + 30);
				setProcent(procent + 10 + r);
				return;
			case 2:
				setPx(px + 30);
				setPy(py - 1);
				setProcent(procent + 5 + r);
				return;
			case 3:
				setPx(px - 30);
				setPy(py - 20);
				setProcent(procent - 15 - r);
				return;
		}
	}
	return (
		<div>
			<Meta title="Jak moc jsi moravák?" />
			<div className="mapa">
				<h1>{procent}% moravák</h1>
				<canvas ref={canvasRef} width={width} height={height} />
			</div>
			<div className="blackbox">
				<h1>{question}</h1>
				<div className="answers">
					<button
						style={{ order: Math.round(Math.random() * 3) }}
						onClick={() => nextLevel(0)}
					>
						{answer[0]}
					</button>
					<button onClick={() => nextLevel(1)}>{answer[1]}</button>
					<button
						style={{ order: Math.round(Math.random() * 3) }}
						onClick={() => nextLevel(2)}
					>
						{answer[2]}
					</button>
					<button
						className={isImage ? "imgButton" : undefined}
						onClick={() => nextLevel(3)}
					>
						{answer[3]}
						<img
							className={isImage ? "buttonImage" : "no"}
							src={isImage ? questions.urls[imgIndex] : undefined}
							alt=""
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Test;
