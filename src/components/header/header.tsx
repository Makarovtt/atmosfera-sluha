"use client";
import Image from "next/image";
import Logo from "@/public/images/header/Logotype.svg";
import { Navigation, Phone } from "lucide-react";
import { SearchHeader } from "./search-header";
import { MenuPages } from "./menu-pages";
import { HeaderContacts } from "./header-contacts";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CONTACTS_DATA } from "../contacts/data";
const contactsData = CONTACTS_DATA;

export function Header() {
	const idCountry = useAppSelector((state) => state.countryReducer.value);
	const country = contactsData.find((item) => item.id === idCountry);
	return (
		<header className="max-w-[1600px] mx-auto">
			<div
				className="mx-1 min-min-screen:mx-5 md:mx-10 2xl:mx-20 4xl:mx-auto
			 my-4 flex min-min-screen:flex-row flex-col justify-between items-center"
			>
				<div
					className="shrink-0 bg-white rounded-lg px-1 min-min-screen:px-4 py-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]
								 hover:opacity-[0.8] transition cursor-pointer"
				>
					<Link href={"/"}>
						<Image src={Logo} alt="" className="w-full min-min-screen:w-[222px]" />
					</Link>
				</div>
				<div className="text-lg w-full hidden lg-1000:flex justify-start gap-4 ml-12">
					<MenuPages />
				</div>
				<div className="shrink-0 hidden lg-1000:block bg-white rounded-lg px-4 pt-1 shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]">
					<HeaderContacts />
				</div>
				<div className="flex justify-start items-end mt-8 gap-2 font-semibold ml-0 min-min-screen:ml-10 mr-1 text-cyan-500 lg-1000:hidden min-min-screen:mt-0">
					<Navigation size={20} className="stroke-1 text-slate-400" />
					{country?.name}
				</div>
			</div>
			<div className="block mx-5 md:mx-10 my-7 lg-1000:hidden">
				<SearchHeader />
			</div>
		</header>
	);
}
