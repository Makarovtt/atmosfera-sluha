import { CatalogFindApparats } from "@/components/catalog-page/catalog-find";

export default function CatalogFavorites() {
	const titlePage = "Избранное";

	return (
		<>
			<div className="mt-5">
				<CatalogFindApparats titlePage={titlePage} />
			</div>
		</>
	);
}
