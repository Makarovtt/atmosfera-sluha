"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export function SliderMain() {
	return (
		<>
			<Swiper
				slidesPerView={"auto"}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				centeredSlides={true}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				className="w-full h-[277px] border"
			>
				<SwiperSlide className="bg-[url('/images/slider-main/slide-1.jpg')] bg-cover bg-left sm:bg-center lg-1000:bg-right  relative">
					<div
						className="absolute top-[10px] sm:top-[30px] left-[10px] sm:left-[40px] 
                    w-8/9 small-screen:w-4/5 sm:w-2/5 z-20"
					>
						<h3 className="text-base sm:text-xl font-bold ">
							Вызов специалиста на дом
						</h3>
						<h2 className="text-lg sm:text-3xl font-extrabold my-3 text-cyan-600">
							БЕСПЛАТНО!
						</h2>
						<div>
							Наш специалист бесплатно приедет к Вам на дом или офис со всем
							необходимым оборудованием. Сделает тесты предложит на выбор аппараты и
							настроит выбранный БЕСПЛАТНО!
						</div>
					</div>
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-10 opacity-30 sm:opacity-0"></div>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('/images/slider-main/slide-2.jpg')] bg-cover bg-left sm:bg-center lg-1000:bg-right  relative">
					<div
						className="absolute top-[10px] sm:top-[30px] left-[10px] sm:left-[40px] 
                    w-8/9 small-screen:w-4/5 sm:w-2/5 z-20"
					>
						<h3 className="text-base sm:text-xl font-bold ">
							Вызов специалиста на дом
						</h3>
						<h2 className="text-lg sm:text-3xl font-extrabold my-3 text-cyan-600">
							БЕСПЛАТНО!
						</h2>
						<div>
							Наш специалист бесплатно приедет к Вам на дом или офис со всем
							необходимым оборудованием. Сделает тесты предложит на выбор аппараты и
							настроит выбранный БЕСПЛАТНО!
						</div>
					</div>
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-10 opacity-30 sm:opacity-0"></div>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('/images/slider-main/slide-3.jpg')] bg-cover bg-left sm:bg-center lg-1000:bg-right  relative">
					<div
						className="absolute top-[10px] sm:top-[30px] left-[10px] sm:left-[40px] 
                    w-8/9 small-screen:w-4/5 sm:w-2/5 z-20"
					>
						<h3 className="text-base sm:text-xl font-bold ">
							Вызов специалиста на дом
						</h3>
						<h2 className="text-lg sm:text-3xl font-extrabold my-3 text-cyan-600">
							БЕСПЛАТНО!
						</h2>
						<div>
							Наш специалист бесплатно приедет к Вам на дом или офис со всем
							необходимым оборудованием. Сделает тесты предложит на выбор аппараты и
							настроит выбранный БЕСПЛАТНО!
						</div>
					</div>
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-10 opacity-30 sm:opacity-0"></div>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('/images/slider-main/slide-4.jpg')] bg-cover bg-left sm:bg-center lg-1000:bg-right  relative">
					<div
						className="absolute top-[10px] sm:top-[30px] left-[10px] sm:left-[40px] 
                    w-8/9 small-screen:w-4/5 sm:w-2/5 z-20"
					>
						<h3 className="text-base sm:text-xl font-bold ">
							Вызов специалиста на дом
						</h3>
						<h2 className="text-lg sm:text-3xl font-extrabold my-3 text-cyan-600">
							БЕСПЛАТНО!
						</h2>
						<div>
							Наш специалист бесплатно приедет к Вам на дом или офис со всем
							необходимым оборудованием. Сделает тесты предложит на выбор аппараты и
							настроит выбранный БЕСПЛАТНО!
						</div>
					</div>
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-10 opacity-30 sm:opacity-0"></div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
