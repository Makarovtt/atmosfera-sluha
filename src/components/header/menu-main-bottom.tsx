"use client";

import { BookUser, ClipboardList, Home, MapPin, TextSearch } from "lucide-react";
import { MyButton } from "../ui/my-button";
import clsx from "clsx";

interface Props {
	className?: React.ComponentProps<"div">["className"];
}
export function MenuMainBottom({ className }: Props) {
	return (
		<>
			<div
				className={clsx(
					"bottom-0 left-0 right-0 fixed py-4 px-4 bg-white z-20",
					"justify-between items-end",
					"shadow-[0_-2px_8px_#00000026]",
					className,
				)}
			>
				<div>
					<MyButton color="none" size="none-min">
						<Home className="shrink-0" />
						Главная
					</MyButton>
				</div>
				<div className="">
					<MyButton color="none" size="none-min">
						<MapPin className="shrink-0" />
						Город
					</MyButton>
				</div>
				<div className="">
					<MyButton color="none" size="none-min">
						<TextSearch className="shrink-0" />
						Каталог
					</MyButton>
				</div>
				<div className="">
					<MyButton color="none" size="none-min">
						<ClipboardList className="shrink-0" />
						Услуги
					</MyButton>
				</div>
				<div className="">
					<MyButton color="none" size="none-min">
						<BookUser className="shrink-0" />
						Контакты
					</MyButton>
				</div>
			</div>
			{/* <div className="fixed top-0 bottom-0 right-10 w-1/2 bg-slate-200"></div> */}
		</>
	);
}
