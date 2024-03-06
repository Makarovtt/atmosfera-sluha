"use client";
import { Link, Button, Badge } from "@nextui-org/react";
import clsx from "clsx";
import { SearchHeader } from "./search-header";
import { useEffect, useState } from "react";
import { MenuTopButtonGroup } from "./menu-top-button-group";
interface Props {
	className?: React.ComponentProps<"div">["className"];
}
export function MenuMainTop({ className }: Props) {
	const [header, setHeader] = useState(false);

	const scrollHeader = () => {
		if (window.scrollY >= 50) {
			setHeader(true);
		} else {
			setHeader(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", scrollHeader);
		return () => {
			window.addEventListener("scroll", scrollHeader);
		};
	}, []);

	return (
		<div className="max-w-[1600px] mx-auto ">
			<div
				className={clsx(
					"justify-between items-center transition",
					className,
					header
						? "bg-white max-w-full mx-auto py-4 z-30 fixed top-0 left-0 right-0 w-full md:px-10 2xl:mx-auto 4xl:mx-auto shadow-[0_1px_4px_rgba(0,0,0,.16)]"
						: "bg-transparent md:mx-10 2xl:mx-20 4xl:mx-auto",
				)}
			>
				<div className="grow-0 justify-center shrink-0 w-[250px]">
					<div
						className="w-full bg-cyan-700 shadow-[0_1px_2px_0_rgba(0,0,0,0.16)] rounded-lg
				hover:bg-cyan-600 transition text-center"
					>
						<Button
							href="/catalog"
							as={Link}
							size="lg"
							color="primary"
							radius="lg"
							variant="flat"
							className="w-full bg-transparent text-white"
						>
							Каталог
						</Button>
					</div>
				</div>

				<div className="hidden sm:block w-full mx-12 relative z-[50]">
					<SearchHeader />
				</div>
				<div className="flex justify-end items-center gap-6 bg-white px-5 py-1 shadow-[0_1px_2px_0_rgba(0,0,0,0.16)] rounded-lg">
					<MenuTopButtonGroup />
				</div>
			</div>
		</div>
	);
}
