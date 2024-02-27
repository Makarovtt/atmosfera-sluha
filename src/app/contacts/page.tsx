import { Contacts } from "@/components/contacts/contacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Контакты магазинов «Атмосфера слуха»",
	description: "Контакты магазинов «Атмосфера слуха»",
};
export default function PageContacts() {
	return <Contacts />;
}
