"use client";

import clsx from "clsx";
import { ChevronDown, ChevronDownCircle } from "lucide-react";
import Image from "next/image";
import imgLogoAudiFon from "public/images/catalog-main/logo-audifon.png";
import { useState } from "react";

interface Ichildes {
	id: string;
	child: string;
	check: boolean;
}
interface Ifamilies {
	id: string;
	family: string;
	check: boolean;
	childes: Ichildes[];
}
interface Vendor {
	id: string | number;
	vendor: string;
	image?: string | null;
	families: Ifamilies[];
}

export function CatalogMain({ dataMenuMain }: any) {
	const [dataMenuGet, setDataMenuGet] = useState(dataMenuMain);

	function openFamily(familyName: any, changeTogle: any = true) {
		setDataMenuGet((pre: any) => {
			return pre.map((item: any) => {
				return {
					...item,
					families: item.families.map((familyItem: any) => {
						if (familyItem.family === familyName) {
							return { ...familyItem, check: !familyItem.check };
						}
						return familyItem;
					}),
				};
			});
		});
	}
	return (
		<>
			{dataMenuGet?.map((item: Vendor) => {
				return (
					<div key={item.id} className="mb-5">
						<div className="flex items-center justify-start gap-10 px-5 mb-2">
							<h3 className="font-semibold text-lg text-cyan-600">{item.vendor}</h3>
						</div>
						{item.families?.map((iFamili: Ifamilies) => {
							return (
								<div
									key={iFamili.id}
									className="flex items-start justify-start gap-5 px-5 py-2"
								>
									{iFamili.childes.length ? (
										<div className="mt-1">
											<ChevronDown
												size={20}
												className="data-[rotate=true]:rotate-180 transition-all text-slate-400
											 data-[rotate=true]:text-slate-600 hover:text-slate-900"
												data-rotate={iFamili.check ? true : false}
												onClick={() =>
													openFamily(iFamili.family, !!iFamili.check)
												}
											/>
										</div>
									) : (
										<div className="mt-1 w-5"></div>
									)}

									<div>
										<span className="text-lg">{iFamili.family}</span>
										<div
											className={clsx(
												"ml-4",
												iFamili.check ? "block" : "hidden",
											)}
										>
											{iFamili.childes?.map((iChild: Ichildes) => {
												return (
													<div key={iChild.id} className="my-2">
														{iChild.child}
													</div>
												);
											})}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</>
	);
}
