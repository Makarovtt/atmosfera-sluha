"use client";

import { change } from "@/redux/features/country-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { SelectItem } from "@nextui-org/react";
import { MySelect } from "@/components/ui/my-select";
import { CONTACTS_DATA } from "../contacts/data";

export function SelectHeader() {
	const contactsData = CONTACTS_DATA;
	const idCountry = useAppSelector((state) => state.countryReducer.value);
	const dispatch = useAppDispatch();

	const country = contactsData.find((item) => item.id === idCountry);

	return (
		<>
			<MySelect
				color="none"
				aria-label="Выбор города"
				size="sm"
				placeholder="Выберите город"
				defaultSelectedKeys={[String(country?.id)]}
				className="items-center"
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
			</MySelect>
		</>
	);
}
