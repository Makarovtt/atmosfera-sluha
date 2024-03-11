export function modificationPriceView(price: any) {
	const newPrice = new Intl.NumberFormat("ru-Ru", {
		style: "currency",
		currency: "RUB",
		maximumFractionDigits: 0,
	}).format(Number(price));
	return newPrice;
}
