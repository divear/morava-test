import Image from "next/image";
import React from "react";

function NotFound() {
	return (
		<div className="blackbox center">
			<h1>Ztratil ses lol</h1>
			<p>404 chyba - stránka nebyla nalezana</p>
			<br />
			<img
				src="https://www.publicdomainpictures.net/pictures/70000/velka/people-i-do-not-know.jpg"
				className="imgShrug"
			/>
			<h1>Radši zkus, jestli jsi moravák:</h1>
			<button onClick={() => (location.href = "/test")}>ok</button>
		</div>
	);
}

export default NotFound;
