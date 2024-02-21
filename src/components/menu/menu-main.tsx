import { MenuMainBottom } from "./menu-main-bottom";
import { MenuMainTop } from "./menu-main-top";

export function MenuMain() {
	return (
		<>
			<MenuMainTop className={"hidden lg:flex"} />
			<MenuMainBottom className={"flex lg:hidden"} />
		</>
	);
}
