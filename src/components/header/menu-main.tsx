import { MenuMainBottom } from "./menu-main-bottom";
import { MenuMainTop } from "./menu-main-top";

export function MenuMain({ dataMenuMain }: any) {
	return (
		<>
			<MenuMainTop className={"hidden lg-1000:flex z-[100]"} />
			<MenuMainBottom className={"flex lg-1000:hidden"} dataMenuMain={dataMenuMain} />
		</>
	);
}
