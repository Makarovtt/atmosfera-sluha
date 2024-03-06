"use client";

import { Button, Checkbox, Link, Tooltip } from "@nextui-org/react";
import { Heart, Info, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "@/public/default-apparat.png";
import clsx from "clsx";

import { change } from "@/redux/features/favorites-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

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
	const favorites = useAppSelector((state) => state.favoriteReducer);
	const dispatch = useAppDispatch();

	function addToFavorites(id: number) {
		dispatch(change(id));
	}

	useEffect(() => {
		function checkFavorites(checkId: number) {
			const check = favorites.some((i) => i === Number(checkId));
			if (check) {
				setHeartButton(true);
			} else {
				setHeartButton(false);
			}
		}
		checkFavorites(dataItem.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favorites]);

	return (
		<div
			className="max-w-96 w-full min-w-40 p-3 border border-slate-200 
						rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]"
		>
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
			<div className="mb-4 sm:mb-1">
				<Link
					href={`/catalog/${dataItem.vendor}/${dataItem.family}/${dataItem.undfamily}/${dataItem.title}`}
				>
					{dataItem.title}
				</Link>
			</div>
			<div className="justify-between items-center flex flex-col-reverse sm:flex-row">
				<div className="flex justify-center items-center gap-1 w-full sm:w-4/12 my-2">
					<Button
						isIconOnly
						variant="bordered"
						className={clsx(
							heartButton ? "border-cyan-600 text-cyan-700 border-2" : "border",
						)}
						onClick={() => addToFavorites(Number(dataItem.id))}
					>
						{/* <Checkbox defaultSelected icon={<Heart />}></Checkbox> */}
						<Heart size={16} className={clsx(heartButton ? "stroke-2" : "stroke-1")} />
					</Button>
					<Button isIconOnly variant="bordered" className="border">
						<ShoppingCart size={16} className="stroke-1" />
					</Button>
				</div>
				<div
					className="px-4 py-1 text-center sm:text-right rounded-xl bg-cyan-50 font-bold text-lg 
								text-gray-500 mb-2 w-full sm:w-8/12 sm:ml-3"
				>
					{modificationPriceView(dataItem.price)}
				</div>
			</div>
			<div className="flex justify-center sm:justify-end">
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
			<div className="text-sm flex flex-col sm:flex-row justify-center mt-5 items-center">
				Доставка&nbsp;:&nbsp;
				<span className="text-base font-semibold text-cyan-700 block sm:inline">
					БЕСПЛАТНО!
				</span>
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
					<Info size={20} className="sm:ml-4 shrink-0" />
				</Tooltip>
			</div>
		</div>
	);
}
