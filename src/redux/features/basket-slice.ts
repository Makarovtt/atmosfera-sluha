import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const items =
// 	localStorage.getItem("basketReducer") !== null
// 		? JSON.parse(localStorage.getItem("basketReducer") || "")
// 		: [];

let items = [];
if (typeof window !== "undefined" && localStorage.getItem("basketReducer") !== null) {
	items = JSON.parse(localStorage.getItem("basketReducer") || "");
}

type CountryState = [
	{
		id: number;
		quantity: number;
		image: string;
		price: number;
		title: string;
	},
];

const initialState = items as CountryState;

export const basket = createSlice({
	name: "basket",
	initialState,
	reducers: {
		addToBasket: (state, action: PayloadAction<any>) => {
			const idApparat = action.payload;
			const isExists = state.some((r) => r.id === idApparat.id);
			if (isExists) {
			} else {
				const tempObj = {
					id: idApparat.id,
					quantity: 1,
					image: idApparat.picture,
					price: idApparat.price,
					title: idApparat.title,
				};
				state.push(tempObj);
			}
			localStorage.setItem("basketReducer", JSON.stringify(state));
		},
		removeToBasket: (state, action: PayloadAction<number>) => {
			const idApparat = action.payload;
			const isExists = state.some((r) => r.id === idApparat);
			if (isExists) {
				const index = state.findIndex((r) => r.id === idApparat);
				if (index !== -1) {
					state.splice(index, 1);
				}
			}
			localStorage.setItem("basketReducer", JSON.stringify(state));
		},
		clearBasket: (state) => {
			state.splice(0, state.length);
			localStorage.setItem("basketReducer", JSON.stringify(state));
		},
		addCountApparatsToBasket: (state, action: PayloadAction<number>) => {
			const idApparat = action.payload;
			const index = state.findIndex((i) => i.id === idApparat);
			const quant = state[index].quantity;
			state[index].quantity = quant + 1;
			localStorage.setItem("basketReducer", JSON.stringify(state));
		},
		removeCountApparatsToBasket: (state, action: PayloadAction<number>) => {
			const idApparat = action.payload;
			const index = state.findIndex((i) => i.id === idApparat);
			const quant = state[index].quantity;
			if (quant === 1) {
				state.splice(index, 1);
			} else {
				state[index].quantity = quant - 1;
			}

			localStorage.setItem("basketReducer", JSON.stringify(state));
		},
	},
});

export const {
	addToBasket,
	removeToBasket,
	clearBasket,
	addCountApparatsToBasket,
	removeCountApparatsToBasket,
} = basket.actions;
export default basket.reducer;
