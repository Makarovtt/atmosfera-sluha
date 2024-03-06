import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const items =
	localStorage.getItem("country") !== null
		? JSON.parse(localStorage.getItem("country") || "")
		: 2;

type CountryState = {
	value: number;
};

const initialState = {
	value: items,
} as CountryState;

export const country = createSlice({
	name: "country",
	initialState,
	reducers: {
		change: (state, action: PayloadAction<number>) => {
			state.value = action.payload;

			localStorage.setItem("country", JSON.stringify(state.value));
		},
	},
});

export const { change } = country.actions;
export default country.reducer;
