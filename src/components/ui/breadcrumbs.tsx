"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export function BreadCrumbs({ flag = "catalog", brand, family, undfamily }: any) {
	return (
		<div className="flex flex-col flex-wrap gap-4">
			<Breadcrumbs
				variant="solid"
				classNames={{
					list: "bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.16)] px-4 py-2",
				}}
			>
				<BreadcrumbItem
					href="/"
					startContent={<HomeIcon size={15} className="stroke-1.5 mr-1" />}
				>
					Главная
				</BreadcrumbItem>
				{flag && flag == "catalog" ? (
					<BreadcrumbItem href="/catalog">Каталог</BreadcrumbItem>
				) : null}
				{flag && flag == "services" ? (
					<BreadcrumbItem href="/services">Услуги</BreadcrumbItem>
				) : null}

				{flag == "catalog" && (
					<BreadcrumbItem href={`/catalog/${brand}`}>{brand}</BreadcrumbItem>
				)}
				{flag == "services" && (
					<BreadcrumbItem href={`/services/${brand}`}>{brand}</BreadcrumbItem>
				)}
				{family && (
					<BreadcrumbItem href={`/catalog/${brand}/${family}`}>{family}</BreadcrumbItem>
				)}
				{undfamily && <BreadcrumbItem>{undfamily}</BreadcrumbItem>}
			</Breadcrumbs>
		</div>
	);
}
