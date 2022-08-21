import React from "react";

export default function LearningPath() {
	const courseList = [
		"React",
		"Angular",
		"Firebase",
		"Figma",
		"Vue.js",
		"Remix",
	];
	const crsList = [
		{
			name: "React",
			Prerequsite:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			learn:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			gain: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			able: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
		},
		{
			name: "Angular",
			Prerequsite:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			learn:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			gain: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			able: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
		},
		{
			name: "Firebase",
			Prerequsite:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			learn:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			gain: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			able: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
		},
		{
			name: "Figma",
			Prerequsite:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			learn:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			gain: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			able: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
		},
		{
			name: "Vue.js",
			Prerequsite:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			learn:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			gain: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			able: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
		},
		{
			name: "Remix",
			Prerequsite:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			learn:
				"We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			gain: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
			able: "We provide a bootcamp-style experience, boosting your accountability, helping you through each step of your learning journey, and filtering the most relevant content for you. All of that so you will finish your learning journey and land a job.",
		},
	];

	const [activeCourse, SetActiveCourse] = React.useState(0);
	return (
		<div
			className="w-full flex items-center justify-between pt-[121px]
			pb-[250px]
			xl:flex-row
			lg:flex-row
			md:flex-row
			sm:flex-col
			xs:flex-col
			xl:pr-[70px]
			xl:pl-[80px]
			lg:pr-[70px]
			lg:pl-[80px]
			md:pr-[70px]
			md:pl-[80px]
			sm:pr-[20px]
			sm:pl-[20px]
			xs:pr-[20px]
			xs:pl-[20px]
	
			"
		>
			<div className="w-full flex items-center justify-start flex-col">
				{crsList.map((item, index) => {
					return (
						<div
							key={index}
							className="flex w-full max-w-[420.82px] h-[106.38px] rounded-[9.41429px] py-[35px] pl-[74px]"
							style={{
								backgroundColor:
									activeCourse === index ? "#041D18" : "transparent",
								cursor: "pointer",
							}}
							onClick={() => {
								SetActiveCourse(index);
							}}
						>
							<span
								style={{
									fontFamily: "Helvetica Neue",
									fontStyle: "normal",
									fontWeight: "700",
									fontSize: "28.2429px",
									lineHeight: "34px",
									display: "flex",
									alignItems: "center",
									textAlign: "center",
									color: activeCourse === index ? "#CEFFE5" : "#000000",
								}}
							>
								{item.name}
							</span>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col py-4">
				<p
					style={{
						fontFamily: "Helvetica Neue",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: "28.2429px",
						lineHeight: "34px",
						display: "flex",
						alignItems: "center",
						textAlign: "center",
						color: "#004737",
					}}
				>
					Prerequsite
				</p>
				<p
					className="text-left py-4
					xl:text-[22px]
					lg:text-[22px]
					md:text-[22px]
					sm:text-sm
					xs:text-sm
					"
					style={{
						fontFamily: "Work Sans",
						color: "rgba(0, 71, 55, 0.6)",
						fontWeight: "400",
						opacity: "60%",
						lineHeight: "30px",
					}}
				>
					{crsList[activeCourse].Prerequsite}
				</p>
				<p
					style={{
						fontFamily: "Helvetica Neue",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: "28.2429px",
						lineHeight: "34px",
						display: "flex",
						alignItems: "center",
						textAlign: "center",
						color: "#004737",
					}}
				>
					You will learn
				</p>
				<p
					className="text-left py-4
					xl:text-[22px]
					lg:text-[22px]
					md:text-[22px]
					sm:text-sm
					xs:text-sm
					"
					style={{
						fontFamily: "Work Sans",
						color: "rgba(0, 71, 55, 0.6)",
						fontWeight: "400",
						opacity: "60%",
						lineHeight: "30px",
					}}
				>
					{crsList[activeCourse].learn}
				</p>
				<p
					style={{
						fontFamily: "Helvetica Neue",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: "28.2429px",
						lineHeight: "34px",
						display: "flex",
						alignItems: "center",
						textAlign: "center",
						color: "#004737",
					}}
				>
					You will gain{" "}
				</p>
				<p
					className="text-left py-4
					xl:text-[22px]
					lg:text-[22px]
					md:text-[22px]
					sm:text-sm
					xs:text-sm
					"
					style={{
						fontFamily: "Work Sans",
						color: "rgba(0, 71, 55, 0.6)",
						fontWeight: "400",
						opacity: "60%",
						lineHeight: "30px",
					}}
				>
					{crsList[activeCourse].gain}
				</p>
				<p
					style={{
						fontFamily: "Helvetica Neue",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: "28.2429px",
						lineHeight: "34px",
						display: "flex",
						alignItems: "center",
						textAlign: "center",
						color: "#004737",
					}}
				>
					You will be able to
				</p>
				<p
					className="text-left py-4
					xl:text-[22px]
					lg:text-[22px]
					md:text-[22px]
					sm:text-sm
					xs:text-sm
					"
					style={{
						fontFamily: "Work Sans",
						color: "rgba(0, 71, 55, 0.6)",
						fontWeight: "400",
						opacity: "60%",
						lineHeight: "30px",
					}}
				>
					{crsList[activeCourse].able}
				</p>
			</div>
		</div>
	);
}
