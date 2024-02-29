import { ServicesComponent } from "@/components/services/sevices";
import { BreadCrumbs } from "@/components/ui/breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Услуги магазина слуховых аппаратов «Атмосфера слуха»",
	description: "Услуги магазина слуховых аппаратов «Атмосфера слуха»",
};

export default function Services() {
	return (
		<>
			<div>
				<BreadCrumbs flag="services" />
			</div>
			<h1 className="text-center text-2xl text-cyan-700 font-bold mb-5 mt-10">
				Услуги магазина слуховых аппаратов «Атмосфера слуха»
			</h1>
			<ServicesComponent />
		</>
	);
}
