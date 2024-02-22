"use client";
import { Link, Button } from "@nextui-org/react";
import clsx from "clsx";
import { SearchHeader } from "../header/search-header";
import { Heart, Kanban, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
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
		<div
			className={clsx(
				"justify-between items-center transition",
				className,
				header
					? "bg-white py-4 fixed top-0 left-0 right-0 w-full md:px-10 2xl:px-20 4xl:px-auto px-auto shadow-[0_1px_4px_rgba(0,0,0,.16)]"
					: "bg-transparent max-w-[2400px] md:mx-10 2xl:mx-20 4xl:mx-auto mx-auto",
			)}
		>
			<div className="grow-0 justify-center shrink-0 w-[250px]">
				<div
					className="w-full bg-cyan-700 shadow-[0_1px_2px_0_rgba(0,0,0,0.16)] rounded-lg
				hover:bg-cyan-600 transition"
				>
					<Button
						as={Link}
						size="lg"
						color="primary"
						radius="lg"
						href="#"
						variant="flat"
						className="w-full bg-transparent text-white"
					>
						Каталог
					</Button>
				</div>
			</div>

			<div className="hidden sm:block w-full mx-12 relative z-[60]">
				<SearchHeader />
			</div>
			<div className="flex justify-end items-center gap-6 bg-white px-5 py-1 shadow-[0_1px_2px_0_rgba(0,0,0,0.16)] rounded-lg">
				<Button isIconOnly className="bg-transparent text-gray-500 hover:text-gray-900">
					<Kanban size={30} className="stroke-1" />
				</Button>
				<Button isIconOnly className="bg-transparent text-gray-500 hover:text-gray-900">
					<Heart size={30} className="stroke-1" />
				</Button>
				<Button isIconOnly className="bg-transparent text-gray-500 hover:text-gray-900">
					<ShoppingCart size={30} className="stroke-1" />
				</Button>
			</div>
		</div>
	);
}
