import { ApparatItem } from "./apparat-item";

export function VitrinaMain({ dataVitrinaMain }: any) {
	const apparats = dataVitrinaMain.goods;
	return (
		<div className="my-16">
			<h2 className="my-3 text-2xl text-cyan-600">Товары по акции</h2>
			<div className="flex flex-wrap justify-center items-start gap-5 my-5">
				{apparats &&
					apparats?.map((item: any) => {
						return <ApparatItem key={item.id} dataItem={item} />;
					})}
			</div>
		</div>
	);
}
