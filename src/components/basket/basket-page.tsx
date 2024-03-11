"use client";

import { Button, Link } from "@nextui-org/react";

import { clearBasket } from "@/redux/features/basket-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { BaksetItemApparat } from "./basket-item-apparat";
import { modificationPriceView } from "@/components/ui/modificationPriceView";

interface Iapparats {
	id: number;
	quantity: number;
	image: string;
	price: number;
	title: string;
}

export default function BasketComponent() {
	const dispatch = useAppDispatch();
	const arrDataApparats = useAppSelector((state) => state.basketReducer);

	let sum: number = 0;
	return (
		<>
			<h1 className="text-2xl font-semibold mb-5">Корзина</h1>
			<div
				className="w-full min-w-40 p-3 border border-slate-200 rounded-xl bg-white pt-6
                            shadow-[0_1px_2px_0_rgba(0,0,0,0.16)]"
			>
				{arrDataApparats.length ? (
					<>
						<div>
							{arrDataApparats.map((item) => {
								sum += Number(item.price * item.quantity);
								return <BaksetItemApparat key={item.id} item={item} />;
							})}
						</div>
						<div className="flex justify-between items-center text-base">
							<div>
								Итого: <strong>{modificationPriceView(sum)}</strong>
							</div>
							<div className="flex justify-end items-center gap-3">
								<div>
									<Button
										as={Link}
										href="/order"
										size="sm"
										className="bg-cyan-700 text-white"
									>
										Оформить
									</Button>
								</div>
							</div>
						</div>
					</>
				) : (
					<p>Корзина пуста</p>
				)}
			</div>
		</>
	);
}
