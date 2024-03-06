"use client";

import { Pagination } from "@nextui-org/react";
import { ApparatItem } from "../vitrina/apparat-item";
import { PaginationComponent } from "../ui/pagination";
interface Iapparats {
	id: string;
	title: string;
	price: string;
	old_price?: string;
	picture?: string;
	vendor: string;
	family?: string;
	undfamily?: string;
	description?: string;
	promo?: string;
	class?: string;
	age?: string;
	level_power?: string;
	type_box?: string;
	level_hearning_loss?: string;
	functions?: string;
	quantity_channels?: string;
	type_sound_processing?: string;
	display: string;
}
interface Iparams {
	count_all_goods: number;
	filters: Array<Object>;
	goods: Array<Iapparats>;
	page: Number;
	price_min_max: Array<Number>;
}

export function CatalogPageComponent({
	titlePage = "Все аппараты",
	dataApparats,
	countApparats,
	currentPage,
	brand = null,
	family = null,
	undfamily = null,
}: any) {
	return (
		<>
			<h1 className="text-3xl font-semibold ml-2">{titlePage}</h1>

			<div className="grid my-5 gap-1 sm:gap-4 grid-cols-2 md-lg:grid-cols-3 2xl:grid-cols-4">
				{dataApparats &&
					dataApparats?.map((item: Iapparats) => {
						return <ApparatItem key={item.id} dataItem={item} />;
					})}
			</div>

			<div className="flex justify-center mt-10">
				{countApparats ? (
					<PaginationComponent
						brand={brand}
						family={family}
						undfamily={undfamily}
						countApparats={Number(countApparats)}
						countView={20}
						currentPage={Number(currentPage)}
					/>
				) : (
					<div>Грузим Аппараты</div>
				)}
			</div>
		</>
	);
}
