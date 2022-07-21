import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
	const [otazka, setOtazka] = useState("Odkud jsem?");
	return (
		<div>
			<div className="blackbox">
				<h1>Morava test,</h1>
				<h2>jak moc jsi z moravy?</h2>
				<button
					onMouseEnter={() => setOtazka("Vodkať sem?")}
					className="introButt"
				>
					{otazka}
				</button>
			</div>
			<p className="smallInfo">
				*{" "}
				<span title="Založeno? Založeno na čem? Na tvojem kokotovi? Prosím zavři hubu a používej slova normálně, ty stupidní troglodyte, myslíš si, že nám Bůh dal svobodu slova, jen abychom říkali náhodná slova, které nemají s tématem konverzace nic společného? Vždycky se ptáš, proč se s tebou nikdo nebaví, nebo proč s tebou nikdo nesdílí jejich názory, protože říkáš náhodné sračky jako poggers, based, cringe a když se je snažíš vysvětlit tak jen řekneš, že jsou vtipné. Jako cože? Co si kurva myslíš, že je na tom vtipného, jako myslíš si, že se jen tak staneš stand-up komikem, který dostane bouřlivý potlesk, jen proto, že řekl cum na jevišti. ANI NÁHODOU IDIOTE. Takže prosím zavři hubu a používej slova, tak jak mají být používány debile.">
					Založeno
				</span>{" "}
				na vědeckém výzkumu
			</p>
		</div>
	);
};

export default Home;
