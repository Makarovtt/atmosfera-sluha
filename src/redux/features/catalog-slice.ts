import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Childes = [
	{
		id: Number;
		child: string;
		check: boolean;
	},
];
type Families = [
	{
		id: Number;
		family: string;
		check: boolean;
		childes?: Childes[] | null;
	},
];
type CatalogState = [
	{
		id: Number;
		vendor: string;
		image: string | null;
		families?: Families[];
	},
];
const initialState: CatalogState = [
	{
		id: 0,
		vendor: "",
		image: null,
		families: [],
	},
] as CatalogState;

export const catalogMenu = createSlice({
	name: "catalogMenu",
	initialState,
	reducers: {
		change: (state, action: PayloadAction<any>) => {
			const getValue = action.payload;
			state.splice(0, 1);
			getValue.map((iArr: any) => {
				if (!state.find((i: any) => i.id === iArr.id)) {
					const arrFamily: any = [];
					iArr.families.map((iFamilies: any) => {
						const arrChildes: any = [];
						iFamilies.childes.map((iChildes: any) => {
							arrChildes.push({
								id: iChildes.id,
								child: iChildes.child,
								check: iChildes.check,
							});
						});

						arrFamily.push({
							id: iFamilies.id,
							family: iFamilies.family,
							check: iFamilies.check,
							childes: arrChildes,
						});
					});

					state.push({
						id: iArr.id,
						vendor: iArr.vendor,
						image: iArr.image,
						families: arrFamily,
					});
				}
			});
		},
	},
});

export const { change } = catalogMenu.actions;
export default catalogMenu.reducer;
