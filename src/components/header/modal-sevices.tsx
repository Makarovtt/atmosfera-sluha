"use client";
import { usePathname } from "next/navigation";
import {
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import { MyButton } from "../ui/my-button";
import { ClipboardList } from "lucide-react";
import { DATA_SERVICES } from "../services/services-data";

const dataServices = DATA_SERVICES;

export function ModalServices() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const pathname = usePathname();
	return (
		<>
			<MyButton color="none" size="none-min" onPress={onOpen}>
				<ClipboardList className="shrink-0" />
				Услуги
			</MyButton>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement={"center"}
				classNames={{
					wrapper: "z-[90] [--slide-exit:0]",
					backdrop: "z-[85]",
					body: "mb-12",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Услуги</ModalHeader>
							<ModalBody>
								{dataServices &&
									dataServices.map((item) => {
										return (
											<p key={item.id}>
												<Link
													onPress={onClose}
													className={
														pathname === item.href
															? "text-cyan-700 font-semibold"
															: "text-gray-700"
													}
													href={item.href}
												>
													{item.title}
												</Link>
											</p>
										);
									})}
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
