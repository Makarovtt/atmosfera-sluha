import { BaksetItemApparat } from "./basket-item-apparat";
import { Button, Link } from "@nextui-org/react";

export function BasketPageList({ arrDataApparats, isLoading }: any) {
	let sum: number = 0;
	return (
		<>
			{arrDataApparats.length ? (
				<>
					<div>
						{arrDataApparats.map((item: any) => {
							sum += Number(item.price * item.quantity);
							return <BaksetItemApparat key={item.id} item={item} />;
						})}
					</div>
					<div className="flex justify-between items-center text-base">
						<div>{/* Итого: <strong>{modificationPriceView(sum)}</strong> */}</div>
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
				<div>Корзина пуста</div>
			)}
		</>
	);
}
