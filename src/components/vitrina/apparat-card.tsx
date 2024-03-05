"use client";

import { Button, Checkbox, Link, Tooltip } from "@nextui-org/react";
import { Heart, Info, Share2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Loader from "@/public/default-apparat.png";
import clsx from "clsx";

export function ApparatCard({ dataInfo }: any) {
	console.log(dataInfo);
	const dataItem = dataInfo.goods[0];
	const dataParams = dataInfo.params;
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
		<div className="flex flex-col gap-5 max-w-[1200px]">
			<div
				className="w-full min-w-40 p-3 border border-slate-200 rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]
                        justify-between align-top sm:flex"
			>
				<div className="mb-6 flex justify-center items-center h-[200px] w-full relative sm:max-w-[350px]">
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
				<div className="flex flex-col gap-5 sm:w-1/2 2xl:2/5">
					<div className="text-lg">
						{dataItem.type_box && dataItem.type_box}
						{dataItem.type_sound_processing && `, ${dataItem.type_sound_processing}`}
						{dataItem.level_power && `, ${dataItem.level_power}`}
						{dataItem.level_hearing_loss &&
							`, Степень потери слуха ${dataItem.level_hearing_loss}`}
					</div>
					<div className="flex justify-end gap-2">
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
						<Button isIconOnly size="sm">
							<Share2 size={16} />
						</Button>
					</div>
					<div className="block justify-start gap-3 items-center lg:flex lg:flex-row">
						<div className="px-4 py-3 text-right rounded-xl bg-cyan-50 font-bold text-2xl text-gray-500 lg:w-8/12">
							{modificationPriceView(dataItem.price)}
						</div>
						<div className="flex justify-end items-center gap-1 my-2 lg:justify-center">
							<Button
								isIconOnly
								variant="bordered"
								size="lg"
								className={clsx(
									heartButton
										? "border-cyan-600 text-cyan-700 border-2"
										: "border",
								)}
								onClick={() => setHeartButton((prev) => !prev)}
							>
								{/* <Checkbox defaultSelected icon={<Heart />}></Checkbox> */}
								<Heart
									size={20}
									className={clsx(heartButton ? "stroke-2" : "stroke-1")}
								/>
							</Button>
							<Button className="bg-cyan-700 text-white w-[200px]" size="lg">
								Купить
							</Button>
						</div>
					</div>

					<div className="text-sm flex flex-col justify-end mt-5 items-start">
						<div className="text-xl font-bold mb-4">
							Доставка по городу: <span className="text-cyan-700">БЕСПЛАТНО</span>
						</div>
						<div className="text-md">
							Доставка осуществляется курьером магазина. Бесплатная доставка по городу
							нахождения одного из магазинов
						</div>
						{/* <Tooltip
							placement="right"
							content={
								<div className="px-1 py-2 max-w-52">
									<div className="text-small font-bold">Доставка по городу</div>
									<div className="text-tiny">
										Доставка осуществляется курьером магазина. Бесплатная
										доставка по городу нахождения одного из магазинов
									</div>
								</div>
							}
						>
							<Info size={20} className="ml-4" />
						</Tooltip> */}
					</div>
				</div>
			</div>

			<div
				className="w-full min-w-40 py-3 px-0 sm:px-3 border border-slate-200 rounded-xl 
							bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]"
			>
				<h2 className="font-semibold mb-4 px-3 sm:px-0">Характеристики:</h2>
				<h3 className="font-semibold mb-2 text-md px-3 sm:px-0">Основные</h3>
				<div className="flex flex-col gap-3">
					{dataItem.type_box && (
						<div
							className="flex justify-start items-center text-sm sm:text-base even:bg-gray-100 even:py-2
						px-3 sm:px-0 sm:even:bg-transparent sm:even:py-0"
						>
							<div className="w-1/2 pr-5 flex items-center sm:border-b-1">
								Тип аппарата
							</div>
							<div className="w-1/2 ml-4 flex text-right items-center justify-end sm:justify-start">
								{dataItem.type_box}
							</div>
						</div>
					)}
					{dataItem.type_sound_processing && (
						<div
							className="flex justify-start items-center text-sm sm:text-base even:bg-gray-100 even:py-2
						px-3 sm:px-0 sm:even:bg-transparent sm:even:py-0"
						>
							<div className="w-1/2 pr-5 flex items-center sm:border-b-1">
								Тип звука
							</div>
							<div className="w-1/2 ml-4 flex text-right items-center justify-end sm:justify-start">
								{dataItem.type_sound_processing}
							</div>
						</div>
					)}
					{dataItem.level_power && (
						<div
							className="flex justify-start items-center text-sm sm:text-base even:bg-gray-100 even:py-2
						px-3 sm:px-0 sm:even:bg-transparent sm:even:py-0"
						>
							<div className="w-1/2 pr-5 flex items-center sm:border-b-1">
								Тип мощности
							</div>
							<div className="w-1/2 ml-4 flex text-right items-center justify-end sm:justify-start">
								{dataItem.level_power}
							</div>
						</div>
					)}
					{dataItem.level_hearing_loss && (
						<div
							className="flex justify-start items-center text-sm sm:text-base even:bg-gray-100 even:py-2
						px-3 sm:px-0 sm:even:bg-transparent sm:even:py-0"
						>
							<div className="w-1/2 pr-5 flex items-center sm:border-b-1">
								Степень потери слуха
							</div>
							<div className="w-1/2 ml-4 flex text-right items-center justify-end sm:justify-start">
								{dataItem.level_hearing_loss}
							</div>
						</div>
					)}
				</div>

				<h3 className="font-semibold mb-2 ptext-md mt-5 px-3 sm:px-0">Параметры</h3>
				<div className="flex flex-col gap-3">
					{dataParams &&
						dataParams.map((item: any, index: any) => {
							if (item.param && item.param !== "Функции") {
								return (
									<div
										key={index}
										className="flex justify-start items-center text-sm sm:text-base even:bg-gray-100 
										even:py-2 px-3 sm:px-0 sm:even:bg-transparent sm:even:py-0"
									>
										<div className="w-1/2 pr-5 sm:border-b-1 flex items-center">
											{item.param}
										</div>
										<div className="w-1/2 ml-4 justify-end flex items-center text-right sm:justify-start">
											{item.value}
										</div>
									</div>
								);
							}
						})}
				</div>

				<h3 className="font-semibold mb-2 text-md mt-5 px-3 sm:px-0">Функции</h3>
				<div className="flex flex-col gap-3">
					{dataParams &&
						dataParams.map((item: any, index: any) => {
							if (item.param && item.param === "Функции") {
								return (
									<>
										{item.value.map((i: any, index: any) => {
											return (
												<div
													key={index}
													className="flex justify-start items-center text-sm sm:text-base even:bg-gray-100
													sm:even:bg-transparent even:py-2 sm:even:py-0 px-3 sm:px-0"
												>
													<div className="w-1/2 pr-5 flex items-center sm:border-b-1">
														{i}
													</div>
													<div className="w-1/2 ml-4 flex text-right items-center justify-end sm:justify-start">
														Есть
													</div>
												</div>
											);
										})}
									</>
								);
							}
						})}
				</div>
			</div>

			<div
				className="w-full min-w-40 p-3 border border-slate-200 rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]
            "
			>
				<h2 className="font-semibold mb-4">Описание:</h2>
				<div dangerouslySetInnerHTML={{ __html: dataItem.descriptions }}></div>
			</div>
		</div>
	);
}
