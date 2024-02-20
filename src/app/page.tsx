import { CatalogMain } from "@/components/catalog-main/catalog-main";
import { SliderMain } from "@/components/catalog-main/slider/slider-main";

const url = "https://server.atmosfera-sluha.ru/sluhmarketonline/app_brands.php";

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

async function getData(url: string): Promise<Idata> {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const jsonData = await res.json();
	return jsonData;
}

export default async function Home() {
	const data = await getData(url);

	const dataMenuMain: Vendor[] = data.brands_list;

	return (
		<>
			<section>
				<div className="flex justify-start items-start max-w-7xl mx-auto my-10 px-5">
					<div className="w-64 grow-0 shrink-0 hidden lg:block">
						<CatalogMain dataMenuMain={dataMenuMain} />
					</div>
					<div className="w-full lg:ml-10">
						<div>
							<SliderMain />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
