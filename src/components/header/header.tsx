"use client";

import Image from "next/image";

import Logo from "@/public/images/header/logo.svg";
import Link from "next/link";
import { MapPin, Menu, Navigation, Phone } from "lucide-react";
import { MySelect, MySelectItem } from "../ui/my-select";
import { SelectItem } from "@nextui-org/react";

export function Header() {
	return (
		<header>
			<div className="max-w-7xl mx-auto my-4 flex justify-between items-center min-screen:px-5">
				<div>
					<Image src={Logo} alt="" />
				</div>
				<div className="text-xl text-cyan-500 hidden lg:block">
					опыт с <span className="text-4xl font-extrabold italic">2009</span> г.
				</div>
				<div className="shrink-0 hidden sm:block">
					<div className="hidden md:block">
						<MySelect
							color="primary"
							placeholder="Выберете город"
							labelPlacement={"outside-left"}
							label="Выберете&nbsp;город:"
							variant={"underlined"}
							defaultSelectedKeys={["vlgrd"]}
							className="items-center"
						>
							<SelectItem key="vlgrd" value="Волгоград">
								Волгоград
							</SelectItem>
							<SelectItem key="astrhn" value="Астрахань">
								Астрахань
							</SelectItem>
							<SelectItem key="stvrpl" value="Ставрополь">
								Ставрополь
							</SelectItem>
						</MySelect>
					</div>
					<div
						className="mt-5 mb-3 flex flex-col items-start justify-end gap-3
									md:items-end md:gap-6 md:flex-row "
					>
						<div
							className="flex justify-start items-end gap-2 font-bold
									md:hidden"
						>
							<Navigation className="stroke-1 text-cyan-500" />
							Волгоград
						</div>
						<div className="flex justify-start items-end gap-2">
							<MapPin className="stroke-1 text-cyan-500 md:stroke-2" />
							Проспект Ленина, 40
						</div>
						<div className="flex justify-start items-end gap-2">
							<Phone className="stroke-1 text-cyan-500 md:stroke-2" />
							<Link href="tel:89026554530" className="text-cyan-700 hover:underline">
								{" "}
								8 (902) 655-45-30
							</Link>
						</div>
					</div>
				</div>
				<div className="block sm:hidden">
					<Menu size={50} color="#888888" className="ml-10" />
				</div>
			</div>
		</header>
	);
}
