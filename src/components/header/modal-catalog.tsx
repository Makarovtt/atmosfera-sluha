import {
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import { MyButton } from "../ui/my-button";
import { TextSearch } from "lucide-react";
import { DATA_SERVICES } from "../services/services-data";
import { CatalogMain } from "../catalog-main/catalog-main";

const dataServices = DATA_SERVICES;

export function ModalCatalog() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<MyButton color="none" size="none-min" onPress={onOpen}>
				<TextSearch className="shrink-0" />
				Каталог
			</MyButton>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				scrollBehavior={"outside"}
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
							<ModalHeader className="flex flex-col gap-1">Каталог</ModalHeader>
							<ModalBody>
								<CatalogMain />
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
