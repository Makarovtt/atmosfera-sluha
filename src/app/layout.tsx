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

export const metadata: Metadata = {
	title: "Слуховые аппараты",
	description: "Федеральная сеть магазинов по продаже слуховых аппаратов!",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="light">
			<body className={clsx("", inter.className)}>
				<Providers>
					<Header />
					<MenuMain />
					<section className="max-w-[1600px] mx-auto">
						<div className="flex justify-start items-start mx-2 min-360:mx-5  md:mx-10 2xl:mx-20 4xl:mx-auto my-10">
							<div className="w-64 grow-0 shrink-0 hidden lg-1000:block sticky top-[120px]">
								<CatalogMain />
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
