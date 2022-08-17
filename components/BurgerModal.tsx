import Link from "next/link";
import React from "react";

function BurgerModal() {
	return (
		<div className="burgerPar">
			<div className="burgerModal">
				<Link href="/test">test</Link>
				<br />
				<Link href="/info">info</Link>
				<br />
				<Link href="https://github.com/lukascobit/morava-test">
					github
				</Link>
			</div>
		</div>
	);
}

export default BurgerModal;
