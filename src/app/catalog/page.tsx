import { CatalogPageComponent } from "@/components/catalog-page/catalog-page";
import { BreadCrumbs } from "@/components/ui/breadcrumbs";
import axios from "axios";

const urlGetApparats =
	"https://server.atmosfera-sluha.ru/sluhmarketonline/app_apparats_with_price.php";

async function getApparats(urlGetApparats: string, page = 1): Promise<any> {
	const nmbPage = page;
	const limit = 20;
	const childName = null;
	const prices = null;

	const changeCheckAllData = {
		// 'onfilter': filtersList,
		nmbPage: nmbPage,
		limit: limit,
		child: childName,
		prices: prices,
	};
	const { data } = await axios.post(
		urlGetApparats,
		`getModuleFilter=${JSON.stringify(changeCheckAllData)}`,
	);
	return data;
}

export default async function CatalogPage(context: any) {
	const pageContext = context.searchParams.page;
	const dataApparats = await getApparats(urlGetApparats, pageContext);

	return (
		<>
			<BreadCrumbs />
			<div className="mt-5">
				<CatalogPageComponent
					dataApparats={dataApparats.goods}
					countApparats={dataApparats.count_all_goods}
					currentPage={dataApparats.page}
				/>
			</div>
		</>
	);
}
