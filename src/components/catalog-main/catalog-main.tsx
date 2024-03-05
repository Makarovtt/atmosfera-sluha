"use client";

import { Button, Link } from "@nextui-org/react";
import clsx from "clsx";
import { ChevronDown, ChevronDownCircle } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { change } from "@/redux/features/catalog-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

interface Ichildes {
	id: string;
	child: string;
	check: boolean;
}
interface Ifamilies {
	id: string;
	family: string;
	check: boolean;
	childes: Ichildes[] | [];
}
interface Vendor {
	id?: string | number;
	vendor?: string;
	image?: string | null;
	families?: Ifamilies[] | [];
}

export function CatalogMain({ dataMenuMain }: any) {
	const pathname = usePathname();
	const arrSlash = pathname.split("/");

	const readyCatalog = useAppSelector((state) => state.catalogReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(change(dataMenuMain));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [dataMenuGet, setDataMenuGet] = useState(dataMenuMain);

	function openFamily(familyName: string, changeTogle: any = true) {
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
					<div key={item.id} className="mb-5 group">
						<div className="flex items-center justify-start gap-10 px-5 mb-2">
							<h3>
								<Link
									className={clsx(
										"font-semibold text-lg transition",
										arrSlash[2] === item.vendor
											? "text-cyan-600"
											: "text-gray-400 group-hover:text-gray-700",
									)}
									href={`/catalog/${item.vendor}`}
								>
									{item.vendor}
								</Link>
							</h3>
						</div>
						{item.families?.map((iFamili: Ifamilies) => {
							return (
								<div
									key={iFamili.id}
									className="flex items-start justify-start gap-5 px-5 group/family"
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
										<div className="mt-1 w-6"></div>
									)}

									<div className="w-full">
										<span className="text-lg ">
											<Link
												href={`/catalog/${item.vendor}/${iFamili.family}`}
												className={clsx(
													" transition ",
													arrSlash[3] === iFamili.family
														? "text-cyan-700 font-semibold"
														: "text-gray-500 group-hover/family:text-gray-800 group-hover/family:font-medium",
												)}
											>
												{iFamili.family}
											</Link>
										</span>
										<div
											className={clsx(
												"ml-4 transition-all",
												iFamili.check ? "block" : "hidden",
											)}
										>
											{iFamili.childes?.map((iChild: Ichildes) => {
												return (
													<div
														key={iChild.id}
														className="mb-2 text-gray-500 w-full group/undfamily"
													>
														<Link
															href={`/catalog/${item.vendor}/${iFamili.family}/${iChild.child}`}
															className={clsx(
																"transition",
																arrSlash[4] === iChild.child
																	? "text-cyan-700"
																	: "text-gray-500 hover:text-gray-900 group-hover/undfamily:translate-x-1",
															)}
														>
															{iChild.child}
														</Link>
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
