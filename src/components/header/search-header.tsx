"use client";

import { Button, Input } from "@nextui-org/react";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchHeader() {
	const [isFocusHandler, setIsFocusHandler] = useState<boolean>(false);
	function onFocusHandler() {
		setIsFocusHandler((prev) => !prev);
	}
	return (
		<>
			<Input
				isClearable
				radius="lg"
				className="z-[60] relative rounded-2xl"
				classNames={{
					label: "text-black/50 dark:text-white/90",
					input: [
						// "bg-transparent",
						"text-black/90 dark:text-white/90",
						"placeholder:text-default-700/50 dark:placeholder:text-white/60",
					],
					base: "bg-white",
					innerWrapper: "bg-transparent",
					inputWrapper: [
						"data-[hover]:shadow-md",
						"bg-slate-100",
						"data-[hover]:bg-white",
						"data-[focus]:bg-white",
						"focus:bg-white",
						"border",
						"w-full",
						// "dark:bg-default/60",
						"backdrop-blur-xl",
						"backdrop-saturate-200",
						// "hover:bg-default-200/70",
						// "dark:hover:bg-default/70",
						"group-data-[focus=true]:bg-white",
						"dark:group-data-[focused=true]:bg-white",
						"!cursor-text",
					],
				}}
				placeholder="Поиск по сайту..."
				onFocus={onFocusHandler}
				onBlur={onFocusHandler}
				startContent={<Search />}
				endContent={<Button>Найти</Button>}
			/>
			<div
				className={clsx(
					"fixed top-0 bottom-0 left-0 right-0 bg-black opacity-20 z-50 transition",
					isFocusHandler ? "block" : "hidden",
				)}
			></div>
		</>
	);
}
