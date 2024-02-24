"use client";
import { Navigation, Phone } from "lucide-react";
import { SelectHeader } from "./select-header";
import Link from "next/link";

export function HeaderContacts() {
	return (
		<>
			<div className="hidden justify-start items-center gap-2 lg:flex">
				<Navigation size={20} className="stroke-2 text-slate-400" />
				<SelectHeader />
			</div>

			<div
				className="mt-2 mb-3 flex flex-col items-start justify-end gap-3
						lg:items-end md:gap-6 lg:flex-row "
			>
				<div
					className="flex justify-start items-end gap-2 font-bold
							lg:hidden"
				>
					<Navigation className="stroke-1 text-cyan-500" />
					Волгоград
				</div>
				<div className="flex justify-start items-end gap-2">
					<Phone size={20} className="stroke-1 text-slate-400 lg:stroke-2" />
					<Link
						href="tel:89026554530"
						className="text-cyan-700 text-base hover:underline"
					>
						{" "}
						8 (902) 655-45-30
					</Link>
				</div>
			</div>
		</>
	);
}
