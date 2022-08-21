import Image from "next/image";

import tank from "../../../Content/Images/recharge.svg";
export default function Steps() {
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
			id="How"
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
				lg:py-9
				md:text-[32px]	
                			md:py-9
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
								src={item.icon}
								alt="items icon"
								//style={{ objectFit: "cover" }}
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
