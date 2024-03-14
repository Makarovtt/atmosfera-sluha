import { useState } from "react";
import { Button, Link } from "@nextui-org/react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import {
	removeToBasket,
	addCountApparatsToBasket,
	removeCountApparatsToBasket,
} from "@/redux/features/basket-slice";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/react";
import { useAppDispatch } from "@/redux/hooks";
import NoImage from "@/public/default-apparat.png";
import { modificationPriceView } from "@/components/ui/modificationPriceView";

export function BaksetItemApparat({ item }: any) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [errorImage, setErrorImage] = useState(false);
	const dispatch = useAppDispatch();
	function removeApparats(id: number) {
		dispatch(removeToBasket(id));
		isOpen ? onOpenChange() : null;
	}
	function delItemApparats(id: number) {
		dispatch(removeCountApparatsToBasket(id));
		isOpen ? onOpenChange() : null;
	}
	function delCheckApparats(id: number, quantity: number) {
		if (quantity === 1) {
			onOpen();
		} else {
			delItemApparats(id);
		}
	}
	return (
		<>
			<div key={item.id}>
				<div className="flex flex-row justify-between items-center gap-5">
					<div className="w-40 h-20 relative ">
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
					<div className="text-base w-6/12 flex flex-col justify-between items-start h-full gap-6">
						<Link
							className="text-gray-600 text-base font-medium mt-3 hover:text-cyan-700
                                    sm:text-lg "
							href={item.href}
						>
							{" "}
							{item.title}
						</Link>
						<div className="flex flex-row justify-start gap-5 items-center">
							<Button
								isIconOnly
								className="w-[23px] h-[23px] min-w-unit-0 rounded-md"
								onClick={() => delCheckApparats(item.id, item.quantity)}
							>
								<Minus
									size={15}
									className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
								/>
							</Button>
							<div>{item.quantity}</div>
							<Button
								isIconOnly
								className="w-[23px] h-[23px] min-w-unit-0 rounded-md"
								onClick={() => dispatch(addCountApparatsToBasket(item.id))}
							>
								<Plus
									size={15}
									className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
								/>
							</Button>
						</div>
					</div>
					<div className="text-lg w-3/12 font-semibold flex flex-row justify-end items-center gap-4">
						{item.quantity > 1 && (
							<div className="text-gray-400">x {item.quantity}</div>
						)}
						Цена по запросу
						{/* {modificationPriceView(item.quantity * item.price)} */}
					</div>
					<div className="w-1/12">
						<Button isIconOnly onPress={onOpen} variant="light" className="group">
							<Trash2 className="text-gray-300 cursor-pointer group-hover:text-gray-600 transition" />
						</Button>
					</div>
				</div>
				<hr className="my-5" />
			</div>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Удаление товара
							</ModalHeader>
							<ModalBody>
								<p>Удалить товар из корзины?</p>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="light"
									onPress={() => removeApparats(item.id)}
								>
									Удалить
								</Button>
								<Button
									color="primary"
									onPress={onClose}
									className="bg-cyan-700 text white"
								>
									Отмена
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
