import { CatalogPageComponent } from "@/components/catalog-page/catalog-page";
import { BreadCrumbs } from "@/components/ui/breadcrumbs";
import axios from "axios";
import { NextRequest } from "next/server";

const urlGetApparats =
	"https://server.atmosfera-sluha.ru/sluhmarketonline/app_apparats_with_price.php";

async function getApparats(urlGetApparats: string, page = 1, brand = "A&M"): Promise<any> {
	const vendor = brand === "A&M" ? "A%26M" : brand;
	const nmbPage = page;
	const limit = 20;
	const childName = null;
	const prices = null;

	const changeCheckAllData = {
		// 'onfilter': filtersList,
		vendor: vendor,
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
export default async function CatalogBrands(context: any) {
	const brandContext = context.params.brands.replace(/%20/g, " ").replace(/%26/g, "&");
	const pageContext = context.searchParams.page;
	const dataApparats = await getApparats(urlGetApparats, pageContext, brandContext);
	return (
		<>
			<BreadCrumbs brand={brandContext} />
			<div className="mt-5">
				<CatalogPageComponent
					dataApparats={dataApparats.goods}
					countApparats={dataApparats.count_all_goods}
					currentPage={dataApparats.page}
					brand={brandContext}
				/>
			</div>
		</>
	);
}
