import { ServiceItem } from "./service-item";
import { DATA_SERVICES } from "./services-data";

const objServices = DATA_SERVICES;

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

				{objServices &&
					objServices.map((item) => {
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
