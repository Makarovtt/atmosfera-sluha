"use client";

import { Button, Checkbox, Tooltip } from "@nextui-org/react";
import { Heart, Info, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Loader from "@/public/default-apparat.png";
import clsx from "clsx";

export function ApparatItem({ dataItem }: any) {
	const [errorImage, setErrorImage] = useState(false);
	const [heartButton, setHeartButton] = useState(false);

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
				<div className="flex justify-center items-center gap-1 w-4/12 my-2">
					<Button
						isIconOnly
						variant="bordered"
						className={clsx(
							heartButton ? "border-cyan-600 text-cyan-700 border-2" : "border",
						)}
						onClick={() => setHeartButton((prev) => !prev)}
					>
						{/* <Checkbox defaultSelected icon={<Heart />}></Checkbox> */}
						<Heart size={16} className={clsx(heartButton ? "stroke-2" : "stroke-1")} />
					</Button>
					<Button isIconOnly variant="bordered" className="border">
						<ShoppingCart size={16} className="stroke-1" />
					</Button>
				</div>
				<div className="px-4 py-1 text-right rounded-xl bg-cyan-50 font-bold text-lg text-gray-500 w-8/12 ml-3">
					{modificationPriceView(dataItem.price)}
				</div>
			</div>
			<div className="flex justify-end">
				<Button size="sm" variant="bordered" className="px-2 border">
					<Checkbox
						size="sm"
						classNames={{
							label: "text-gray-600",
							wrapper: "group-data-[selected=true]:after:bg-cyan-600",
						}}
					>
						Сравнить
					</Checkbox>
				</Button>
			</div>
			<div className="text-sm flex justify-center mt-5 items-center">
				Доставка&nbsp;:&nbsp;
				<span className="text-base font-semibold text-cyan-700">БЕСПЛАТНО!</span>
				<Tooltip
					placement="right"
					content={
						<div className="px-1 py-2 max-w-52">
							<div className="text-small font-bold">Доставка по городу</div>
							<div className="text-tiny">
								Доставка осуществляется курьером магазина. Бесплатная доставка по
								городу нахождения одного из магазинов
							</div>
						</div>
					}
				>
					<Info size={20} className="ml-4" />
				</Tooltip>
			</div>
		</div>
	);
}
