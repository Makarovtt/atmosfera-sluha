"use client";

import Image from "next/image";
import Logo from "@/public/images/footer/logotype-footer.svg";
import { Navigation, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import BzCekh from "@/public/images/footer/logo-bzcekh.svg";
import { useAppSelector } from "@/redux/hooks";
import { CONTACTS_DATA } from "@/components/contacts/data";

const contactsData = CONTACTS_DATA;

export function Footer() {
	const idCountry = useAppSelector((state) => state.countryReducer.value);
	const country = contactsData.find((item) => item.id === idCountry);
	return (
		<>
			<footer className=" bg-cyan-700 py-10 hidden lg-1000:block">
				<div className="max-w-[1600px] mx-auto">
					<div
						className="mx-5 my-4 flex flex-col justify-between items-start
                            min-min-screen:flex-row 
                            md:mx-10 
                            2xl:mx-20 
                            4xl:mx-auto"
					>
						<div>
							<Image src={Logo} alt="" />
							<div className="mt-10">
								<div className="text-white text-xl font-semibold">
									{country?.name}:
								</div>
								<div className="text-white flex justify-start items-center my-2">
									<Navigation size={20} className="stroke-2 text-white mr-2" />
									{country?.street}
								</div>
								{country?.phone &&
									country?.phone.map((item, index) => {
										return (
											<div
												key={index}
												className="text-white flex justify-start items-center my-2"
											>
												<Phone
													size={20}
													className="stroke-2 text-white mr-2"
												/>
												<Link
													href={`tel:${item}`}
													className="text-white text-base hover:underline"
												>
													{" "}
													{item}
												</Link>
											</div>
										);
									})}
							</div>
							<div className="text-white text-base mt-2 font-extralight">
								All rights reserved © 2024
							</div>
							<Button className="bg-transparent py-7 mt-8 pl-0">
								<Link href="https://bzcekh.ru" target="_blank">
									<Image src={BzCekh} alt="" />
								</Link>
							</Button>
						</div>

						<div>
							<div className="text-white text-xl font-semibold">СТРАНИЦЫ</div>
							<ul className="flex flex-col gap-3 mt-5">
								<li className="text-white font-light text-base">Главная</li>
								<li className="text-white font-light text-base">О компании</li>
								<li className="text-white font-light text-base">Контакты</li>
							</ul>
						</div>

						<div>
							<div className="text-white text-xl font-semibold">УСЛУГИ</div>
							<ul className="flex flex-col gap-3 mt-5">
								<li className="text-white font-light text-base">Проверка слуха</li>
								<li className="text-white font-light text-base">Выезд на дом</li>
								<li className="text-white font-light text-base">
									Бесплатная консультация
								</li>
								<li className="text-white font-light text-base">
									Компенсация от ФСС
								</li>
								<li className="text-white font-light text-base">
									Беспроцентная рассрочка
								</li>
							</ul>
						</div>

						<div>
							<div className="text-white text-xl font-semibold">ПРОДУКЦИЯ</div>
							<ul className="flex flex-col gap-3 mt-5">
								<li className="text-white font-light text-base">
									Слуховые аппараты
								</li>
								<li className="text-white font-light text-base">AudiFon</li>
								<li className="text-white font-light text-base">Widex</li>
								<li className="text-white font-light text-base">Signia</li>
								<li className="text-white font-light text-base">Bernafon</li>
								<li className="text-white font-light text-base">A&M</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			<div className="block h-20 lg-1000:hidden"></div>
		</>
	);
}
