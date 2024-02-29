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
	dataApparats,
	countApparats,
	currentPage,
	brand = null,
	family = null,
	undfamily = null,
}: any) {
	return (
		<>
			<h1>Все аппараты</h1>

			<div className="flex flex-wrap justify-center items-start gap-5 my-5">
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
