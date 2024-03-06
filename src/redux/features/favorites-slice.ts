import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const items =
	localStorage.getItem("favorites") !== null
		? JSON.parse(localStorage.getItem("favorites") || "")
		: [];

type CountryState = Number[];

const initialState = items as CountryState;

export const favorite = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		change: (state, action: PayloadAction<number>) => {
			const idApparat = action.payload;
			const isExists = state.some((r) => r === idApparat);

			if (isExists) {
				const index = state.findIndex((r) => r === idApparat);
				if (index !== -1) {
					state.splice(index, 1);
				}
			} else {
				state.push(idApparat);
			}
			localStorage.setItem("favorites", JSON.stringify(state));
		},
	},
});

export const { change } = favorite.actions;
export default favorite.reducer;
