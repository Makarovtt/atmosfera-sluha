"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export function MenuPages() {
	const pathname = usePathname();
	return (
		<>
			<div>
				<Link
					href="/about-us"
					className={clsx(
						"hover:text-gray-950 transition",
						pathname === "/about-us" ? "text-cyan-700 font-semibold" : "text-gray-500",
					)}
				>
					О компании
				</Link>
			</div>
			<div>
				<Link
					href="/services"
					className={clsx(
						"hover:text-gray-950 transition",
						pathname === "/services" ? "text-cyan-700 font-semibold" : "text-gray-500",
					)}
				>
					Услуги
				</Link>
			</div>
			<div>
				<Link
					href="/delivery"
					className={clsx(
						"hover:text-gray-950 transition",
						pathname === "/delivery" ? "text-cyan-700 font-semibold" : "text-gray-500",
					)}
				>
					Выезд специалиста на дом
				</Link>
			</div>
			<div>
				<Link
					href="/contacts"
					className={clsx(
						"hover:text-gray-950 transition",
						pathname === "/contacts" ? "text-cyan-700 font-semibold" : "text-gray-500",
					)}
				>
					Контакты
				</Link>
			</div>
		</>
	);
}
