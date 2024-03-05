import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter-slice";
import catalogReducer from "./features/catalog-slice";
import countryReducer from "./features/country-slice";

export const store = configureStore({
	reducer: {
		countryReducer,
		catalogReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
