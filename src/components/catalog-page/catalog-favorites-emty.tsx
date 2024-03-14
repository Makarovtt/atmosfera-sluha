export function CatalogFavoritesEmpty({ isLoading }: any) {
	return (
		<>
			{!isLoading && (
				<div className="w-full h-full flex justify-center items-center">
					Нет товаров в Избранном
				</div>
			)}
		</>
	);
}
