import { Link, Button } from "@nextui-org/react";
import clsx from "clsx";
interface Props {
	className?: React.ComponentProps<"div">["className"];
}
export function MenuMainTop({ className }: Props) {
	return (
		<nav
			className={clsx(
				"justify-between items-center max-w-[2400px] md:mx-10 2xl:mx-20 4xl:mx-auto mx-auto",
				className,
			)}
		>
			<div className="w-64 grow-0 justify-center">
				<div className="w-full">
					<Button
						as={Link}
						size="lg"
						color="primary"
						href="#"
						variant="flat"
						className="w-full"
					>
						Каталог
					</Button>
				</div>
			</div>

			<div className="hidden gap-6 justify-end sm:flex">
				<div>
					<Link color="foreground" href="#">
						О компании
					</Link>
				</div>
				<div>
					<Link href="#" aria-current="page" className="text-cyan-700">
						Услуги
					</Link>
				</div>
				<div>
					<Link color="foreground" href="#">
						Выезд специалиста на дом
					</Link>
				</div>
				<div>
					<Link color="foreground" href="#">
						Контакты
					</Link>
				</div>
			</div>
		</nav>
	);
}
