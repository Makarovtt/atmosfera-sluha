"use client";

import { clearBasket } from "@/redux/features/basket-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { modificationPriceView } from "@/components/ui/modificationPriceView";
import Loader from "@/public/preloader-img.svg";
import { useMemo, useState } from "react";
import Image from "next/image";
import { BasketPageList } from "./basket-page-list";

interface Iapparats {
	id: number;
	quantity: number;
	image: string;
	price: number;
	title: string;
}

export default function BasketComponent() {
	const [isLoading, setLoading] = useState(true);
	const [issetApparats, setIssetApparats] = useState(false);
	const dispatch = useAppDispatch();
	const arrDataApparats = useAppSelector((state) => state.basketReducer);
	console.log(arrDataApparats.length);
	useMemo(() => {
		if (arrDataApparats.length) {
			setLoading(false);
			setIssetApparats(true);
		}
	}, [arrDataApparats]);

	return (
		<>
			<h1 className="text-2xl font-semibold mb-5">Корзина</h1>
			<div
				className="w-full min-w-40 p-3 border border-slate-200 rounded-xl bg-white pt-6
                            shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]"
			>
				{isLoading ? (
					<div className="flex justify-center items-center w-full h-full">
						<Image src={Loader} alt="" />
					</div>
				) : null}
				{issetApparats && (
					<BasketPageList arrDataApparats={arrDataApparats} isLoading={isLoading} />
				)}
			</div>
		</>
	);
}
