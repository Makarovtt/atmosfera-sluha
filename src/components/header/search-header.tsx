import { Button, Input } from "@nextui-org/react";
import { Search } from "lucide-react";

export function SearchHeader() {
	return (
		<Input
			isClearable
			radius="lg"
			classNames={{
				label: "text-black/50 dark:text-white/90",
				input: [
					"bg-transparent",
					"text-black/90 dark:text-white/90",
					"placeholder:text-default-700/50 dark:placeholder:text-white/60",
				],
				innerWrapper: "bg-transparent",
				inputWrapper: [
					"data-[hover]:shadow-md",
					"bg-slate-100",
					"data-[hover]:sbg-white",
					"border",
					"w-full",
					"dark:bg-default/60",
					"backdrop-blur-xl",
					"backdrop-saturate-200",
					"hover:bg-default-200/70",
					"dark:hover:bg-default/70",
					"group-data-[focused=true]:bg-default-200/50",
					"dark:group-data-[focused=true]:bg-default/60",
					"!cursor-text",
				],
			}}
			placeholder="Поиск по сайту..."
			startContent={<Search />}
			endContent={<Button>Найти</Button>}
		/>
	);
}
