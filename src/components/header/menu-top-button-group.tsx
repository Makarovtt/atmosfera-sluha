"use client";

import { Badge, Button, Link, Tooltip } from "@nextui-org/react";
import { Heart, Kanban, ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { BusketHeader } from "../basket/basket-header";

export function MenuTopButtonGroup() {
	const favorites = useAppSelector((state) => state.favoriteReducer);
	const basket = useAppSelector((state) => state.basketReducer);

	return (
		<>
			{/* <Button isIconOnly className="bg-transparent text-gray-500 hover:text-gray-900">
				<Kanban size={30} className="stroke-1" />
			</Button> */}
			<Badge
				content={favorites.length}
				isInvisible={!favorites.length}
				size="lg"
				className="bg-cyan-700 text-white"
			>
				<Button
					isIconOnly
					as={Link}
					href="/catalog/favorites"
					className="bg-transparent text-gray-500 hover:text-gray-900"
				>
					<Heart size={30} className="stroke-1" />
				</Button>
			</Badge>

			<Badge
				content={basket.length}
				isInvisible={!basket.length}
				size="lg"
				className="bg-cyan-700 text-white"
			>
				<Tooltip
					content={<BusketHeader arrDataApparats={basket} />}
					placement="bottom-start"
				>
					<Button isIconOnly className="bg-transparent text-gray-500 hover:text-gray-900">
						<ShoppingCart size={30} className="stroke-1" />
					</Button>
				</Tooltip>
			</Badge>
		</>
	);
}
