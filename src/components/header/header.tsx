import Image from "next/image";
// import Logo from "/public/images/header/logo.svg";
import Logo from "@/public/images/header/logo.svg";

export function Header() {
	return (
		<header>
			<div className="max-w-8xl mx-auto my-2 flex justify-between items-center">
				<div>
					<Image src={Logo} alt="" />
				</div>
				<div></div>
				<div></div>
			</div>
		</header>
	);
}
