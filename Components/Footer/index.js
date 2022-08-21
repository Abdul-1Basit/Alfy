import Logo from "../../Content/Images/whiteLogo.png";
import Fb from "../../Content/Images/facebook.png";
import Insta from "../../Content/Images/insta.png";
import LinkedIn from "../../Content/Images/linkedin.png";
import Twitter from "../../Content/Images/Twitter.png";
import Youtube from "../../Content/Images/youtube.png";
import Image from "next/image";
import React from "react";

export default function Footer() {
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
			className="w-full h-full
			lg:pl-[171px]
			lg:max-h-[573px]
			xs:px-[20px]
			xs:pt-[4px]
			sm:px-[20px]
			sm:pt-[4px]
			"
			style={{
				maxHeight: 573,
				backgroundColor: "#041D18",
				paddingTop: 40,
				borderRadius: 20,
			}}
		>
			<div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
					}}
				>
					<Image src={Logo} alt="Website Logo" />

					<div
						className="flex items-center justify-between
					lg:flex-row
					md:flex-row
					sm:hidden
					xs:hidden
					"
					>
						{navOptions.map((item, index) => {
							return (
								<span
									key={index}
									style={{
										padding: 10,
										fontSize: 14,
										fontWeight: "bold",
										lineHeight: "15.96px",
										color: "##FFFAE9",
									}}
								>
									{item.optionName}
								</span>
							);
						})}
					</div>
					<div></div>

					<div className="flex items-center flex-row">
						<button
							style={{
								// fontSize: 14,
								fontWeight: "700",
								backgroundColor: "#CEFFE5",
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
							style={{
								fontSize: 14,
								fontWeight: "normal",
								backgroundColor: "#4CEE95",
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
					<div></div>
				</div>
				<div style={{ paddingTop: 76 }}>
					<span
						className="not-italic
						font-normal 
						lg:text-6xl
						md:text-6xl
						xs:text-xl
						sm:text-xl
						
						"
						style={{
							fontFamily: "Helvetica Neue",

							color: "#FFFBEB",
						}}
					>
						Enjoy learning.
						<br /> Stay relevant.
						<br />
						<span style={{ color: "#4CEE95" }}>Land a job</span>
					</span>
				</div>
				<div
					className="flex items-center justify-between w-full
					pb-[56px]
					lg:pt-[100px]
					lg:pr-[51px]
					md:pt-[100px]
					md:pr-[51px]
					xs:pt-[100px]
					xs:pr-[0px]
					sm:pt-[100px]
					sm:pr-[0px]
					
					"
				>
					<div>
						<span
							className="not-italic font-normal 
							lg:text-sm
							md:text-sm
							xs:text-[7px]
							sm:text-[7px]						
							"
							style={{
								fontFamily: "Helvetica Neue",
								letterSpacing: "0.055em",
								color: "#FFFAE9",
							}}
						>
							All right reserved to Alfy
						</span>
					</div>
					<div
						className="flex items-center justify-between
					flex-row
										"
					>
						<Image src={Fb} alt="fb" /> &nbsp;
						<Image src={Insta} alt="insta" /> &nbsp;
						<Image src={LinkedIn} alt="linkedin" /> &nbsp;
						<Image src={Twitter} alt="twitter" /> &nbsp;
						<Image src={Youtube} alt="youtube" />
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<span
							className="not-italic font-normal 
							lg:text-sm
							md:text-sm
							xs:text-[7px]
							sm:text-[7px]						
							"
							style={{
								fontFamily: "Helvetica Neue",
								letterSpacing: "0.055em",
								color: "#FFFAE9",
							}}
						>
							Terms
						</span>
						&nbsp; &nbsp; &nbsp; &nbsp;
						<span
							className="not-italic font-normal 
							lg:text-sm
							md:text-sm
							xs:text-[7px]
							sm:text-[7px]						
							"
							style={{
								fontFamily: "Helvetica Neue",
								letterSpacing: "0.055em",
								color: "#FFFAE9",
							}}
						>
							Privacy
						</span>
					</div>
					<div>
						<span
							className="not-italic font-normal 
							lg:text-sm
							md:text-sm
							xs:text-[7px]
							sm:text-[7px]						
							"
							style={{
								fontFamily: "Helvetica Neue",
								letterSpacing: "0.055em",
								color: "#FFFAE9",
							}}
						>
							Created by Naveh Mevorach
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
