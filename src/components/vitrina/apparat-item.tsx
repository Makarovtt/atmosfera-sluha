"use client";

import { Button, Checkbox, Link, Tooltip } from "@nextui-org/react";
import { Check, Heart, Info, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "@/public/default-apparat.png";
import clsx from "clsx";

import { change } from "@/redux/features/favorites-slice";
import { addToBasket } from "@/redux/features/basket-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function ApparatItem({ dataItem }: any) {
	const [errorImage, setErrorImage] = useState(false);
	const [heartButton, setHeartButton] = useState(false);
	const [busketButton, setBasketButton] = useState(false);

	function modificationPriceView(price: string) {
		const newPrice = new Intl.NumberFormat("ru-Ru", {
			style: "currency",
			currency: "RUB",
			maximumFractionDigits: 0,
		}).format(Number(price));
		return newPrice;
	}
	const favorites = useAppSelector((state) => state.favoriteReducer);
	const basketInfo = useAppSelector((state) => state.basketReducer);

	const dispatch = useAppDispatch();

	function addToFavorites(id: number) {
		dispatch(change(id));
	}

	function putToBasket(data: any) {
		dispatch(addToBasket(data));
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

	useEffect(() => {
		function checkBasket(checkId: number) {
			const check = basketInfo.some((i) => i.id === checkId);
			if (check) {
				setBasketButton(true);
			} else {
				setBasketButton(false);
			}
		}
		checkBasket(dataItem.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [basketInfo]);

	return (
		<div
			className="max-w-96 flex flex-col w-full min-w-40 p-3 border border-slate-200 
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
					href={`/catalog/${dataItem.vendor}/${dataItem.family}/${dataItem.undfamily ? dataItem.undfamily : "noundfamily"}/${dataItem.title}`}
				>
					{dataItem.title}
				</Link>
			</div>
			<div className="text-sm">
				{dataItem.type_box && dataItem.type_box}
				{dataItem.type_sound_processing && `, ${dataItem.type_sound_processing}`}
				{dataItem.level_power && `, ${dataItem.level_power}`}
				{dataItem.level_hearing_loss &&
					`, Степень потери слуха ${dataItem.level_hearing_loss}`}
			</div>

			<div className="mt-auto">
				<div className="justify-between items-center flex flex-col-reverse sm:flex-row">
					<div
						className="flex  items-center gap-1 w-full my-2 justify-center
								sm:w-5/12 sm:justify-start"
					>
						<Button
							isIconOnly
							variant="bordered"
							className={clsx(
								heartButton ? "border-cyan-600 text-cyan-700 border-2" : "border",
							)}
							onClick={() => addToFavorites(Number(dataItem.id))}
						>
							{/* <Checkbox defaultSelected icon={<Heart />}></Checkbox> */}
							<Heart
								size={16}
								className={clsx(heartButton ? "stroke-2" : "stroke-1")}
							/>
						</Button>
						<Button
							isIconOnly
							variant={busketButton ? "bordered" : "solid"}
							className={clsx(
								"",
								busketButton ? "bg-cyan-700 text-white border-0" : "border",
							)}
							onClick={() => putToBasket(dataItem)}
						>
							{busketButton ? (
								<Check size={16} className="stroke-3" />
							) : (
								<ShoppingCart size={16} className="stroke-1" />
							)}
						</Button>
					</div>
					<div
						className="px-4 h-10 rounded-xl bg-cyan-50 text-sm text-right
								text-gray-500 w-full flex items-center justify-end
								sm:justify-end sm:ml-0 sm:w-7/12 "
					>
						Цена по запросу
						{/* {modificationPriceView(dataItem.price)} */}
					</div>
				</div>
				{/* <div className="flex justify-center sm:justify-end w-full">
				<Button size="sm" variant="bordered" className="px-2 border sm:w-7/12">
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
			</div> */}
				<div className="text-sm flex flex-col sm:flex-row justify-center mt-2 items-center">
					Доставка:&nbsp;
					<span className="text-base font-semibold text-cyan-700 block sm:inline">
						БЕСПЛАТНО!
					</span>
					<Tooltip
						placement="right"
						content={
							<div className="px-1 py-2 max-w-52">
								<div className="text-small font-bold">Доставка по городу</div>
								<div className="text-tiny">
									Доставка осуществляется курьером магазина. Бесплатная доставка
									по городу нахождения одного из магазинов
								</div>
							</div>
						}
					>
						<Info size={20} className="sm:ml-4 shrink-0" />
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
