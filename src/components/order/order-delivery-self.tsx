import { AppMap } from "../contacts/AppMap";
import { CONTACTS_DATA } from "../contacts/data";
import { useAppSelector } from "@/redux/hooks";
import { SelectHeader } from "../header/select-header";

const contactsData = CONTACTS_DATA;

export function OrderDeliverySelf() {
	const idCountry = useAppSelector((state) => state.countryReducer.value);
	const country = contactsData.find((item) => item.id === idCountry);
	return (
		<div className="flex justify-between items-start gap-7">
			<div className="w-2/5 h-[300px]">
				<div className="ml-2 mt-7 max-w-56">
					<SelectHeader size="xl" />
				</div>
				<div className="ml-5 my-2">{country?.street}</div>
				<div className="ml-5 my-2">{country?.phone[0]}</div>
			</div>
			<div className="w-3/5">
				<AppMap steckCurrentCity={country?.karta} height={"300px"} />
			</div>
		</div>
	);
}
