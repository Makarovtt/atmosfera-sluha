import { AppMap } from "../contacts/AppMap";
import { CONTACTS_DATA } from "../contacts/data";
import { useAppSelector } from "@/redux/hooks";
import { SelectHeader } from "../header/select-header";
import { Checkbox, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

const contactsData = CONTACTS_DATA;

export function OrderDeliveryAddress({ setDataDelivery, dataDelivery }: any) {
	// const [privateHome, setPrivateHome] = useState<boolean>(false);
	const idCountry = useAppSelector((state) => state.countryReducer.value);
	return (
		<div className="flex justify-between items-start gap-7 mb-5">
			<div className="w-full p-5 max-w-[450px]">
				<p>Укажите адрес доставки</p>
				<div className="mt-7 max-w-56">
					<SelectHeader size="xl" />
				</div>
				<div className="my-2">
					<Input
						type="text"
						label="Улица"
						classNames={{
							inputWrapper: ["group-data-[focus=true]:border-cyan-500 border"],
						}}
						value={dataDelivery.street}
						onChange={(e) =>
							setDataDelivery({ ...dataDelivery, street: e.target.value })
						}
					/>
				</div>
				<div className="my-2 flex justify-start items-center gap-5">
					<Input
						type="text"
						label="Номера дома"
						classNames={{
							inputWrapper: ["group-data-[focus=true]:border-cyan-500 border"],
						}}
						value={dataDelivery.home}
						onChange={(e) => setDataDelivery({ ...dataDelivery, home: e.target.value })}
					/>{" "}
					<Checkbox
						onValueChange={(prev) =>
							setDataDelivery({ ...dataDelivery, privateHome: prev })
						}
						classNames={{
							wrapper: "::after:bg-cyan-700",
						}}
					>
						Частный&nbsp;дом
					</Checkbox>
				</div>
				{!dataDelivery.privateHome && (
					<div className="my-2">
						<Input
							type="text"
							label="Номер квартиры"
							isDisabled={dataDelivery.privateHome}
							classNames={{
								inputWrapper: ["group-data-[focus=true]:border-cyan-500 border"],
							}}
							value={dataDelivery.apartment}
							onChange={(e) =>
								setDataDelivery({ ...dataDelivery, apartment: e.target.value })
							}
						/>
					</div>
				)}
				<div className="my-2">
					<Textarea
						label="Комментарий"
						placeholder="Введите дополнительную информацию: номер подъезда, этаж, домофон, желаемое время доставки"
						className="max-w-full"
						classNames={{
							inputWrapper: ["group-data-[focus=true]:border-cyan-500 border"],
						}}
						value={dataDelivery.comment}
						onChange={(e) =>
							setDataDelivery({ ...dataDelivery, comment: e.target.value })
						}
					/>
				</div>
				* Вы можете не заполнять эти поля если еще не знаете куда осуществить доставку. Наш
				менеджер свяжется с Вами и обсудит все условия доставки
			</div>
		</div>
	);
}
