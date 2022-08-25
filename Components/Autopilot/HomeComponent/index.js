export default function HomeComponent() {
	return (
		<div
			className="flex items-center flex-col justify-center pt-40 w-full"
			name="Home"
			id="Home"
		>
			<span
				className="font-normal text-center max-w-5xl w-full animate__animated animate__bounceInUp
			xl:text-[88px]
			lg:text-[88px]
			md:text-[50px]
			xs:text-[32px]
			sm:text-[32px]
			"
				style={{
					fontFamily: "Helvetica Neue",
					color: "#004737",
				}}
			>
				Online learning is Borken.
			</span>
			<span
				className="font-normal text-center max-w-5xl w-full animate__animated animate__bounceInUp
			xl:text-[88px]
			xl:mt-[-30px]
			lg:text-[88px]
			lg:mt-[-30px]
			md:text-[50px]
			md:mt-[-30px]
			xs:text-[32px]
			xs:mt-[-6px]
			sm:text-[32px]
			sm:mt-[-6px]
			"
				style={{
					fontFamily: "Helvetica Neue",
					color: "#004737",
				}}
			>
				We Just fixed it.
			</span>
			<p
				className="text-center pb-14 pt-2 animate__animated animate__fadeInUp
			xl:text-[22px]
			xl:px-[240px]
			lg:text-[22px]
			lg:px-[240px]
			md:text-[22px]
			md:px-[40px]
			sm:text-sm
			sm:px-[22px]
			xs:text-sm
			xs:px-[22px]
			"
				style={{
					fontFamily: "Helvetica Neue",
					color: "rgba(0, 71, 55, 0.6)",
					fontWeight: "400",
					opacity: "60%",
					lineHeight: "30px",
				}}
			>
				We provide a bootcamp-style experience, boosting your accountability,
				helping you through each step of your learning journey, and filtering
				the most relevant content for you. All of that so you will finish your
				learning journey and land a job.
			</p>
			<button
				className="transition ease-in-out delay-150 font-medium bg-[#CEFFE5] hover:-translate-y-1 hover:scale-110 hover:bg-[#4CEE95] hover:font-normal duration-300"
				style={{
					// fontSize: 14,
					//	fontWeight: "bold",
					//						backgroundColor: "#CEFFE5",
					color: "#004737",
					textAlign: "center",
					fontSize: 14.7,
					paddingTop: 10,
					paddingBottom: 10,
					paddingRight: 40,
					paddingLeft: 40,
					borderRadius: 100,
					border: 0,
					marginRight: 13,
				}}
			>
				Request Access
			</button>
		</div>
	);
}
