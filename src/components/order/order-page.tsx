"use client";

import { Button, Input, Link, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { ModalCheckOrder } from "./modal-check-order";
import { OrderStep2 } from "./order-step-2";
import { OrderStep1 } from "./order-step-1";
import { OrderStep3 } from "./order-step-3";
import { CONTACTS_DATA } from "../contacts/data";

interface DataHumanErrors {
	phone: string;
}
interface IDataUser {
	phone: string;
}
interface IDataDelivery {
	country?: string;
	street?: string;
	home?: string;
	privateHome?: boolean;
	apartment?: string;
	comment?: string;
}

const contactsData = CONTACTS_DATA;

export default function OrderComponent() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isCheckOrder, setIsCheckOrder] = useState<boolean>(true);
	const [selected, setSelected] = useState<any>("self");
	const [selected2, setSelected2] = useState<any>("Наличными");
	const [dataUser, setDataUser] = useState<IDataUser>({
		phone: "",
	});
	const [dataUserErrors, setDataUserErrors] = useState<DataHumanErrors>({
		phone: "некорректно заполнено",
	});
	const [dataDelivery, setDataDelivery] = useState<IDataDelivery>({
		country: "",
		street: "",
		home: "",
		privateHome: false,
		apartment: "",
		comment: "",
	});
	const arrDataApparats = useAppSelector((state) => state.basketReducer);
	const idCountry = useAppSelector((state) => state.countryReducer.value);
	const country = contactsData.find((item) => item.id === idCountry);
	useEffect(() => {
		if (dataUserErrors.phone === "") {
			setIsCheckOrder(false);
		} else {
			setIsCheckOrder(true);
		}
		// eslint-disable-next-line
	}, [dataUserErrors]);

	async function funcSendMail() {
		const data = new FormData();

		data.append("phone", String(dataUser.phone));
		data.append("country", String(country?.name));
		if (selected === "self") {
			data.append("delivery", "Самовывоз");
		} else {
			data.append("delivery", "Доставка");

			data.append("street", String(dataDelivery.street));
			data.append("home", String(dataDelivery.home));
			data.append("private", String(dataDelivery.privateHome));
			data.append("apartment", String(dataDelivery.apartment));
			data.append("comment", String(dataDelivery.comment));
		}

		data.append("apparats", JSON.stringify(arrDataApparats));

		const res = await fetch("https://server.atmosfera-sluha.ru/sendmail/sendmail.php", {
			method: "POST",
			body: data,
		});

		const answer = await res.json();
		console.log(answer);
		if (answer === 1) {
		}

		// onOpenChange();
	}

	return (
		<>
			<h1 className="text-2xl font-semibold mb-5">Оформление заказа</h1>
			<div>
				<div className="mb-5">
					<OrderStep1
						dataUserErrors={dataUserErrors}
						setDataUserErrors={setDataUserErrors}
						dataUser={dataUser}
						setDataUser={setDataUser}
					/>
				</div>
				<div className="mb-5">
					<OrderStep2
						dataDelivery={dataDelivery}
						setDataDelivery={setDataDelivery}
						selected={selected}
						setSelected={setSelected}
					/>
				</div>

				<div className="mb-5">
					<OrderStep3 selected2={selected2} setSelected2={setSelected2} />
				</div>

				<div className="mb-5">
					<div className="flex justify-start items-start border-l border-l-gray-300 pl-8 ml-3">
						<div className="flex w-full flex-col">
							<Button
								color="primary"
								size="lg"
								isDisabled={isCheckOrder}
								onPress={onOpen}
							>
								Подтвердить заказ
							</Button>
						</div>
					</div>
				</div>

				<div className="pl-8 ml-3 text-sm">
					* Подтверждая заказ, Вы соглашаетесь с условиями{" "}
					<Link href="#">политики конфиденциальности</Link> и{" "}
					<Link href="#">правилами продажи</Link>.
				</div>

				<ModalCheckOrder
					dataUser={dataUser}
					dataDelivery={dataDelivery}
					selected={selected}
					arrDataApparats={arrDataApparats}
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					funcSendMail={funcSendMail}
				/>
			</div>
		</>
	);
}
