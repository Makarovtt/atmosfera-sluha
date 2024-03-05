import { CatalogPageComponent } from "@/components/catalog-page/catalog-page";
import { BreadCrumbs } from "@/components/ui/breadcrumbs";
import { ApparatCard } from "@/components/vitrina/apparat-card";
import axios from "axios";
import { NextRequest } from "next/server";

const urlGetApparats =
	"https://server.atmosfera-sluha.ru/sluhmarketonline/app_apparats_with_price.php";

async function getApparats(
	urlGetApparats: string,
	page = 1,
	brand = null,
	family = null,
	undfamily = null,
	apparat = "",
): Promise<any> {
	const vendor = brand === "A&M" ? "A%26M" : brand;
	const nmbPage = page;
	const limit = 20;
	const childName = null;
	const prices = null;

	let apparatName = "";
	if (apparat.includes("&")) {
		let startPosition = apparat.indexOf("&");
		let strStart = apparat.slice(0, startPosition);
		let strEnd = apparat.slice(startPosition + 1);
		apparatName = strStart + "%26" + strEnd;
	} else {
		apparatName = apparat;
	}
	const { data } = await axios.get(`${urlGetApparats}?title=${apparatName}`);
	return data;
}
export default async function CatalogBrands(context: any) {
	const brandContext = context.params.brands.replace(/%20/g, " ").replace(/%26/g, "&");
	const familyContext = context.params.family.replace(/%20/g, " ").replace(/%26/g, "&");
	const undfamilyContext = context.params.undfamily.replace(/%20/g, " ").replace(/%26/g, "&");
	const apparatContext = context.params.apparat.replace(/%20/g, " ").replace(/%26/g, "&");
	// const undfamilyContext = undfamilyGet.replace(/%20/g, " ");
	const pageContext = context.searchParams.page;
	const dataApparats = await getApparats(
		urlGetApparats,
		pageContext,
		brandContext,
		familyContext,
		undfamilyContext,
		apparatContext,
	);
	return (
		<>
			<BreadCrumbs
				brand={brandContext}
				family={familyContext}
				undfamily={undfamilyContext}
				title={apparatContext}
			/>
			<h1 className="mt-10 text-4xl font-bold mb-10 px-3 sm:px-0">
				{dataApparats.goods[0].title}
			</h1>
			<ApparatCard dataInfo={dataApparats} />
		</>
	);
}
