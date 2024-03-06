"use client";

import { Badge, Button, Link } from "@nextui-org/react";
import { Heart, Kanban, ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";

export function MenuTopButtonGroup() {
	const favorites = useAppSelector((state) => state.favoriteReducer);

	return (
		<>
			<Button isIconOnly className="bg-transparent text-gray-500 hover:text-gray-900">
				<Kanban size={30} className="stroke-1" />
			</Button>
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
			<Button isIconOnly className="bg-transparent text-gray-500 hover:text-gray-900">
				<ShoppingCart size={30} className="stroke-1" />
			</Button>
		</>
	);
}
