import Logo from "../../Content/Images/logo.png";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
	const navOptions = [
		{
			optionName: "Home",
			navLink: "/",
		},
		{
			optionName: "Bootcamps",
			navLink: "/",
		},
		{
			optionName: "About",
			navLink: "/",
		},
		{
			optionName: "How It Works",
			navLink: "/",
		},
		{
			optionName: "Why",
			navLink: "/",
		},
		{
			optionName: "Testimonies",
			navLink: "/",
		},
		{
			optionName: "FAQ",
			navLink: "/",
		},
	];
	const [activeOption, setActiveOption] = React.useState(0);
	return (
		<div
			className="flex items-center justify-between max-w-full py-5 fixed top-0 px-3"
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.9)",
				width: "100%",
			}}
		>
			<div className="sm:hidden xs:hidden md:flex lg:flex xl:flex"></div>
			<Image className="sm:pl-5 md:pl-5	" src={Logo} alt="Website Logo" />
			<div className="sm:hidden xs:hidden md:flex lg:flex xl:flex">
				{navOptions.map((item, index) => {
					return (
						<span
							key={index}
							style={{
								padding: 10,
								fontSize: 14,
								fontWeight: "bold",
								lineHeight: "15.96px",
								color: activeOption === index ? "#4CEE95" : "#004737",
							}}
						>
							{item.optionName}
						</span>
					);
				})}
			</div>
			<div className="flex flex-row items-center">
				<button
					style={{
						// fontSize: 14,
						fontWeight: "bold",
						backgroundColor: "#CEFFE5",
						color: "#004737",
						textAlign: "center",
						font: 12.7,
						height: 34,
						minWidth: 135,
						borderRadius: 100,
						border: 0,
						marginRight: 13,
					}}
				>
					Request Access
				</button>
				<button
					style={{
						fontSize: 14,
						fontWeight: "normal",
						backgroundColor: "#4CEE95",
						color: "#004737",
						textAlign: "center",
						font: 12.7,
						height: 34,
						minWidth: 75,
						borderRadius: 100,
						border: 0,
					}}
				>
					Login
				</button>
			</div>
			<div className="sm:flex xs:flex md:hidden lg:hidden xl:hidden flex p-5">
				<AiOutlineMenu size={25} />
			</div>
		</div>
	);
}
