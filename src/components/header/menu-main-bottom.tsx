"use client";

import { Suspense } from "react";
import { BookUser, Home } from "lucide-react";
import { MyButton } from "../ui/my-button";
import clsx from "clsx";

import { Link } from "@nextui-org/react";
import { ModalChangeCity } from "./modal-change-city";
import { ModalServices } from "./modal-sevices";
import { ModalCatalog } from "./modal-catalog";

interface Props {
	className?: React.ComponentProps<"div">["className"];
}
export function MenuMainBottom({ className }: any) {
	return (
		<>
			<div
				className={clsx(
					"bottom-0 left-0 right-0 fixed py-4 px-4 bg-white z-30",
					"justify-between items-end",
					"shadow-[0_-2px_8px_#00000026]",
					className,
				)}
			>
				<div>
					<MyButton as={Link} href="/" color="none" size="none-min">
						<Home className="shrink-0" />
						Главная
					</MyButton>
				</div>
				<div className="">
					<ModalChangeCity />
				</div>
				<div className="">
					<ModalCatalog />
				</div>
				<div className="">
					<Suspense fallback={<></>}>
						<ModalServices />
					</Suspense>
				</div>
				<div className="">
					<MyButton as={Link} href="/contacts" color="none" size="none-min">
						<BookUser className="shrink-0" />
						Контакты
					</MyButton>
				</div>
			</div>
			{/* <div className="fixed top-0 bottom-0 right-10 w-1/2 bg-slate-200"></div> */}
		</>
	);
}
