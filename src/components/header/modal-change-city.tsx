import {
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import { change } from "@/redux/features/country-slice";
import { useAppDispatch } from "@/redux/hooks";
import { CONTACTS_DATA } from "../contacts/data";
import { MyButton } from "../ui/my-button";
import { MapPin } from "lucide-react";

const contactsData = CONTACTS_DATA;

export function ModalChangeCity() {
	const dispatch = useAppDispatch();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<MyButton color="none" size="none-min" onPress={onOpen}>
				<MapPin className="shrink-0" />
				Город
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
							<ModalHeader className="flex flex-col gap-1">Выбрать город</ModalHeader>
							<ModalBody>
								{contactsData &&
									contactsData.map((item) => {
										return (
											<p key={item.id}>
												<Link
													onClick={() =>
														dispatch(change(Number(item.id)))
													}
													onPress={onClose}
													className="text-cyan-700 font-medium"
												>
													{item.name}
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
