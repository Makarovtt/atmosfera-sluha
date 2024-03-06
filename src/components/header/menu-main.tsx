import { MenuMainBottom } from "./menu-main-bottom";
import { MenuMainTop } from "./menu-main-top";

export function MenuMain() {
	return (
		<>
			<MenuMainTop className={"hidden lg-1000:flex z-[30]"} />
			<MenuMainBottom className={"flex lg-1000:hidden"} />
		</>
	);
}
