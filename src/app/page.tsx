import { SliderMain } from "@/components/catalog-main/slider/slider-main";
import { VitrinaMain } from "@/components/vitrina/vitrina-main";

export default async function Home() {
	return (
		<>
			<div>
				<SliderMain />
			</div>
			<div>
				<VitrinaMain />
			</div>
		</>
	);
}
