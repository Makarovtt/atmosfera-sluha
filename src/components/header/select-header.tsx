import { SelectItem } from "@nextui-org/react";
import { MySelect } from "../ui/my-select";

export function SelectHeader() {
	return (
		<MySelect
			color="none"
			aria-label="Выбор города"
			size="sm"
			placeholder="Выберете город"
			disableSelectorIconRotation
			// selectorIcon={<SelectorIcon />}
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
	);
}
