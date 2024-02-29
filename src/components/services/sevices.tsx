import { ServiceItem } from "./service-item";

export const objServices = [
	{
		id: 1,
		title: "Беспроцентная рассрочка",
		href: "/services/rassrochka",
		bg: "bg-[url('/images/services/service-item1.jpg')]",
	},
	{
		id: 2,
		title: "Бесплатный вызов на дом",
		href: "/services/dostavka",
		bg: "bg-[url('/images/services/service-item2.jpg')]",
	},
	{
		id: 3,
		title: "Бесплатное тестирование слуха",
		href: "/services/testirovanie",
		bg: "bg-[url('/images/services/service-item3.jpg')]",
	},
	{
		id: 4,
		title: "Бесплатная консультация",
		href: "/services/konsultatciya",
		bg: "bg-[url('/images/services/service-item4.jpg')]",
	},
	{
		id: 5,
		title: "Компенсация от ФСС",
		href: "/services/kompensatciya",
		bg: "bg-[url('/images/services/service-item5.jpg')]",
	},
];

export function ServicesComponent() {
	return (
		<>
			<div className="flex justify-center align-top mt-12 gap-10 flex-wrap">
				<div
					className="w-[300px] h-[300px] rounded-lg 
                                flex flex-col shrink-0"
				>
					<h2 className="text-left text-xl font-normal mt-6">
						Какие услуги <span className="text-cyan-700 ">мы оказываем</span>
					</h2>
					<div className="mt-10">
						Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже
						слуховых аппаратов и готова оказать проф услуги{" "}
						<span className="text-cyan-700 font-bold">БЕСПЛАТНО</span>
					</div>
				</div>

				{objServices.map((item) => {
					return (
						<ServiceItem
							key={item.id}
							title={item.title}
							href={item.href}
							bg={item.bg}
						/>
					);
				})}
			</div>
		</>
	);
}
