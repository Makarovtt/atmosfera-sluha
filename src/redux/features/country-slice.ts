import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CountryState = {
	value: number;
};

const initialState = {
	value: 2,
} as CountryState;

export const country = createSlice({
	name: "country",
	initialState,
	reducers: {
		change: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
	},
});

export const { change } = country.actions;
export default country.reducer;
