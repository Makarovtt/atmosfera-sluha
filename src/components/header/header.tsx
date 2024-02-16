import Image from "next/image";
// import Logo from "/public/images/header/logo.svg";
import Logo from "@/public/images/header/logo.svg";
import { Button } from "@nextui-org/react";

export function Header() {
	return (
		<header>
			<div className="max-w-7xl mx-auto my-4 flex justify-between items-center">
				<div>
					<Image src={Logo} alt="" />
				</div>
				<div className="text-xl text-cyan-500">
					опыт с <span className="text-4xl font-extrabold italic">2009</span> г.
				</div>
				<div>
					<Button className="text-red-500">Click</Button>
				</div>
			</div>
		</header>
	);
}
