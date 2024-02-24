import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Контакты магазинов «Атмосфера слуха»",
	description: "Контакты магазинов «Атмосфера слуха»",
};
export default function Contacts() {
	return (
		<>
			<h1 className="text-center text-2xl text-cyan-700 font-bold mb-5 mt-10">
				Контакты магазинов «Атмосфера слуха»
			</h1>
		</>
	);
}
