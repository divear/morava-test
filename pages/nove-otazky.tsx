import React from "react";
import Meta from "../public/Meta";

function Otazky() {
	return (
		<div className="center blackbox questions">
			<Meta title="Nová otázka" />
			<h1>Přidej novou otázku do kvízu!</h1>
			<label htmlFor="otazka">Otázka: </label>
			<input type="text" id="otazka" placeholder="Odkuď jsi?" />
			<div className="answersInput">
				<label htmlFor="">Odpověď pro Prahu: </label>{" "}
				<input type="text" placeholder="Praha" />
				<label htmlFor="">Odpověď pro Brno: </label>{" "}
				<input type="text" placeholder="Brno" />
				<label htmlFor="">Odpověď pro Ostravu: </label>{" "}
				<input type="text" placeholder="Ostrava" />
				<label htmlFor="">Odpověď pro Ústí: </label>{" "}
				<input type="text" placeholder="Ústí nad Labem" />
			</div>
			<button>Odeslat</button>
		</div>
	);
}

export default Otazky;
