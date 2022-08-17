import Image from "next/image";
import Logo from "../../Content/Images/whiteLogo.png";
import Fb from "../../Content/Images/facebook.png";
import Insta from "../../Content/Images/insta.png";
import LinkedIn from "../../Content/Images/linkedin.png";
import Twitter from "../../Content/Images/Twitter.png";
import Youtube from "../../Content/Images/youtube.png";
import leftArrow from "../../Content/Images/left.png";
import rightArrow from "../../Content/Images/right.png";
import { primaryColor, secondaryColor } from "../Constants";
import tank from "../../Content/Images/Tank.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import woody from "../../Content/Images/woody.png";
import ReactPlayer from "react-player";
import React from "react";
const tempLink =
	"https://www.youtube.com/watch?v=AFtUpMTs4vI&t=9s&ab_channel=BMWCanada";
const VideoStyles = {
	width: "100%",
	maxWidth: "290px",
	height: 404,
	borderRadius: 20,
	paddingBottom: 8,
};
export default function AutoPilot() {
	return (
		<div className="w-full flex items-center flex-col justify-center">
			<div className="flex items-center flex-col justify-center pt-40 w-full">
				<p
					className="font-normal text-center max-w-5xl w-full
					lg:text-8xl
					md:text-8xl
					xs:text-[32px]
					sm:text-[32px]
					"
					style={{
						fontFamily: "Aeonik TRIAL",
						color: "#004737",
					}}
				>
					Online learning is Borken. And We Just fixed it.
				</p>
				<p
					className="text-center pb-14 font-normal	
					lg:text-[22px]
					lg:px-[412px]
					md:text-[22px]
					md:px-[412px]
					sm:text-sm
					sm:px-[22px]
					xs:text-sm
					xs:px-[22px]
					"
					style={{
						fontFamily: "Work Sans",
						color: "#004737",
						opacity: "60%",
					}}
				>
					We provide a bootcamp-style experience, boosting your accountability,
					helping you through each step of your learning journey, and filtering
					the most relevant content for you. All of that so you will finish your
					learning journey and land a job.
				</p>
				<button
					style={{
						// fontSize: 14,
						fontWeight: "bold",
						backgroundColor: "#CEFFE5",
						color: "#004737",
						textAlign: "center",
						font: 12.7,
						height: 34,
						width: "100%",
						maxWidth: 199,
						borderRadius: 100,
						border: 0,
						marginRight: 13,
					}}
				>
					Request Access
				</button>
			</div>
			<AnimatedTabs />
			<br />
			<Existance />
			<br />
			<Steps />
			<About />
			<LandJob />
			<Faq />
			<div style={{ height: 140 }}></div>
			<br />
			<br />
			<Footer />
		</div>
	);
}
export function AnimatedTabs() {
	const [active, setActive] = React.useState(0);
	function setActiveTab(i) {
		setActive(i);
	}
	return (
		<div className="flex items-center justify-center max-w-full">
			<div className="flex flex-col items-center max-w-full justify-center pt-28">
				<div className="flex flex-row items-center justify-between  	">
					<span
						className="text-lg font-medium not-italic text-center pb-5	"
						style={{
							fontFamily: "Helvetica Neue",
							color: active === 0 ? "#004737" : "rgba(0, 71, 45, 0.5)",
							borderBottom:
								active === 0
									? "3px solid" + secondaryColor
									: "1px solid rgba(0, 71, 45, 0.5)",
							width: 192,
						}}
						onClick={() => setActiveTab(0)}
					>
						Bootcamp
					</span>
					<span
						className="text-lg font-medium not-italic text-center pb-5	"
						style={{
							fontFamily: "Helvetica Neue",
							color: active === 1 ? "#004737" : "rgba(0, 71, 45, 0.5)",
							borderBottom:
								active === 1
									? "3px solid" + secondaryColor
									: "1px solid rgba(0, 71, 45, 0.5)",
							width: 192,
						}}
						onClick={() => setActiveTab(1)}
					>
						Learning path
					</span>
				</div>
				{active === 0 && <Bootcamp />}

				{active === 1 && <Bootcamp />}
			</div>
		</div>
	);
}
export function Footer() {
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

					<div
						style={{
							display: "flex",
							alignItems: "center",
							flexDirection: "row",
						}}
					>
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
						<Image src={Fb} /> &nbsp;
						<Image src={Insta} /> &nbsp;
						<Image src={LinkedIn} /> &nbsp;
						<Image src={Twitter} /> &nbsp;
						<Image src={Youtube} />
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
export function Faq() {
	return (
		<div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					paddingTop: 40,
					//		marginBottom: 140,
				}}
			>
				<button
					style={{
						// fontSize: 14,
						fontWeight: "bold",
						backgroundColor: "#fff",
						border: "2px solid #004737",
						color: "#004737",
						textAlign: "center",
						font: 12.7,
						height: 34,
						width: "100%",
						maxWidth: 126,
						borderRadius: 100,
						marginRight: 13,
					}}
				>
					FAQ
				</button>
				<span
					className="text-center font-normal not-italic pt-[26px]
					lg:text-6xl
					md:text-6xl
					xs:text-3xl
					sm:text-3xl
					
					"
					style={{
						fontFamily: "Helvetica Neue",

						paddingTop: 26,
						color: secondaryColor,
					}}
				>
					Have a question?
					<br />
					We got the answer!
				</span>
			</div>
			<div className="w-full" style={{ paddingRight: 216, paddingLeft: 238 }}>
				<div
					className="flex items-center justify-between w-full pt-[42px]
					lg:flex-row
					md:flex-row
					sm:flex-col
					xs:flex-col
					"
				>
					<div
						className="w-full 
						lg:h-[484px]
						lg:max-w-[517px]
						lg:pl-[56px]
						lg:pt-[44px]
						lg:pr-[30px]
						lg:pb-[119px]
						md:h-[484px]
						md:pl-[56px]
						md:pt-[44px]
						md:pr-[30px]
						md:pb-[119px]
						md:max-w-[517px]
						sm:h-[258px]
						sm:max-w-[250px]
						sm:pl-[22px]
						sm:pt-[22px]
						sm:pr-[22px]
						sm:pb-[61px]
						xs:max-w-[250px]
						xs:h-[258px]
						xs:pl-[22px]
						xs:pt-[22px]
						xs:pr-[22px]
						xs:pb-[61px]
						"
						style={{
							borderRadius: "20px",

							border: "1px solid #000000",
						}}
					>
						<p
							className="	lg:text-xl font-medium not-italic
							md:text-xl
							sm:text-[10px]
							xs:text-[10px]"
							style={{
								fontFamily: "Helvetica Neue",
								color: "#004737",
							}}
						>
							Is Scrimba a coding bootcamp?
						</p>
						<p
							className="not-italic font-normal
							lg:text-xl
							md:text-xl
							sm:text-[10px]
							xs:text-[10px]
							
							"
							style={{
								fontFamily: "Helvetica Neue",
								fontWeight: "400",
								color: "rgba(0, 71, 55, 0.6)",
							}}
						>
							In short, no we’re not. We aim to offer the same value, but at
							100X lower price, so there are differences. Scrimba allows you to
							study where you want, when you want. We also substitute the
							classroom teaching experience with interactive screencast, live
							events, and peer-to-peer help between students.
						</p>
					</div>
					<div
						className="w-full 
											lg:h-[484px]
											lg:max-w-[517px]
											lg:pl-[56px]
											lg:pt-[44px]
											lg:pr-[30px]
											lg:pb-[119px]
											md:h-[484px]
											md:pl-[56px]
											md:pt-[44px]
											md:pr-[30px]
											md:pb-[119px]
											md:max-w-[517px]
											sm:h-[258px]
											sm:max-w-[250px]
											sm:pl-[22px]
											sm:pt-[22px]
											sm:pr-[22px]
											sm:pb-[61px]
											sm:mt-3
											xs:max-w-[250px]
											xs:h-[258px]
											xs:pl-[22px]
											xs:pt-[22px]
											xs:pr-[22px]
											xs:pb-[61px]
											xs:mt-3
											"
						style={{
							borderRadius: "20px",

							border: "1px solid #000000",
						}}
					>
						<p
							className="	lg:text-xl font-medium not-italic
						md:text-xl
						sm:text-[10px]
						xs:text-[10px]"
							style={{
								fontFamily: "Helvetica Neue",
								color: "#004737",
							}}
						>
							Is Scrimba a coding bootcamp?
						</p>
						<p
							className="not-italic font-normal
						lg:text-xl
						md:text-xl
						sm:text-[10px]
						xs:text-[10px]
						
						"
							style={{
								fontFamily: "Helvetica Neue",
								fontWeight: "400",
								color: "rgba(0, 71, 55, 0.6)",
							}}
						>
							In short, no we’re not. We aim to offer the same value, but at
							100X lower price, so there are differences. Scrimba allows you to
							study where you want, when you want. We also substitute the
							classroom teaching experience with interactive screencast, live
							events, and peer-to-peer help between students.
						</p>
					</div>
				</div>

				<div
					className="flex items-center justify-between w-full h-full pt-3
					lg:flex-row
					md:flex-row
					sm:flex-col
					xs:flex-col
					"
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexDirection: "column",
							width: "100%",
							//height: "100%",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								flexDirection: "row",
								width: "100%",
								paddingBottom: 20,
							}}
						>
							<div
								className="w-full rounded-[20px]
								lg:h-[118px]
								lg:max-w-[117px]
								lg:px-5
								lg:pt-[10px]
								md:px-5
								md:h-[118px]
								md:max-w-[117px]
								md:pt-[10px]
								sm:px-[14px]
								sm:pt-[14px]
								
								sm:h-[82px]
								sm:max-w-[123px]
								xs:pt-[14px]
								xs:px-[14px]
								xs:h-[82px]
								xs:max-w-[123px]
								"
								style={{
									border: "1px solid #000000",
								}}
							>
								<p
									className="not-italic font-medium
									lg:text-xl
									md:text-xl
									sm:text-sm
									xs:text-sm
									"
									style={{
										fontFamily: "Helvetica Neue",

										color: "#004737",
									}}
								>
									Its Free?
								</p>
								<p
									className="not-italic font-normal
									lg:text-xl
									md:text-xl
									sm:text-sm
									xs:text-sm
									"
									style={{
										fontFamily: "Helvetica Neue",

										color: "rgba(0, 71, 55, 0.6)",
									}}
								>
									Yes!
								</p>
							</div>
							<div
								className="w-full rounded-[20px]
								lg:h-[118px]
								lg:max-w-[117px]
								lg:px-5
								lg:pt-[10px]
								md:px-5
								md:h-[118px]
								md:max-w-[117px]
								md:pt-[10px]
								sm:px-[14px]
								sm:pt-[14px]
								
								sm:h-[82px]
								sm:max-w-[123px]
								xs:pt-[14px]
								xs:px-[14px]
								xs:h-[82px]
								xs:max-w-[123px]
								"
								style={{
									border: "1px solid #000000",
								}}
							>
								<p
									className="not-italic font-medium
									lg:text-xl
									md:text-xl
									sm:text-sm
									xs:text-sm
									"
									style={{
										fontFamily: "Helvetica Neue",

										color: "#004737",
									}}
								>
									Really?
								</p>
								<p
									className="not-italic font-normal
								lg:text-xl
								md:text-xl
								sm:text-sm
								xs:text-sm
								"
									style={{
										fontFamily: "Helvetica Neue",

										color: "rgba(0, 71, 55, 0.6)",
									}}
								>
									Yes!
								</p>
							</div>
						</div>
						<div
							className="w-full rounded-[20px]
							lg:max-w-[369px]
							lg:pl-[36px]
							lg:pr-[26px]
							lg:h-56
							lg:pt-[14px]
							md:max-w-[369px]
							md:pl-[36px]
							md:pr-[26px]
							md:h-56
							md:pt-[14px]
							sm:max-w-[258px]
							sm:px-5
							sm:h-[156px]
							sm:pt-[9.8px]
							xs:max-w-[258px]
							xs:px-5
							xs:h-[156px]
							xs:pt-[9.8px]
							"
							style={{
								border: "1px solid #000000",
								borderRadius: "20px",
							}}
						>
							<p
								className="not-italic font-medium
									lg:text-xl
									md:text-xl
									sm:text-sm
									xs:text-sm
									"
								style={{
									fontFamily: "Helvetica Neue",

									color: "#004737",
								}}
							>
								Do you have team plans?
							</p>
							<p
								className="not-italic font-normal
								lg:text-xl
								md:text-xl
								sm:text-sm
								xs:text-sm
								"
								style={{
									fontFamily: "Helvetica Neue",

									color: "rgba(0, 71, 55, 0.6)",
								}}
							>
								Yes, please email help@scrimba.com and we will send you a custom
								invoice for the number of seats you need.
							</p>
						</div>
					</div>

					<div
						className="flex items-center justify-between flex-row w-full
						sm:mt-[18px]
						xs:mt-[18px]
					"
					>
						<div
							className="w-full
							lg:w-[530px]
							lg:h-[362px]
							lg:ml-6
							lg:pl-6
							lg:pt-6
							lg:pr-8
							md:w-[530px]
							md:h-[362px]
							md:ml-6
							md:pl-6
							md:pt-6
							md:pr-8
							sm:w-[145px]
							sm:h-[150px]
							sm:ml-0
							sm:pl-2
							sm:pt-3
							sm:pr-[12px]
							xs:w-[145px]
							xs:h-[150px]
							xs:ml-0
							xs:pl-2
							xs:pt-3
							xs:pr-[12px]
							
							"
							style={{
								border: "1px solid #000000",
								borderRadius: "20px",
							}}
						>
							<p
								className="not-italic font-medium
								lg:text-xl
								md:text-xl
								sm:text-[7px]
								xs:text-[7px]
								"
								style={{
									fontFamily: "Helvetica Neue",

									color: "#004737",
								}}
							>
								How long does the career path take?
							</p>
							<p
								className="not-italic font-normal
								lg:text-xl
								md:text-xl
								sm:text-[7px]
								xs:text-[7px]
								"
								style={cardBody}
							>
								You can complete the career path in three months if you are
								fast. But it will realistically take you 6-12 months to reach a
								hireable level as a frontend developer.
							</p>
						</div>

						<div
							className="flex items-center justify-between flex-col w-full h-full
					
						"
						>
							<div
								className="w-full rounded-[20px]
								lg:max-w-[296px]
								lg:h-[152px]
								lg:mb-[21px]
								lg:px-[21px]
								lg:pt-3
								md:max-w-[296px]
								md:h-[152px]
								md:mb-[21px]
								md:px-[21px]
								md:pt-3
								sm:max-w-[115px]
								sm:h-[58px]
								sm:mb-[8px]
								sm:px-[10px]
								sm:pt-2
								xs:max-w-[115px]
								xs:h-[58px]
								xs:mb-[8px]
								xs:px-[10px]
								xs:pt-2


								"
								style={{
									border: "1px solid #000000",
								}}
							>
								<p
									className="not-italic font-medium
								lg:text-xl
								md:text-xl
								sm:text-[7px]
								xs:text-[7px]
								"
									style={{
										fontFamily: "Helvetica Neue",

										color: "#004737",
									}}
								>
									Do you have team plans?
								</p>
								<p
									className="not-italic font-normal
														lg:text-xl
														md:text-xl
														sm:text-[7px]
														xs:text-[7px]
														"
									style={cardBody}
								>
									Yes, please email help@scrimba.com
								</p>
							</div>
							<div
								className="w-full rounded-[20px]
								lg:max-w-[296px]
								lg:h-[152px]
								lg:px-[21px]
								lg:pt-3
								md:max-w-[296px]
								md:h-[152px]
								md:px-[21px]
								md:pt-3
								sm:max-w-[115px]
								sm:h-[58px]
								sm:mb-[8px]
								sm:px-[10px]
								sm:pt-2
								xs:max-w-[115px]
								xs:h-[58px]
								xs:mb-[8px]
								xs:px-[10px]
								xs:pt-2


								"
								style={{
									border: "1px solid #000000",
								}}
							>
								<p
									className="not-italic font-medium
								lg:text-xl
								md:text-xl
								sm:text-[7px]
								xs:text-[7px]
								"
									style={{
										fontFamily: "Helvetica Neue",

										color: "#004737",
									}}
								>
									Do you have team plans?
								</p>
								<p
									className="not-italic font-normal
														lg:text-xl
														md:text-xl
														sm:text-[7px]
														xs:text-[7px]
														"
									style={cardBody}
								>
									Yes, please email help@scrimba.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export function Bootcamp() {
	return (
		<div
			className="flex items-center justify-between px-48 pt-40 
			lg:flex-row
			sm:flex-col-reverse
			xs:flex-col-reverse
			"
		>
			<div
				className="flex items-center justify-between 
				lg:flex-col
				sm:flex-row
				xs:flex-row
				"
				style={{
					height: "100%",
					maxHeight: 832,
				}}
			>
				<div
					className="flex items-center justify-center max-w-full pb-48 lg:flex-row
		sm:flex-col-reverse
		xs:flex-col-reverse
		"
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							paddingTop: 51,
							paddingBottom: 51,
							paddingRight: 22,
							paddingLeft: 22,
							backgroundColor: "#CEFFE4",
							borderRadius: 20,
							width: "100%",
							maxWidth: 225,
							height: 225,
							textAlign: "center",
							//marginBottom: 203,
						}}
					>
						<span style={headStyle}>Sustainability</span>

						<span style={paraStyle}>
							Harnessing the power of IoT to manage Natural resources more
							sustainbly
						</span>
					</div>
					<div
						className="w-full	
						lg:w-max-[112px]
						lg:h-6
						
						sm:h-8
						sm:max-w-[22px]
				
						xs:h-8
						xs:max-w-[22px]"
						style={{
							backgroundColor: "#CEFFE4",
						}}
					></div>
				</div>
				<div
					className="flex items-center justify-center max-w-full lg:flex-row
		sm:flex-col-reverse
		xs:flex-col-reverse"
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							paddingTop: 51,
							paddingBottom: 51,
							paddingRight: 22,
							paddingLeft: 22,
							backgroundColor: "#CEFFE4",
							borderRadius: 20,
							width: "100%",
							maxWidth: 225,
							height: 225,
							textAlign: "center",
						}}
					>
						<span style={headStyle}>Sustainability</span>

						<span style={paraStyle}>
							Harnessing the power of IoT to manage Natural resources more
							sustainbly
						</span>
					</div>
					<div
						className="w-full	
						lg:w-max-[112px]
						lg:h-6
						
						sm:h-12
						sm:max-w-[22px]
				
						xs:h-12
						xs:max-w-[22px]"
						style={{
							backgroundColor: "#CEFFE4",
						}}
					></div>
				</div>
			</div>
			<div
				className="w-full flex flex-col justify-between items-center 
				lg:px-[42px]
				lg:pt-[131px]
				lg:h-[832px]
				md:px-[42px]
				md:pt-[131px]
				md:h-[832px]
				sm:px-[17px]
				sm:h-[192px]
				sm:pt-[43px]
				xs:px-[17px]
				xs:h-[192px]
				xs:pt-[43px]

				"
				style={{
					maxWidth: 462,
					width: "100%",
					//height: "100%",
					background: "#CEFFE4",
					borderRadius: 20,
				}}
			>
				<p
					className="font-normal text-center 
					lg:text-[22px]
					md:text-[22px]
					sm:text-base
					xs:text-base
					"
					//					fontWeight: "400",
					//	fontSize: 22,
					//	textAlign: "center",

					style={midPara}
				>
					Paths are structured curriculum roadmaps that show you exactly where
					to start and what to learn next. Paths contain everything you need to
					accomplish a specific task or goal.
				</p>
				<span
					className="
				xs:hidden
				sm:hidden
				"
					style={midHead}
				>
					React
				</span>
				<div
					className="
					flex items-center justify-between w-full first-letter max-w-[100px]
					xs:hidden
					sm:hidden
					"
				>
					<Image
						src={leftArrow} //style={{ objectFit: "cover" }}
					/>
					<Image
						src={rightArrow} //style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
			<div
				className="items-center justify-center
			xs:hidden
			sm:hidden
			lg:flex
			md:flex
			"
			>
				<div
					style={{
						width: "100%",
						maxWidth: "112px",
						height: "22px",
						backgroundColor: "#CEFFE4",
					}}
				></div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "column",
						paddingTop: 51,
						paddingBottom: 51,
						paddingRight: 22,
						paddingLeft: 22,
						backgroundColor: "#CEFFE4",
						borderRadius: 20,
						width: "100%",
						maxWidth: 225,
						height: 225,
						textAlign: "center",
					}}
				>
					<span style={headStyle}>Sustainability</span>

					<span style={paraStyle}>
						Harnessing the power of IoT to manage Natural resources more
						sustainbly
					</span>
				</div>
			</div>
		</div>
	);
}
export function Existance() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				className="w-full flex items-start justify-evenly 
				sm:max-w-sm 
				sm:flex-col 
				xs:flex-col  
				xs:max-w-sm 
				md:max-w-7xl 
				xl:max-w-7xl 
				lg:max-w-7xl
				sm:items-center pl-10 pt-16 pb-6
				sm:justify-evenly
				xs:items-center xs:justify-between
				lg:flex-row
				lg:px-44
				lg:py-24
				xs:max-h-[675px]
				lg:max-h-[675px]
				"
				style={{
					//background: "grey",
					//	backgroundImage: `url(${require("../../Content/Images/woody.png")})`,
					backgroundImage: "url(/woody.png)",
					alignItems: "flex-start",
					justifyContent: "space-between",
					display: "flex",
					borderRadius: 20,
					backgroundRepeat: "no-repeat",
					// 	paddingTop: 123,
					// paddingBottom: 123,
					//height: 675,
				}}
			>
				<span
					className="sm:max-w-xs
					lg:text-6xl
					xs:text-3xl

					"
					style={{
						fontFamily: "Aeonik TRIAL",
						fontStyle: "normal",
						color: "#FFFAE9",
						fontWeight: "400",
						width: "100%",
						//maxWidth: "228.4px",
					}}
				>
					We exist to
				</span>
				<div
					className="flex flex-col items-start justify-between lg:pl-20
					lg:pt-0 
				xs:pt-8 
				sm:pt-8 
				"
				>
					<span
						className="							lg:text-6xl
						xs:text-3xl
						"
						style={{
							fontFamily: "Aeonik TRIAL",
							fontStyle: "normal",
							color: "#FFFAE9",
							fontWeight: "400",
							textAlign: "left",
						}}
					>
						Help you cross the chasm in online learning.
					</span>
					<p
						className="lg:pt-16 
						md:pt-1
						lg:text-2xl
						sm:text-base
						xs:text-base
						sm:pt-5
						xs:pt-5	
						"
						style={{
							fontFamily: "Aeonik TRIAL",
							fontStyle: "normal",
							fontWeight: "400",
							color: "#FFFBEC",
							textAlign: "left",
						}}
					>
						Alfy is a community of learnes dedicate to improve online education.
						We provide a bootcamp-style experience, boosting your
						accountability, helping you through each step of your learning
						journey, and filtering the best content for you. All for a modest
						membership cost that is only charged if you use our community.
					</p>
				</div>
			</div>
		</div>
	);
}
export function Steps() {
	const stepOptions = [
		{
			icon: tank,
			title: "Sustainability",
			description:
				"Harnessing the power of IoT to manage Natural resources more sustainbly",
		},
		{
			icon: tank,
			title: "Sustainability",
			description:
				"Harnessing the power of IoT to manage Natural resources more sustainbly",
		},
		{
			icon: tank,
			title: "Sustainability",
			description:
				"Harnessing the power of IoT to manage Natural resources more sustainbly",
		},
		{
			icon: tank,
			title: "Sustainability",
			description:
				"Harnessing the power of IoT to manage Natural resources more sustainbly",
		},
	];
	return (
		<div
			className="flex items-center justify-center flex-col w-full
		lg:py-[181px]
		md:py-[181px]
		sm:pt-16
		sm:pb-28
		xs:pt-16
		xs:pb-28
		"
		>
			<p
				className="not-italic text-center
				lg:text-6xl
				lg:py-96
				md:text-6xl
				md:py-96
				xs:text-[32px]
				xs:py-3
				sm:text-[32px]
	sm:py-3
				"
				style={{
					fontFamily: "Aeonik TRIAL",
					fontWeight: "700",
					color: "#004737",
				}}
			>
				4 Simple Steps and you’re In
			</p>
			<span
				className="text-center 
				lg:px-96
				lg:text-[22px]
				md:text-[22px]
				md:px-96
				xs:px-[30px]
				xs:text-[16px]
				sm:text-[16px]
				sm:px-[30px]
				"
				style={{
					fontFamily: "Work Sans",
					fontStyle: "normal",
					fontWeight: "400",
					fontSize: "22px",
					textAlign: "center",
					color: "rgba(0, 71, 55, 0.5)",
				}}
			>
				Free automated bootcamps that helps you stay motivated, deepen your
				understanding & knowledge, and reach your career goals.
			</span>
			<div
				className="flex items-center justify-between lg:flex-row xs:flex-col sm:flex-col
				sm:px-12
				xs:px-12
				lg:px-40
				w-full
				"
				style={{
					paddingTop: 84,
				}}
			>
				{stepOptions.map((item, index) => {
					return (
						<div
							className="flex items-center flex-col justify-center xs:pb-16 sm:pb-16"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
							}}
							key={index}
						>
							<Image
								src={item.icon} //style={{ objectFit: "cover" }}
							/>
							<span
								style={{
									fontFamily: "Aeonik TRIAL",
									fontStyle: "normal",
									fontWeight: "700",
									fontSize: 18.2694,
									textAlign: "center",
									color: "#004737",
									paddingTop: 16.44,
									paddingBottom: 3,
								}}
							>
								{item.title}
							</span>
							<span
								className="max-w-[259px] w-full"
								style={{
									fontFamily: "Aeonik TRIAL",
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: 14.6155,
									textAlign: "center",

									color: "rgba(0, 71, 55, 0.6)",
								}}
							>
								{item.description}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export function About() {
	return (
		<div className=" xs:pb-12 sm:pb-12">
			<div className="flex flex-col px-44 pb-16 w-full">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						maxWidth: 750,
						paddingBottom: 63,
					}}
				>
					<button
						style={{
							// fontSize: 14,
							fontWeight: "bold",
							backgroundColor: "#fff",
							border: "2px solid #004737",
							color: "#004737",
							textAlign: "center",
							font: 12.7,
							height: 34,
							width: 126,
							borderRadius: 100,
							marginRight: 13,
						}}
					>
						About
					</button>
					<span
						className="not-italic	lg:text-6xl
						sm:text-3xl
						xs:text-3xl
						xs:pb-5
						sm:pb-5
						"
						style={{
							fontFamily: "Aeonik TRIAL",
							fontWeight: "400",
							textAlign: "left",
							paddingTop: 26,
							color: "#4CEE95",
						}}
					>
						Enjoy learning. Stay relevant. Land a job.
					</span>

					<span
						className="lg:text-2xl
				sm:text-base
				xs:text-base
						"
						style={{
							fontFamily: "Aeonik TRIAL",
							fontStyle: "normal",
							fontWeight: "400",
							fontSize: 22,
							textAlign: "left",

							color: "rgba(0, 71, 55, 0.5)",
						}}
					>
						Free automated bootcamps that helps you stay motivated, deepen your
						understanding & knowledge, and reach your career goals.{" "}
					</span>
				</div>
				<div
					className="flex items-center justify-between w-full
					lg:flex-row
					sm:flex-col
					xs:flex-col
					"
				>
					<div
						className="
						flex flex-col 
						lg: items-center
						lg:justify-center
						lg:w-[560px]
						lg:h-[391px] 
						lg:pt-[106px]
						lg:pb[149px]
						lg:px-[138px]
						xs:items-start
						
						xs:justify-start
						xs:w-[258px]
						xs:h-[191px] 
						xs:pt-[21px]
						xs:pb[95px]
						xs:px-[16px]

						"
						style={{
							background: "linear-gradient(0deg, #CEFFE5, #CEFFE5), #4CEE95",
							borderRadius: 20,
						}}
					>
						<span
							className="not-italic font-bold flex items-center
							lg:text-6xl
							lg:items-center
							md:text-6xl
							sm:items-start
							sm:text-[16px]
							xs:text-[16px]
							xs:items-start

							"
							style={{
								fontFamily: "Aeonik TRIAL",
								color: "#000000",
							}}
						>
							20K
						</span>
						<span
							className="not-italic font-normal flex items-center 
							lg:text-[22px]
							lg:text-center
							xs:text-[7px]
							xs:text-left
							sm:text-[7px]
							sm:text-left
							"
							style={{
								fontFamily: "Aeonik TRIAL",

								color: "rgba(0, 71, 55, 0.5)",
							}}
						>
							Free automated bootcamps that helps you stay motivated,
						</span>
					</div>
					<div
						className="
						flex flex-col 
						lg: items-center
						lg:justify-center
						lg:w-[560px]
						lg:h-[391px] 
						lg:pt-[106px]
						lg:pb[149px]
						lg:px-[138px]
						xs:items-start
						
						xs:justify-start
						xs:w-[258px]
						xs:h-[191px] 
						xs:pt-[21px]
						xs:pb[95px]
						xs:px-[16px]

						"
						style={{
							background: "linear-gradient(0deg, #4CEE95, #4CEE95), #4CEE95",
							borderRadius: 20,
						}}
					>
						<span
							className="not-italic font-bold flex items-center
							lg:text-6xl
							lg:items-center
							md:text-6xl
							sm:items-start
							sm:text-[16px]
							xs:text-[16px]
							xs:items-start

							"
							style={{
								fontFamily: "Aeonik TRIAL",
								color: "#000000",
							}}
						>
							14K
						</span>
						<span
							className="not-italic font-normal flex items-center 
							lg:text-[22px]
							lg:text-center
							xs:text-[7px]
							xs:text-left
							sm:text-[7px]
							sm:text-left
							"
							style={{
								fontFamily: "Aeonik TRIAL",

								color: "rgba(0, 71, 55, 0.5)",
							}}
						>
							Free automated bootcamps that helps you stay motivated,
						</span>
					</div>
				</div>
				<div
					className="flex items-center justify-between w-full
					lg:flex-row
					lg:flex
					md:flex
					sm:flex-col
					xs:flex-col
					sm:hidden
					xs:hidden
					"
				>
					<div
						className="sm:mb-2 xs:mb-2
						lg:mr-1
						sm:mr-0
						"
						style={{
							width: 560,
							height: 391,
							background: "linear-gradient(0deg, #FFFAE9, #FFFAE9), #4CEE95",
							borderRadius: 20,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							paddingTop: 106,
							paddingBottom: 149,
							paddingRight: 138,
							paddingLeft: 138,
						}}
					>
						<span
							style={{
								fontFamily: "Aeonik TRIAL",
								fontStyle: "normal",
								fontWeight: "700",
								fontSize: 60,
								display: "flex",
								alignItems: "center",
								color: "#000000",
							}}
						>
							X66
						</span>
						<span
							style={{
								fontFamily: "Aeonik TRIAL",
								fontStyle: "normal",
								fontWeight: "400",
								fontSize: 22,
								display: "flex",
								alignItems: "center",
								textAlign: "center",
								color: "rgba(0, 71, 55, 0.5)",
							}}
						>
							Free automated bootcamps that helps you stay motivated,{" "}
						</span>
					</div>
					<div
						style={{
							width: 560,
							height: 391,
							background: "linear-gradient(0deg, #041D18, #041D18), #041D18",
							borderRadius: 20,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							paddingTop: 106,
							paddingBottom: 149,
							paddingRight: 138,
							paddingLeft: 138,
						}}
					>
						<span
							style={{
								fontFamily: "Aeonik TRIAL",
								fontStyle: "normal",
								fontWeight: "700",
								fontSize: 60,
								display: "flex",
								alignItems: "center",
								color: "#FFFAE9",
							}}
						>
							95%
						</span>
						<span
							style={{
								fontFamily: "Aeonik TRIAL",
								fontStyle: "normal",
								fontWeight: "400",
								fontSize: 22,
								display: "flex",
								alignItems: "center",
								textAlign: "center",
								color: "#FFFAE9",
							}}
						>
							Free automated bootcamps that helps you stay motivated,
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
export function LandJob() {
	return (
		<div
			className="w-full bg-black"
			//			style={{ backgroundColor: "#000000", width: "100%" }}
		>
			<div
				className="flex items-center justify-center 
				lg:flex-col
				sm:flex-col
				xs:flex-col
				lg:py-[399px]
				xs:py-[24px]
				sm:py-[24px]
				"
				style={{
					paddingTop: 69,
					paddingBottom: 128,
				}}
			>
				<span
					className="not-italic text-center font-normal	
					lg:text-center
					lg:text-6xl
					md:text-6xl
					md:text-center
					xs:text-[32px]
					xs:text-left
					sm:text-[32px]
					sm:text-left
					"
					style={{
						color: "#FFFBEB",
						fontFamily: "Aeonik TRIAL",
					}}
				>
					Enjoy learning.
				</span>

				<span
					className="not-italic text-center font-normal	
					lg:text-center
					lg:text-6xl
					md:text-6xl
					md:text-center
					xs:text-[32px]
					xs:text-left
					sm:text-[32px]
					sm:text-left
					"
					style={{
						color: "#FFFBEB",
						fontFamily: "Aeonik TRIAL",
					}}
				>
					Stay relevant.
				</span>

				<span
					className="not-italic text-center font-normal	
					lg:text-center
					lg:text-6xl
					md:text-6xl
					md:text-center
					xs:text-[32px]
					xs:text-left
					sm:text-[32px]
					sm:text-left
					"
					style={{
						color: "#4CEE95",
						fontFamily: "Aeonik TRIAL",
					}}
				>
					Land a job.
				</span>
			</div>
			<div
				className="flex item-center justify-between
				lg:flex-row
				sm:flex-col
				xs:flex-col
				"
			>
				<div className="flex item-center justify-between flex-row">
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
				</div>
				<div className="flex item-center justify-between flex-row">
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
				</div>
				<div
					className="
				lg:flex
				sm:hidden
				xs:hidden
				"
				>
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
				</div>
			</div>
			<div
				className="flex item-center justify-between
				lg:flex-row
				sm:flex-col
				xs:flex-col
				"
			>
				<div className="flex item-center justify-between flex-row">
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
				</div>
				<div className="flex item-center justify-between flex-row">
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
				</div>
				<div
					className="
				lg:flex
				sm:hidden
				xs:hidden
				"
				>
					<ReactPlayer
						url={
							"https://www.youtube.com/watch?v=EngW7tLk6R8&ab_channel=WowRomantic"
						}
						className="w-full h-[404px] rounded-[20px] pb-2						
						lg:max-w-[290px]
						sm:max-w-[190px]
						xs:max-w-[190px]
						"
					/>
				</div>
			</div>
		</div>
	);
}
const headStyle = {
	fontSize: 20,
	fontWeight: "700",
	color: secondaryColor,
	paddingBottom: 9,
};
const paraStyle = {
	fontFamily: "Aeonik TRIAL",
	fontStyle: "normal",
	fontWeight: "400",
	fontSize: 16,
	//lineHeight: 21,
	color: secondaryColor,
};
const midDiv = {
	maxWidth: 462,
	width: "100%",
	height: 832,
	//height: "100%",
	background: "#CEFFE4",
	borderRadius: 20,
	paddingTop: 131,
	paddingRight: 42,
	paddingLeft: 42,
	paddingBottom: 344,
	alignItems: "center",
	justifyContent: "space-between",
	flexDirection: "column",
	display: "flex",
};
const midPara = {
	fontFamily: "Aeonik TRIAL",
	//font-style: 'normal'

	color: secondaryColor,
};
const midHead = {
	fontFamily: "Aeonik TRIAL",

	fontWeight: "700",
	fontSize: 40,

	textAlign: "center",

	color: secondaryColor,
};
const bigCard = {
	height: "484px",

	width: "100%",
	maxWidth: "517px",

	borderRadius: "20px",
	paddingTop: 44,
	paddingLeft: 56,
	paddingRight: 30,
	paddingBottom: 119,
	border: "1px solid #000000",
};
const mediumCard = {
	marginLeft: 25,
	paddingLeft: 25,
	paddingTop: 24,
	paddingRight: 32.75,
	width: "100%",
	maxWidth: "364px",
	height: "362px",
	border: "1px solid #000000",
	borderRadius: "20px",
};
const smallerCard = {
	paddingTop: 14,
	paddingLeft: 36,
	paddingRight: 26,
	// /paddingBottom: 55,
	width: "100%",
	maxWidth: "369px",
	height: "224px",
	border: "1px solid #000000",
	borderRadius: "20px",
};
const extraSmaller = {
	paddingTop: 10,
	//paddingBottom: 22,
	paddingLeft: 20,
	paddingRight: 20,
	width: "100%",
	maxWidth: "177px",
	height: "118px",
	border: "1px solid #000000",
	borderRadius: "20px",
};
const cardHeading = {
	fontFamily: "Helvetica Neue",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: 20,
	color: "#004737",
};
const cardBody = {
	fontFamily: "Helvetica Neue",
	color: "rgba(0, 71, 55, 0.6)",
};
const mildCard1 = {
	paddingLeft: 21,
	paddingRight: 21,
	paddingTop: 12,
	width: "100%",
	maxWidth: "296px",
	height: "152px",
	border: "1px solid #000000",
	borderRadius: "20px",
	marginBottom: 21,
};

const mildCard2 = {
	paddingLeft: 21,
	paddingRight: 21,
	paddingTop: 12,
	width: "100%",
	maxWidth: "296px",
	height: "189px",
	border: "1px solid #000000",
	borderRadius: "20px",
};
const bottomWhiteTexts = {
	fontFamily: "Helvetica Neue",
	fontStyle: "normal",
	fontWeight: "400",
	fontSize: "14px",
	letterSpacing: "0.055em",
	color: "#FFFAE9",
};
