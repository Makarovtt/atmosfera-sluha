"use client";

import Loader from "@/public/preloader-img-fon.svg";
import { Pagination } from "@nextui-org/react";
import { ApparatItem } from "../vitrina/apparat-item";
import { PaginationComponent } from "../ui/pagination";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import Image from "next/image";
import { CatalogFavoritesEmpty } from "./catalog-favorites-emty";
import { ApparatFavoritesItem } from "../vitrina/aparat-favorites";
const getUrl = "https://server.atmosfera-sluha.ru/get/favorites_apparats.php";

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

export function CatalogFindApparats({ titlePage = "Все аппараты" }: any) {
	const [getPage, setGetPage] = useState(1);
	const [isLoading, setLoading] = useState(true);
	const [dataApparats, setDataApparats] = useState<Iparams>();
	const favorites = useAppSelector((state) => state.favoriteReducer);

	useEffect(() => {
		async function getFavoritesApparat() {
			const changeCheckAllData = {
				nmbPage: getPage,
				limit: 20,
				arrFavorites: favorites,
			};
			const { data } = await axios.post(
				getUrl,
				`dataPost=${JSON.stringify(changeCheckAllData)}`,
			);
			setDataApparats(data);
			setLoading(false);
		}

		getFavoritesApparat();
	}, [getPage, favorites]);

	function countAllPages(number: number) {
		return Math.ceil(number / 20);
	}
	const apparats = dataApparats?.goods;
	const allApparats = dataApparats?.count_all_goods;
	return (
		<div className="mb-16">
			<h2 className="mb-3 text-2xl text-cyan-600">{titlePage}</h2>
			<div>
				{isLoading && (
					<div className="w-full h-full flex justify-center items-center">
						<Image src={Loader} alt="" />
					</div>
				)}
				{apparats ? (
					apparats?.map((item: Iapparats) => {
						return <ApparatFavoritesItem key={item.id} dataItem={item} />;
					})
				) : (
					<CatalogFavoritesEmpty isLoading={isLoading} />
				)}
			</div>
			<div className="flex justify-center mt-10">
				{allApparats && allApparats > 20 && (
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
				)}
			</div>
		</div>
	);
}
