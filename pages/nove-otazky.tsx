import React, { useState } from "react";
import Meta from "../components/Meta";
import { app, getFirestore, addDoc, collection } from "../components/firebase";

const db = getFirestore(app);

function Otazky() {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState(["", "", "", ""]);
	const [isQuestionHover, setIsQuestionHover] = useState(false);
	const [isAnswerHover, setIsAnswerHover] = useState(false);

	const handleChange = (index: number, value: string) => {
		const data = [...answer];
		data.splice(index, 1, value);
		setAnswer(data);
	};

	async function addToDb() {
		try {
			const docRef = await addDoc(
				collection(db, question.replaceAll("/", "")),
				{
					question,
					answer,
				}
			);
			location.href = "vysledky";
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}
	return (
		<div className="center blackbox questions">
			<Meta title="Nová otázka" />

			<h1 className="kvizHead">Přidej novou otázku do kvízu!</h1>

			<div
				className="otazkaPar"
				onMouseEnter={() => setIsQuestionHover(!isQuestionHover)}
			>
				<label htmlFor="otazka">Otázka: </label>
				<input
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
					type="text"
					id="otazka"
					placeholder="Odkuď jsi?"
				/>
			</div>

			<h6 className={isQuestionHover ? "description" : "no"}>
				Otázka by měla být neseriózní, stereotypní, ale hlavně vtipná
				(proto tady jsme lol)
			</h6>
			<div
				className="answersInput"
				onMouseEnter={() => setIsAnswerHover(!isAnswerHover)}
			>
				<label htmlFor="">Odpověď pro Prahu: </label>{" "}
				<input
					value={answer[0]}
					onChange={(e) => handleChange(0, e.target.value)}
					type="text"
					placeholder="Praha"
				/>
				<label htmlFor="">Odpověď pro Brno: </label>{" "}
				<input
					value={answer[1]}
					onChange={(e) => handleChange(1, e.target.value)}
					type="text"
					placeholder="Brno"
				/>
				<label htmlFor="">Odpověď pro Ostravu: </label>{" "}
				<input
					value={answer[2]}
					onChange={(e) => handleChange(2, e.target.value)}
					type="text"
					placeholder="Ostrava"
				/>
				<label htmlFor="">Odpověď pro Ústí: </label>{" "}
				<input
					value={answer[3]}
					onChange={(e) => handleChange(3, e.target.value)}
					type="text"
					placeholder="Ústí nad Labem"
				/>
				<h6 className={isAnswerHover ? "description" : "no"}>
					Odpovědi by měli byt <u>krátké</u> a <u>vtipné</u>, mají
					vystihovat, jak by člověk z daného města odpovědel na danou
					otázku <br /> např. &#34;Co jsi měl na snídani?&#34; odpověd
					pro Ústí by byla &#34;Piko&#34;.
				</h6>
			</div>
			<button onClick={addToDb}>Odeslat</button>
		</div>
	);
}

export default Otazky;
