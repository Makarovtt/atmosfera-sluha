import NoImage from "@/public/default-apparat.png";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { removeToBasket } from "@/redux/features/basket-slice";
import { useAppDispatch } from "@/redux/hooks";
import { modificationPriceView } from "@/components/ui/modificationPriceView";

export function BasketItemHeader({ item }: any) {
	const [errorImage, setErrorImage] = useState(false);
	const dispatch = useAppDispatch();
	const price = Number(item.price);
	return (
		<>
			<div key={item.id}>
				<div className="flex flex-row justify-between items-center gap-5">
					<div className="w-24 h-16 relative ">
						<Image
							src={errorImage ? NoImage : item.image || ""}
							alt=""
							placeholder="blur"
							blurDataURL="/preloader-img.svg"
							onError={() => setErrorImage(true)}
							fill
							priority
							sizes="100vw, 700px"
							className="w-full h-auto object-contain"
						/>
					</div>
					<div className="text-sm w-6/12">{item.title}</div>
					<div className="text-lg w-5/12 font-semibold flex justify-end items-center gap-2 flex-nowrap">
						{item.quantity > 1 && (
							<div className="text-gray-400 font-normal text-base">
								x {item.quantity}
							</div>
						)}
						{modificationPriceView(price)}
					</div>
					<div className="w-1/12">
						<Trash2
							className="text-gray-300 cursor-pointer hover:text-gray-600 transition"
							onClick={() => dispatch(removeToBasket(item.id))}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
