"use client";

import { Button, Checkbox, Link, Tooltip } from "@nextui-org/react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/react";
import { Heart, Info, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "@/public/default-apparat.png";
import clsx from "clsx";

import { change } from "@/redux/features/favorites-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function ApparatFavoritesItem({ dataItem }: any) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [timeSet, setTimeSet] = useState<any>();
	const [intervalSet, setIntervalTimeSet] = useState<any>();
	const [errorImage, setErrorImage] = useState(false);

	const [count, setCount] = useState<number>(5);
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

	function resetTimeOut() {
		setTimeSet((i: any) => clearTimeout(i));
		setIntervalTimeSet((i: any) => clearInterval(i));
		onOpenChange();
		setCount(5);
	}
	function countGo() {
		if (count > 0) {
			setCount((prev) => prev - 1);
		}
	}

	function addToFavorites(id: number) {
		onOpen();
		setIntervalTimeSet(setInterval(countGo, 1000));
		setTimeSet(setTimeout(() => dispatch(change(id)), 5000));
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
			className="w-full min-w-40 flex flex-col p-3 my-5 border border-slate-200 
                                rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]
                        sm:flex-row "
		>
			<div
				className="flex justify-between items-center w-full flex-row
                            sm:w-4/5"
			>
				<div
					className="flex justify-center items-center h-[200px] relative w-2/5
                             sm:w-2/5"
				>
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

				<div
					className="mb-4 w-3/5 flex flex-col justify-between h-full pl-2
                                sm:px-5 sm:w-3/5"
				>
					<Link
						className="text-gray-600 text-base font-medium mt-3 hover:text-cyan-700
                                    sm:text-lg "
						href={`/catalog/${dataItem.vendor}/${dataItem.family}/${dataItem.undfamily ? dataItem.undfamily : "noundfamily"}/${dataItem.title}`}
					>
						{dataItem.title}
						{dataItem.type_box && `, ${dataItem.type_box}`}
						{dataItem.type_sound_processing && `, ${dataItem.type_sound_processing}`}
						{dataItem.level_power && `, ${dataItem.level_power}`}
						{dataItem.level_hearing_loss &&
							`, Степень потери слуха ${dataItem.level_hearing_loss}`}
					</Link>

					<div
						className="justify-center hidden items-center gap-5
                                        sm:flex sm:justify-start"
					>
						{/* <Button size="sm" variant="bordered" className="px-2 border">
							<Checkbox
								size="sm"
								classNames={{
									label: "text-gray-600",
									wrapper: "group-data-[selected=true]:after:bg-cyan-600",
								}}
							>
								Сравнить
							</Checkbox>
						</Button> */}

						<div
							className="text-sm hidden flex-col justify-end items-center 
                                        lg:flex lg:flex-row"
						>
							Доставка:&nbsp;
							<span className="text-base font-semibold text-cyan-700 block sm:inline">
								БЕСПЛАТНО!
							</span>
							<Tooltip
								placement="right"
								content={
									<div className="px-1 py-2 max-w-52">
										<div className="text-small font-bold">
											Доставка по городу
										</div>
										<div className="text-tiny">
											Доставка осуществляется курьером магазина. Бесплатная
											доставка по городу нахождения одного из магазинов
										</div>
									</div>
								}
							>
								<Info size={20} className="ml-2 shrink-0" />
							</Tooltip>
						</div>
					</div>
				</div>
			</div>
			<div
				className="justify-between flex flex-col
                            sm:w-1/5 items-end"
			>
				<div
					className="flex flex-row justify-between w-full
                                sm:flex-col"
				>
					<div
						className="text-center font-semibold text-medium text-gray-600 w-2/5 bg-gray-100 rounded-xl
                                    h-[40px] flex items-center justify-center px-2
                            sm:text-right sm:py-1 sm:mt-3 sm:mb-2 sm:text-xl sm:w-full sm:justify-end sm:bg-transparent"
					>
						Цена по запросу
						{/* {modificationPriceView(dataItem.price)} */}
					</div>
					<div
						className="flex justify-end items-center gap-1 w-3/5 
                                        sm:w-full sm:my-2 "
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
							// variant="bordered"
							className="border bg-cyan-700 text-white font-semibold"
						>
							Купить
						</Button>
					</div>
				</div>
				<div
					className="justify-start flex flex-row my-4 w-full
                                        sm:hidden sm:justify-start"
				>
					<Button size="sm" variant="bordered" className="px-2 border w-2/5">
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
				<div
					className="text-sm flex flex-row justify-end w-full mt-5 items-center
                                lg:hidden"
				>
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
						<Info size={20} className="ml-2 shrink-0" />
					</Tooltip>
				</div>
			</div>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange} className="z-[50]">
				<ModalContent className="flex justify-center items-center py-10">
					{(onClose) => (
						<>
							<ModalBody>
								<p>
									Товар будет удалён из избранного через
									<strong className="ml-3 text-lg">{count}</strong>
									<hr className="mt-2 mb-6" />
									<div className="f-full text-center">
										<Button
											onClick={resetTimeOut}
											className="ml-5 bg-cyan-700 text-white"
										>
											Отменить
										</Button>
									</div>
								</p>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
