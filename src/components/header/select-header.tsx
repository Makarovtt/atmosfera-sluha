"use client";

import { change } from "@/redux/features/country-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Select, SelectItem } from "@nextui-org/react";
import { MySelect } from "@/components/ui/my-select";
import { CONTACTS_DATA } from "../contacts/data";

export function SelectHeader({ size = "base" }: any) {
	const contactsData = CONTACTS_DATA;
	const idCountry = useAppSelector((state) => state.countryReducer.value);
	const dispatch = useAppDispatch();

	const country = contactsData.find((item) => item.id === idCountry);

	return (
		<>
			<Select
				aria-label="Выбор города"
				size={size}
				placeholder="Выберите город"
				defaultSelectedKeys={[String(country?.id)]}
				className="items-center"
				classNames={{
					trigger: "bg-white py-1 data-[hover=true]:bg-white shadow-none",
					value: `group-data-[has-value=true]:text-cyan-700 font-semibold text-${size}`,
				}}
				onChange={(e) => dispatch(change(Number(e.target.value)))}
			>
				{contactsData &&
					contactsData.map((item) => {
						return (
							<SelectItem key={item.id} value={item.name}>
								{item.name}
							</SelectItem>
						);
					})}
			</Select>
		</>
	);
}
