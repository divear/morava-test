import type { NextPage } from "next";
import { useState } from "react";
import Meta from "../components/Meta";

const Home: NextPage = () => {
	const [otazka, setOtazka] = useState("Odkud jsem?");
	return (
		<div>
			<Meta title="Morava test" />
			<div className="center blackbox">
				<h1>Morava test,</h1>
				<h2>jak moc jsi z moravy?</h2>
				<button
					onClick={() => (location.href = "/test")}
					onMouseEnter={() => setOtazka("Vodkať sem?")}
					className="introButt"
				>
					{otazka}
				</button>
			</div>
		</div>
	);
};

export default Home;
