import Logo from "../../Content/Images/alfy.svg";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
	const navOptions = [
		{
			optionName: "Home",
			actionName: "#Home",
			navLink: "/",
		},
		{
			optionName: "Bootcamps",
			actionName: "#Bootcamps",

			navLink: "/",
		},
		{
			optionName: "About",
			actionName: "#About",

			navLink: "/",
		},
		{
			optionName: "How It Works",
			actionName: "#How",

			navLink: "/",
		},
		{
			optionName: "Why",
			actionName: "#Why",

			navLink: "/",
		},
		{
			optionName: "Testimonies",
			actionName: "#Testimonies",

			navLink: "/",
		},
		{
			optionName: "FAQ",
			actionName: "#FAQ",

			navLink: "/",
		},
	];
	const [activeOption, setActiveOption] = React.useState(0);
	const [showMenu, setShowMenu] = React.useState(false);
	return (
		<div
			className="flex items-center justify-between max-w-full py-5 fixed top-0 px-3"
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.9)",
				position: "fixed",
				top: 0,
				width: "100%",
				zIndex: 9,
			}}
		>
			<div className="sm:hidden xs:hidden md:flex lg:flex xl:flex"></div>
			<div className="flex items-center justify-between flex-row">
				<Image className="sm:pl-5 md:pl-5	" src={Logo} alt="Website Logo" />
				<div className="sm:hidden xs:hidden md:flex lg:flex xl:flex pl-12">
					{navOptions.map((item, index) => {
						return (
							<a
								className="flex font-semibold transition delay-150 duration-300 ease-in-out"
								key={index}
								href={item.actionName ?? ""}
								style={{
									padding: 10,
									fontSize: 14,
									//	fontWeight: "400",
									lineHeight: "15.96px",
									color: activeOption === index ? "#4CEE95" : "#004737",
									backgroundColor: "transparent",
									textAlign: "left",
								}}
							>
								{item.optionName}
							</a>
						);
					})}
				</div>
			</div>
			<div className="flex flex-row items-center">
				<button
					className="transition ease-in-out delay-150 font-medium bg-[#CEFFE5] hover:-translate-y-1 hover:scale-110 hover:bg-[#4CEE95] hover:font-normal duration-300"
					style={{
						// fontSize: 14,
						//fontWeight: "500",
						//						backgroundColor: "#CEFFE5",
						color: "#004737",
						textAlign: "center",
						fontSize: 12.7,
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
					className="transition ease-in-out delay-150 font-medium bg-[#4CEE95] hover:-translate-y-1 hover:scale-110 hover:bg-[#CEFFE5] hover:font-medium duration-300"
					style={{
						fontSize: 14,
						fontWeight: "400",
						//backgroundColor: "#4CEE95",
						color: "#004737",
						textAlign: "center",
						fontSize: 12.7,
						height: 34,
						minWidth: 75,
						borderRadius: 100,
						border: 0,
					}}
				>
					Login
				</button>
			</div>
			<div className="sm:hidden xs:hidden md:flex lg:flex xl:flex"></div>
			<div className="sm:flex xs:flex md:hidden lg:hidden xl:hidden flex p-5 dropdown-menu">
				<AiOutlineMenu
					size={25}
					class="menu-btn"
					onClick={() => {
						setShowMenu(!showMenu);
					}}
				/>
			</div>
			<div
				class="menu-content"
				style={{
					display: showMenu ? "flex" : "none",
					flexDirection: "column",
					position: "absolute",
					backgroundColor: "rgba(255, 255, 255, 0.9)",
					right: 0,
					top: 20,
					minWidth: "160px",
					zIndex: 1,
					borderRadius: 4,
					paddingLeft: 10,
				}}
			>
				{navOptions.map((item, index) => {
					return (
						<a
							className="flex font-semibold transition delay-150 duration-300 ease-in-out"
							key={index}
							href={item.actionName ?? ""}
							onClick={() => {
								setShowMenu(false);
							}}
							style={{
								padding: 10,
								fontSize: 14,
								//	fontWeight: "400",
								lineHeight: "15.96px",
								color: activeOption === index ? "#4CEE95" : "#004737",
								backgroundColor: "transparent",
								textAlign: "left",
							}}
						>
							{item.optionName}
						</a>
					);
				})}
			</div>
		</div>
	);
}
