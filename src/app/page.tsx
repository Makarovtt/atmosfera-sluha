import { CatalogMain } from "@/components/catalog-main/catalog-main";
import { SliderMain } from "@/components/catalog-main/slider/slider-main";
import { VitrinaMain } from "@/components/vitrina/vitrina-main";
import axios from "axios";

const urlGetBrands = "https://server.atmosfera-sluha.ru/sluhmarketonline/app_brands.php";
const urlGetApparats =
	"https://server.atmosfera-sluha.ru/sluhmarketonline/app_apparats_with_price.php";

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

async function getBrands(urlGetBrands: string): Promise<Idata> {
	const res = await fetch(urlGetBrands);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const jsonData = await res.json();
	return jsonData;
}

async function getApparats(urlGetApparats: string): Promise<any> {
	const changeCheckAllData = {
		type: "Акции",
		nmbPage: 1,
		limit: 20,
	};
	const { data } = await axios.post(
		urlGetApparats,
		`getModulePromo=${JSON.stringify(changeCheckAllData)}`,
	);
	return data;
}

export default async function Home() {
	const dataBrands = await getBrands(urlGetBrands);
	const dataApparats = await getApparats(urlGetApparats);

	const dataMenuMain: Vendor[] = dataBrands.brands_list;

	return (
		<>
			<section>
				<div className="flex justify-start items-start max-w-[2400px] mx-5 md:mx-10 2xl:mx-20 4xl:mx-auto my-10">
					<div className="w-64 grow-0 shrink-0 hidden lg-1000:block sticky top-[120px]">
						<CatalogMain dataMenuMain={dataMenuMain} />
					</div>
					<div className="lg-1000:ml-10 w-full">
						<div>
							<SliderMain />
						</div>
						<div>
							<VitrinaMain dataVitrinaMain={dataApparats} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
