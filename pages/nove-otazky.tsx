import React, { useState } from "react";
import Meta from "../components/Meta";
import { app, getFirestore, addDoc, collection } from "../components/firebase";

const db = getFirestore(app);

function Otazky() {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState(["", "", "", ""]);
	console.log(answer);

	const handleChange = (index: number, value: string) => {
		const data = [...answer];
		data.splice(index, 1, value);
		setAnswer(data);
	};

	async function addToDb() {
		try {
			console.log("adding to db");

			const docRef = await addDoc(collection(db, question), {
				question,
				answer,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}
	return (
		<div className="center blackbox questions">
			<Meta title="Nová otázka" />

			<h1>Přidej novou otázku do kvízu!</h1>

			<label htmlFor="otazka">Otázka: </label>
			<input
				value={question}
				onChange={(e) => setQuestion(e.target.value)}
				type="text"
				id="otazka"
				placeholder="Odkuď jsi?"
			/>

			<div className="answersInput">
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
			</div>
			<button onClick={addToDb}>Odeslat</button>
		</div>
	);
}

export default Otazky;
