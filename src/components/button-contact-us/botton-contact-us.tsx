import Image from "next/image";
import ImgOperator from "@/public/images/social-btn/operator__icon.svg";

function SocialButton() {
	return (
		<div
			className="fixed right-[30px] bottom-[50px] flex flex-col items-end w-[70px] h-[70px] transition z-[100]
    hover:w-auto hover:h-auto cursor-pointer group"
		>
			<ul
				className="flex flex-col items-end absolute right-[13px] top-[80px] invisible transition-all ease list-none p-0 m-0
      group-hover:relative group-hover:top-auto group-hover:bottom-[20px] group-hover:visible"
			>
				<li
					className="md:flex items-center my-[4px] mx-0 transform-[scaleX(0.4)_scaleY(0.4)_translateY(150px)] opacity-0 invisible
                       transition-all hover:scale-110
                      group-hover:opacity-100 group-hover:visible group-hover:transform-[scaleX(1)_scaleY(1)_translateY(0)]"
				>
					<a
						href="tel:+89881728776"
						className="text-[12px] bg-[rgba(0,0,0,0.8)] 
                                                text-white no-underline p-[10px] rounded-[30px]"
					>
						Позвонить на горячую линию
					</a>
					<a
						href="tel:+89881728776"
						className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center ml-[10px] bg-cyan-600"
					>
						<Image
							src="/images/social-btn/phone__icon.svg"
							width={20}
							height={20}
							alt=""
						/>
					</a>
				</li>

				<li
					className="flex items-center my-[4px] mx-0 transform-[scaleX(0.4)_scaleY(0.4)_translateY(150px)] opacity-0 invisible
                      transition-all hover:scale-110
                      group-hover:opacity-100 group-hover:visible group-hover:transform-[scaleX(1)_scaleY(1)_translateY(0)]"
				>
					<a
						href="https://wa.me/89881728776"
						className="text-[12px] bg-[rgba(0,0,0,0.8)] 
                                                text-white no-underline p-[10px] rounded-[30px]"
						target={"_blank"}
						rel="noreferrer"
					>
						Написать в Whatsapp
					</a>
					<a
						href="https://wa.me/89881728776"
						className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center ml-[10px] bg-green-600"
						target={"_blank"}
						rel="noreferrer"
					>
						<Image
							src="/images/social-btn/whatsapp__icon.svg"
							width={21}
							height={21}
							alt=""
						/>
					</a>
				</li>
			</ul>
			<div
				className="w-[70px] h-[70px] bg-[#4af171] rounded-[50%] flex items-center justify-center opacity-90
      transition-[all_200ms_ease-out] animate-[animationbutton_3s_linear_infinite]
      group-hover:scale-110 group-hover:opacity-100"
			>
				<Image
					src={ImgOperator}
					alt="иконка Вотсап"
					width="50"
					height="50"
					// fill="green"
				/>
			</div>
		</div>
	);
}

export default SocialButton;
