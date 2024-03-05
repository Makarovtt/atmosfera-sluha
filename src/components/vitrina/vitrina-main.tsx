"use client";
import { Pagination } from "@nextui-org/react";
import { ApparatItem } from "./apparat-item";
import { useEffect, useState } from "react";
import axios from "axios";

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
const urlGetApparats =
	"https://server.atmosfera-sluha.ru/sluhmarketonline/app_apparats_with_price.php";

export function VitrinaMain() {
	const [dataApparats, setDataApparats] = useState<Iparams>();
	const [getPage, setGetPage] = useState(1);

	useEffect(() => {
		async function fetchData() {
			const changeCheckAllData = {
				type: "Акции",
				nmbPage: getPage,
				limit: 20,
			};
			const { data } = await axios.post(
				urlGetApparats,
				`getModulePromo=${JSON.stringify(changeCheckAllData)}`,
			);
			setDataApparats(data);
		}
		fetchData();
	}, [getPage]);

	const allApparats = dataApparats?.count_all_goods;

	function countAllPages(number: number) {
		return Math.ceil(number / 20);
	}
	const apparats = dataApparats?.goods;

	return (
		<div className="my-16">
			<h2 className="my-3 text-2xl text-cyan-600">Товары по акции</h2>
			<div className="grid my-5 gap-1 sm:gap-4 grid-cols-2 md-lg:grid-cols-3 2xl:grid-cols-4">
				{apparats &&
					apparats?.map((item: Iapparats) => {
						return <ApparatItem key={item.id} dataItem={item} />;
					})}
			</div>
			<div className="flex justify-center mt-10">
				{allApparats ? (
					<Pagination
						total={countAllPages(allApparats)}
						initialPage={getPage}
						classNames={{
							wrapper: "",
							item: "",
							cursor: "bg-cyan-700",
						}}
						onChange={(event) => setGetPage(event)}
					/>
				) : (
					<div>Грузим Аппараты</div>
				)}
			</div>
		</div>
	);
}
