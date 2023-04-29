import React from "react";
import Meta from "../components/Meta";

function Info() {
	return (
		<div className="blackbox center">
			<Meta title="Info" />
			<article>
				<h1>Info a téhle stránce</h1>
				<p className="info">
					Tahle stránka vznikla jako vtip a také pořád je. Byla vysoce
					inspirovaná Northenmetrem od Toma Scotta. Můžete přidávat
					vlastní otázky, pokud budou hodně funny, tak je tam přidám.
					Klidně přidávejte issues a pull requesty na githubu.
				</p>
				<h4 className="info">divear 2023</h4>
			</article>
		</div>
	);
}

export default Info;
