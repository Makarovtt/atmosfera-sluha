import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";

export function ServiceItem({ title, href, bg }: any) {
	return (
		<div
			className={clsx(
				"w-[300px] h-[300px] rounded-lg bg-white bg-center shadow-[0_1px_2px_0_rgba(0,0,0,0.16)] flex flex-col",
				"shrink-0 flex-wrap",
				bg,
			)}
		>
			<h2 className="text-cyan-700 text-center text-xl font-normal mt-6">{title}</h2>

			<div className="mt-auto mb-5 text-center">
				<Button as={Link} href={href} className="w-4/5 mx-auto bg-cyan-600 text-white">
					Подробнее
				</Button>
			</div>
		</div>
	);
}
