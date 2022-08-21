import leftArrow from "../../../Content/Images/left.png";
import rightArrow from "../../../Content/Images/right.png";
import { secondaryColor } from "../../Constants";
import Image from "next/image";
import React from "react";
export default function Bootcamp() {
	return (
		<div
			className="w-full flex items-center justify-between pt-40 pb-36
			lg:flex-row
			sm:flex-col-reverse
			xs:flex-col-reverse
			"
		>
			<div
				className="flex items-center justify-between animate__animated animate__fadeInRight
				lg:flex-col
				sm:flex-row
				xs:flex-row
				"
				style={{
					height: "100%",
					//	maxHeight: 832,
					width: "100%",
				}}
			>
				<div
					className="flex items-center justify-center w-full xl:mr-[-10px] lg:mr-[-10px] lg:flex-row
                    xl:pb-60
                    lg:pb-60
                    md:pb-0
                    xs:pb-0
                    sm:pb-0
		sm:flex-col-reverse
		xs:flex-col-reverse
		animate__fadeInRight
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
							width: 240,
							height: 225,
							textAlign: "center",
							//marginBottom: 203,
						}}
						className="
                        xl:mr-0
                        lg:mr-0
                        md:mr-4
                        xs:mr-4
                        sm:mr-4
                        "
					>
						<p style={headStyle}>Sustainability</p>

						<span style={paraStyle}>
							Harnessing the power of IoT to manage Natural resources more
							sustainbly
						</span>
					</div>
					<div
						className="w-full
						xl:max-w-[112px]
						lg:max-w-[112px]
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
				<div
					className="w-full flex items-center justify-center xl:mr-[-10px] lg:mr-[-10px] max-w-full lg:flex-row
		sm:flex-col-reverse
		xs:flex-col-reverse
		animate__fadeInRight"
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
							maxWidth: 240,
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
						xl:max-w-[115px]	
						lg:max-w-[115px]
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
				className="w-full flex flex-col items-center animate__animated animate__fadeInDown
				lg:px-[42px]
				lg:pt-[131px]
				lg:h-[832px]
                md:px-[17px]
				md:h-[192px]
				md:pt-[43px]
				sm:px-[17px]
				sm:h-[192px]
				sm:pt-[43px]
				xs:px-[17px]
				xs:h-[192px]
				xs:pt-[43px]
				"
				style={{
					maxWidth: 462,
					//height: "100%",
					background: "#CEFFE4",
					borderRadius: 20,
				}}
			>
				<p
					className="font-normal text-center 
					xl:text-[22px]
					xl:pb-[81px]
					lg:text-[22px]
					lg:pb-[81px]
					md:text-base
					md:pb-0
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
					className="xl:flex
					lg:flex
                    lg:pb-[10px]
					md:hidden
				xs:hidden
				sm:hidden
				"
					style={midHead}
				>
					React
				</span>
				<div
					className="
					items-center justify-between w-full first-letter max-w-[90px]
					xl:flex
					lg:flex
					md:hidden
					xs:hidden
					sm:hidden
					"
				>
					<Image
						src={leftArrow} //style={{ objectFit: "cover" }}
						alt="left arrow"
					/>
					<Image
						src={rightArrow}
						alt={"right arrow"} //style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
			<div
				className="w-full flexitems-center justify-center animate__animated animate__fadeInLeft
			xs:hidden
			sm:hidden
			lg:flex
			lg:ml-[-10px]
			md:hidden
			animate__fadeInLeft
			"
			>
				<div
					className="flex items-center justify-center w-full pb-48 xl:mr-[-10px] lg:mr-[-10px] lg:flex-row
		sm:flex-col-reverse
		xs:flex-col-reverse
		animate__fadeInRight
		"
				>
					<div
						className="w-[112px] h-6"
						style={{
							backgroundColor: "#CEFFE4",
						}}
					></div>
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
							width: 225,
							height: 225,
							textAlign: "center",
							//marginBottom: 203,
						}}
					>
						<p style={headStyle}>Sustainability</p>

						<span style={paraStyle}>
							Harnessing the power of IoT to manage Natural resources more
							sustainbly
						</span>
					</div>
				</div>
				{/* <div
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
				</div> */}
			</div>
		</div>
	);
}
const headStyle = {
	fontSize: 20,
	fontWeight: "500",
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
const midPara = {
	fontFamily: "Aeonik TRIAL",
	//font-style: 'normal'
	lineHeight: "35px",

	color: secondaryColor,
};
const midHead = {
	fontFamily: "Aeonik TRIAL",

	fontWeight: "700",
	fontSize: 40,

	textAlign: "center",

	color: secondaryColor,
};
