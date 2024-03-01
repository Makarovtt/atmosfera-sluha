"use client";

import { AppMap } from "./AppMap";
import { CONTACTS_DATA } from "./data";
import { SelectHeader } from "../header/select-header";
import { CalendarClock, Navigation, Phone } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

const contactsData = CONTACTS_DATA;

export function Contacts() {
	const idCountry = useAppSelector((state) => state.countryReducer.value);
	const country = contactsData.find((item) => item.id === idCountry);
	return (
		<>
			<h1 className="text-center text-2xl text-cyan-700 font-bold mb-5 lg:mt-10">
				Контакты магазинов «Атмосфера слуха»
			</h1>
			{/* <div className="bg-white py-2 px-6 rounded-xl mb-5 flex justify-start items-center max-w-[300px]">
				<span className="mr-6 block">Ваш&nbsp;город:</span> <SelectHeader />
			</div> */}
			<div className="relative flex flex-col mt-10 rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]">
				<div>
					<AppMap steckCurrentCity={country?.karta} />
				</div>
				<div
					className="w-86 bg-white my-5 static order-[-1] rounded-xl p-6 top-10 right-10 
								shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]
								md:absolute md:my-0 md:order-2"
				>
					<h3 className="text-sm text-gray-700 mb-4 flex justify-start items-center pl-4">
						<SelectHeader size="xl" />
					</h3>
					<div className="flex justify-start items-center mb-4">
						<Navigation size={20} className="stroke-1 text-slate-600 mr-3" />
						{country?.street}
					</div>
					{country?.phone &&
						country?.phone.map((item, index) => {
							return (
								<div className="mb-1" key={index}>
									<Link
										href={"tel:89026554530"}
										className="flex justify-start items-center"
									>
										<Phone
											size={20}
											className="stroke-1 text-slate-400 lg:stroke-2 mr-3"
										/>
										{item}
									</Link>
								</div>
							);
						})}

					<div className="flex justify-start items-center mb-2 mt-4">
						<CalendarClock size={20} className="stroke-1 text-slate-600 mr-3" />
						Время работы:
					</div>
					{country?.timeWork &&
						country?.timeWork.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
				</div>
			</div>
		</>
	);
}
