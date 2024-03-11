import { OrderInputPhone } from "./order-input-phone";

export function OrderStep1({ dataUserErrors, setDataUserErrors, dataUser, setDataUser }: any) {
	return (
		<>
			<div className="flex justify-start items-start gap-5">
				<div
					className="bg-white w-[25px] h-[25px] rounded-[50%] flex justify-center items-center
        shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-[2px]"
				>
					1
				</div>
				<h2 className="text-xl font-semibold mb-5">Данные покупателя</h2>
			</div>
			<div className="flex justify-start items-start border-l border-l-gray-300 pl-8 ml-3">
				<OrderInputPhone
					dataUserErrors={dataUserErrors}
					setDataUserErrors={setDataUserErrors}
					dataUser={dataUser}
					setDataUser={setDataUser}
				/>
			</div>
		</>
	);
}
