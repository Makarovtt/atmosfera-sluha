"use client";

import Image from "next/image";

import Logo from "@/public/images/header/logo.svg";
import Link from "next/link";
import { Navigation, Phone } from "lucide-react";
import { SearchHeader } from "./search-header";
import { SelectHeader } from "./select-header";

export function Header() {
	return (
		<header>
			<div className="max-w-7xl mx-auto my-4 flex justify-between items-center min-screen:px-5">
				<div className="ml-1">
					<Image src={Logo} alt="" />
				</div>
				<div className="text-xl text-cyan-500 w-full max-w-[725px] hidden lg:block">
					<SearchHeader />
				</div>
				<div className="shrink-0 hidden lg:block">
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
				<div className="flex justify-start items-end gap-2 font-semibold ml-10 mr-1 text-cyan-500 lg:hidden">
					<Navigation size={20} className="stroke-1 text-slate-400" />
					Волгоград
				</div>
			</div>
			<div className="block mx-5 my-7 lg:hidden">
				<SearchHeader />
			</div>
		</header>
	);
}
