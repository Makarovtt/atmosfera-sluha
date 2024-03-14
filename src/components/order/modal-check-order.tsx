import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Button,
} from "@nextui-org/react";
import { modificationPriceView } from "../ui/modificationPriceView";
import { useState } from "react";

export function ModalCheckOrder({
	dataUser,
	dataDelivery,
	selected,
	arrDataApparats,
	isOpen,
	onOpenChange,
	funcSendMail,
}: any) {
	let sum: number = 0;
	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Заказ</ModalHeader>
							<ModalBody>
								<p>
									<span className="font-medium">Телефон:</span>{" "}
									<i>+7 {dataUser.phone}</i>
								</p>
								<p>
									<span className="font-medium">Способ получения:</span>
									<i>{selected == "self" ? " Самовывоз" : " Доставка"}</i>
								</p>
								{selected == "self" ? null : (
									<>
										<div>
											<p>
												<span className="font-medium">Адрес доставки:</span>{" "}
												<i>
													{dataDelivery.street && dataDelivery.street}
													{dataDelivery.home &&
														`, дом ${dataDelivery.home}`}
													{dataDelivery.apartment &&
														!dataDelivery.privateHome &&
														`, кв. ${dataDelivery.apartment}`}
													{dataDelivery.privateHome && `, частный дом`}
												</i>
											</p>
										</div>

										<div>
											<p>
												<span className="font-medium">Комментарий:</span>{" "}
												<i>
													{dataDelivery.comment
														? dataDelivery.comment
														: "нет"}
												</i>
											</p>
										</div>
									</>
								)}
								<p>
									<span className="font-medium">Оплата:</span> <i>наличными</i>
								</p>
								{arrDataApparats.length ? (
									<>
										<div>
											<span className="font-medium">Товары:</span>
											<ol className="list-decimal ml-6 mt-2">
												{arrDataApparats.map((item: any, index: any) => {
													if (index === 0) {
														sum = 0;
													}
													const price = Number(item.price);
													sum += price * item.quantity;
													return (
														<li key={item.id}>
															{item.title} — {item.quantity} шт.
														</li>
													);
												})}
											</ol>
										</div>
										<div className="flex justify-between items-center text-base">
											<div>
												{/* Итого: <strong>{modificationPriceView(sum)}</strong> */}
											</div>
										</div>
									</>
								) : (
									<p>Товаров нет</p>
								)}
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Отмена
								</Button>
								<Button color="primary" onPress={funcSendMail}>
									Заказать
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
