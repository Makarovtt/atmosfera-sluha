import { Button } from "@nextui-org/react";
import Link from "next/link";

export function PaginationComponent({
	countApparats,
	countView,
	currentPage,
	brand,
	family,
	undfamily,
}: any) {
	const countPage = Math.ceil(countApparats / countView);

	let content = [];
	for (let i = 0; i < countPage; i++) {
		content.push(i + 1);
	}

	return (
		<div className="flex justify-center mt-10 gap-1">
			{content &&
				content.map((item) => {
					if (item === currentPage) {
						return (
							<div key={item} className="">
								<Button isIconOnly size="sm" className="bg-cyan-700 text-white">
									{item}
								</Button>
							</div>
						);
					}
					return (
						<div key={item} className="">
							<Button
								href={`/catalog${brand ? `/${brand}` : ""}${family ? `/${family}` : ""}${undfamily ? `/${undfamily}` : ""}?page=${item}`}
								as={Link}
								isIconOnly
								size="sm"
								className="bg-[#f4f4f5] hover:bg-[#e5e7eb]"
							>
								{item}
							</Button>
						</div>
					);
				})}
		</div>
	);
}
