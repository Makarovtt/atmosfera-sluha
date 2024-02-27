import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
	value: string;
};

const initialState = {
	value: "5",
} as CounterState;

export const counter = createSlice({
	name: "counter",
	initialState,
	reducers: {
		change: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { change } = counter.actions;
export default counter.reducer;
