"use client";

import { Button, Link } from "@nextui-org/react";
import { clearBasket } from "@/redux/features/basket-slice";
import { useAppDispatch } from "@/redux/hooks";
import { modificationPriceView } from "@/components/ui/modificationPriceView";
import { BasketItemHeader } from "./basket-item-header-apparat";

interface Iapparats {
	id: number;
	quantity: number;
	image: string;
	price: number;
	title: string;
}

export function BusketHeader({ arrDataApparats }: any) {
	const dispatch = useAppDispatch();
	let sum: number = 0;
	return (
		<>
			<div className="px-1 py-2">
				{arrDataApparats.length ? (
					<div className="text-small font-bold flex justify-between items-center">
						<div>Корзина</div>
						<div>
							<Button variant="light" onClick={() => dispatch(clearBasket())}>
								Очистить корзину
							</Button>
						</div>
					</div>
				) : null}
				<div className="text-tiny">
					{arrDataApparats.length ? (
						<>
							<div>
								{arrDataApparats.map((item: any) => {
									sum += Number(Number(item.price) * item.quantity);
									return <BasketItemHeader key={item.id} item={item} />;
								})}
							</div>
							<hr className="my-5" />
							<div className="flex justify-between items-center text-base">
								<div>
									{/* Итого: <strong>{modificationPriceView(sum)}</strong> */}
								</div>
								<div className="flex justify-end items-center gap-3">
									<div>
										<Button
											as={Link}
											href="/order"
											size="sm"
											className="bg-gray-300 text-gray-600"
										>
											Оформить
										</Button>
									</div>
									<div>
										<Button
											as={Link}
											href="/basket"
											size="sm"
											className="bg-cyan-700 text-white"
										>
											В корзину
										</Button>
									</div>
								</div>
							</div>
						</>
					) : (
						<p>Корзина пуста</p>
					)}
				</div>
			</div>
		</>
	);
}
