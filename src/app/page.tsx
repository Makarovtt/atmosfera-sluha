import { SliderMain } from "@/components/catalog-main/slider/slider-main";
import { VitrinaMain } from "@/components/vitrina/vitrina-main";
import axios from "axios";

const urlGetApparats =
	"https://server.atmosfera-sluha.ru/sluhmarketonline/app_apparats_with_price.php";

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
	const dataApparats = await getApparats(urlGetApparats);
	return (
		<>
			<div>
				<SliderMain />
			</div>
			<div>
				<VitrinaMain dataVitrinaMain={dataApparats} />
			</div>
		</>
	);
}
