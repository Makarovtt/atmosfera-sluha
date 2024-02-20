import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import clsx from "clsx";
interface Props {
	className?: React.ComponentProps<"div">["className"];
}
export function MenuMainTop({ className }: Props) {
	return (
		<Navbar
			shouldHideOnScroll
			maxWidth="xl"
			className={clsx("max-w-7xl w-full mx-auto", className)}
		>
			{/* <NavbarBrand>
			<AcmeLogo />
			<p className="font-bold text-inherit">ACME</p>
		</NavbarBrand> */}

			<NavbarContent justify="center" className="w-64 grow-0">
				<NavbarItem className="w-full">
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
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="hidden w-4/6 sm:flex gap-6" justify="end">
				<NavbarItem>
					<Link color="foreground" href="#">
						О компании
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Услуги
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Выезд специалиста на дом
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Контакты
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
