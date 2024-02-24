import Image from "next/image";
import imgAboutUs1 from "@/public/images/about-us/about1.jpg";
import imgAboutUs2 from "@/public/images/about-us/about2.jpg";
import imgAboutUs3 from "@/public/images/about-us/about3.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "О магазине «Атмосфера слуха»",
	description: "О магазине «Атмосфера слуха»",
};

export default function Home() {
	return (
		<>
			<h1 className="text-center text-2xl text-cyan-700 font-bold mb-5 mt-10">
				О магазине «Атмосфера слуха»
			</h1>
			<div className="flex justify-between gap-10 items-center flex-wrap md:flex-nowrap">
				<div className="m-10 flex-shrink-0">
					<Image src={imgAboutUs1} alt="" width={350} height={230} />
				</div>
				<div>
					<p className="my-5">
						Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже
						слуховых аппаратов. Мы бесплатно и&nbsp;без обязательств тестируем слух
						наших клиентов на качественном и&nbsp;высокотехнологичном оборудовании.
					</p>
					<p className="my-5">
						В&nbsp;течение почти 10 лет, мы помогли сотням людей, насладиться
						преимуществами четкого слуха. Наш опыт и&nbsp;обширные ресурсы оправдывают
						наше утверждение: «Ваш слух находится в надежных руках».
					</p>
					<p className="my-5">
						Более 1000 человек доверяют нам, проверяя свой слух и посещая нас каждый
						год.
					</p>
				</div>
			</div>
			<div className="flex justify-between gap-10 items-center flex-wrap md:flex-nowrap">
				<div className="order-2 md:order-1">
					<p className="my-5">
						На&nbsp;протяжении долгого времени продаж слуховых аппаратов, мы гордимся
						тем, что наши клиенты могут доверять нам. Мы&nbsp;понимаем, насколько важен
						слух для Вас, и наши эксперты постоянно работают над тем, чтобы сделать
						положительные изменения в Вашей жизни, заботясь о вашем слухе. Мы также
						гордимся нашим качеством обслуживания клиентов, и считаем, что
						индивидуальный подход и эксклюзивный сервис, который мы предлагаем может
						сохраниться еще долгое время, чтобы наши клиенты чувствовали себя комфортно
						с нами.
					</p>
				</div>
				<div className="m-10 flex-shrink-0 order-1 md:order-2">
					<Image src={imgAboutUs2} alt="" width={350} height={230} />
				</div>
			</div>
			<div className="flex justify-between gap-10 items-center flex-wrap md:flex-nowrap">
				<div className="m-10 flex-shrink-0">
					<Image src={imgAboutUs3} alt="" width={350} height={230} />
				</div>
				<div>
					<p className="my-5">
						В&nbsp;качестве поставщиков медицинских услуг, для нас важно, что советы,
						которые мы даем и продукты, которые мы рекомендуем, обладают высочайшим
						качеством, и поэтому наши опытные и высококвалифицированные сотрудники
						стремятся, где это возможно, улучшить слух клиента слуха без помощи
						сторонней техники. Наши слуховые тесты являются бесплатными и не несут
						никаких обязательств, и мы стремимся предоставить широкий спектр слуховых
						аппаратов от лучших производителей, профессионально протестировать и
						установить, а также предоставить пакет обслуживания.
					</p>
				</div>
			</div>
		</>
	);
}
