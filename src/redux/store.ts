import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./features/country-slice";
import favoriteReducer from "./features/favorites-slice";
import basketReducer from "./features/basket-slice";

export const store = configureStore({
	reducer: {
		basketReducer,
		favoriteReducer,
		countryReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
