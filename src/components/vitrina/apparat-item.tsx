"use client";

import { Button } from "@nextui-org/react";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Loader from "@/public/default-apparat.png";

export function ApparatItem({ dataItem }: any) {
	const [errorImage, setErrorImage] = useState(false);

	function modificationPriceView(price: string) {
		const newPrice = new Intl.NumberFormat("ru-Ru", {
			style: "currency",
			currency: "RUB",
			maximumFractionDigits: 0,
		}).format(Number(price));
		return newPrice;
	}
	return (
		<div className="max-w-72 w-full min-w-40 p-3 border border-slate-200 rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]">
			<div className="flex justify-center items-center h-[200px] relative">
				<Image
					src={errorImage ? Loader : dataItem.picture}
					alt={dataItem.title}
					placeholder="blur"
					blurDataURL="/preloader-img.svg"
					onError={() => setErrorImage(true)}
					fill
					priority
					sizes="100vw, 700px"
					className="w-full h-auto object-contain"
				/>
			</div>
			<div>{dataItem.title}</div>
			<div className="flex justify-between items-center">
				<div className="flex justify-center items-center gap-1 w-4/12">
					<Button isIconOnly variant="bordered">
						<Heart size={16} className="stroke-1" />
					</Button>
					<Button isIconOnly variant="bordered">
						<ShoppingCart size={16} className="stroke-1" />
					</Button>
				</div>
				<div className="px-4 py-2 text-right rounded-xl bg-cyan-50 my-5 font-bold text-lg text-gray-500 w-8/12 ml-3">
					{modificationPriceView(dataItem.price)}
				</div>
			</div>
			<div className="text-sm text-center">
				Доставка&nbsp;по&nbsp;городу —{" "}
				<span className="text-base font-semibold text-cyan-700">БЕСПЛАТНО!</span>
			</div>
		</div>
	);
}
