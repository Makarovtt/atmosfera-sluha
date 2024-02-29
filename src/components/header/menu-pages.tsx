"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { objServices } from "../services/sevices";
import { Button, Link } from "@nextui-org/react";

export function MenuPages() {
	const pathname = usePathname();
	return (
		<>
			<div>
				<Link
					href="/about-us"
					size="lg"
					className={clsx(
						"",
						pathname === "/about-us" ? "text-cyan-700 font-semibold" : "text-gray-600",
					)}
				>
					О компании
				</Link>
			</div>
			<div className="relative group">
				<Link
					href="/services"
					size="lg"
					className={clsx(
						"flex justify-start items-center",
						pathname === "/services" ? "text-cyan-700 font-semibold" : "text-gray-600",
					)}
				>
					Услуги <ChevronDown className="ml-1 size-5 group-hover:rotate-180 transition" />
				</Link>
				{objServices && (
					<div
						className="absolute bg-white rounded-lg px-1 py-2 w-[300px] z-[70] hidden
								shadow-[0px_0px_4px_1px_rgba(0,0,0,0.16)]
								group-hover:block"
					>
						{objServices.map((item) => {
							return (
								<Button
									as={Link}
									href={item.href}
									key={item.id}
									className="py-1 w-full text-left text-sm bg-white hover:bg-gray-100 justify-start"
								>
									{item.title}
								</Button>
							);
						})}
					</div>
				)}
			</div>
			<div>
				<Link
					href="/services/dostavka"
					size="lg"
					className={clsx(
						"",
						pathname === "/services/dostavka"
							? "text-cyan-700 font-semibold"
							: "text-gray-600",
					)}
				>
					Выезд специалиста на дом
				</Link>
			</div>
			<div>
				<Link
					href="/contacts"
					size="lg"
					className={clsx(
						"",
						pathname === "/contacts" ? "text-cyan-700 font-semibold" : "text-gray-600",
					)}
				>
					Контакты
				</Link>
			</div>
		</>
	);
}
