"use client";

import Image from "next/image";

import Logo from "@/public/images/header/Logotype.svg";
import Link from "next/link";
import { Navigation, Phone } from "lucide-react";
import { SearchHeader } from "./search-header";
import { SelectHeader } from "./select-header";

export function Header() {
	return (
		<header>
			<div
				className="max-w-[2400px] mx-5 md:mx-10 2xl:mx-20 4xl:mx-auto
			 my-4 flex min-min-screen:flex-row flex-col justify-between items-center"
			>
				<div className="shrink-0 bg-white rounded-lg px-4 py-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]">
					<Image src={Logo} alt="" className="w-[222px]" />
				</div>
				<div className="text-lg w-full hidden lg-1000:flex justify-start gap-4 ml-12">
					<div>
						<Link
							color="foreground"
							href="#"
							className="text-gray-500 hover:text-gray-950 transition"
						>
							О компании
						</Link>
					</div>
					<div>
						<Link href="#" aria-current="page" className="text-cyan-700 transition">
							Услуги
						</Link>
					</div>
					<div>
						<Link
							color="foreground"
							href="#"
							className="text-gray-500 hover:text-gray-950 transition"
						>
							Выезд специалиста на дом
						</Link>
					</div>
					<div>
						<Link
							color="foreground"
							href="#"
							className="text-gray-500 hover:text-gray-950 transition"
						>
							Контакты
						</Link>
					</div>
				</div>
				<div className="shrink-0 hidden lg-1000:block bg-white rounded-lg px-4 pt-1 shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]">
					<div className="hidden justify-start items-center gap-2 lg:flex">
						<Navigation size={20} className="stroke-2 text-slate-400" />
						<SelectHeader />
					</div>
					<div
						className="mt-2 mb-3 flex flex-col items-start justify-end gap-3
						lg:items-end md:gap-6 lg:flex-row "
					>
						<div
							className="flex justify-start items-end gap-2 font-bold
							lg:hidden"
						>
							<Navigation className="stroke-1 text-cyan-500" />
							Волгоград
						</div>
						<div className="flex justify-start items-end gap-2">
							<Phone size={20} className="stroke-1 text-slate-400 lg:stroke-2" />
							<Link
								href="tel:89026554530"
								className="text-cyan-700 text-base hover:underline"
							>
								{" "}
								8 (902) 655-45-30
							</Link>
						</div>
					</div>
				</div>
				<div className="flex justify-start items-end mt-8 gap-2 font-semibold ml-10 mr-1 text-cyan-500 lg-1000:hidden min-min-screen:mt-0">
					<Navigation size={20} className="stroke-1 text-slate-400" />
					Волгоград
				</div>
			</div>
			<div className="block mx-5 md:mx-10 my-7 lg-1000:hidden">
				<SearchHeader />
			</div>
		</header>
	);
}
