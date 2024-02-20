"useClient";
import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
	variants: {
		// <- modify/add variants
		color: {
			brand: "text-white bg-cyan-500",
			none: "text-gray-400",
			// olive: "text-[#000] bg-[#56C8E8]",
			// orange: "bg-[#ff8c00] text-[#fff]",
			// violet: "bg-[#8b5cf6] text-[#fff]",
		},
		isDisabled: {
			true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
		},
		size: {
			xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small",
			md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small",
			xl: "px-unit-8 min-w-unit-28 h-unit-14 text-large gap-unit-4 rounded-medium",
			"none-min":
				"px-unit-4 min-w-unit-10 h-unit-14 text-xs gap-unit-2 flex items-center flex-col px-0",
			none: "px-unit-4 min-w-unit-10 h-unit-14 text-medium gap-unit-2 flex items-center flex-col",
		},
	},
	defaultVariants: {
		// <- modify/add default variants
		color: "brand",
		size: "xl",
	},
	compoundVariants: [
		// <- modify/add compound variants
		{
			isDisabled: true,
			color: "brand",
			class: "bg-[#56C8E8]/80 opacity-100",
		},
	],
});
