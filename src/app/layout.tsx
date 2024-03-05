import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import clsx from "clsx";
import { Footer } from "@/components/footer/footer";
import { CatalogMain } from "@/components/catalog-main/catalog-main";
import { MenuMain } from "@/components/header/menu-main";
import { Providers } from "@/redux/provider";
import { UIProvider } from "./ui-provider";

const inter = Inter({ subsets: ["latin"] });

interface Ichildes {
	id: string;
	child: string;
	check: boolean;
}
interface Ifamilies {
	id: string;
	family: string;
	check: boolean;
	childes: Ichildes[] | [];
}
interface Vendor {
	id?: string | number;
	vendor?: string;
	image?: string | null;
	families?: Ifamilies[] | [];
}
interface Idata {
	brands_list: Vendor[];
}

const urlGetBrands = "https://server.atmosfera-sluha.ru/sluhmarketonline/app_brands.php";
async function getBrands(urlGetBrands: string): Promise<Idata> {
	const res = await fetch(urlGetBrands);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const jsonData = await res.json();
	return jsonData;
}

export const metadata: Metadata = {
	title: "Слуховые аппараты",
	description: "Федеральная сеть магазинов по продаже слуховых аппаратов!",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const dataBrands = await getBrands(urlGetBrands);
	const dataMenuMain: Vendor[] = dataBrands.brands_list;

	return (
		<html lang="en" className="light">
			<body className={clsx("", inter.className)}>
				<Providers>
					<Header />
					<MenuMain dataMenuMain={dataMenuMain} />
					<section className="max-w-[1600px] mx-auto">
						<div className="flex justify-start items-start mx-1 min-min-screen:mx-5 md:mx-10 2xl:mx-20 4xl:mx-auto my-10">
							<div className="w-64 grow-0 shrink-0 hidden lg-1000:block sticky top-[120px]">
								<CatalogMain dataMenuMain={dataMenuMain} />
							</div>
							<div className="lg-1000:ml-10 w-full">{children}</div>
						</div>
					</section>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
