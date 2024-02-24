import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Бесплатная доставка слуховых аппартов на дом",
	description: "Бесплатная доставка слуховых аппартов на дом",
};

export default function Delivery() {
	return (
		<>
			<h1 className="text-center text-2xl text-cyan-700 font-bold mb-5 mt-10">
				Бесплатная доставка слуховых аппартов на дом
			</h1>
		</>
	);
}
