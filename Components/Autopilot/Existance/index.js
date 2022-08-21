export default function Existance() {
	return (
		<div id="About" className="flex items-center justify-center w-full">
			<div
				className="w-full flex items-start justify-evenly rounded-[20px]
				xl:max-w-full
				xl:flex-row
				xl:mx-[56px]
				xl:px-44
				xl:py-24
				xl:h-full
				xl:max-h-[675px]
				lg:mx-[56px]
				lg:max-w-full
				lg:flex-row
				lg:px-44
				lg:py-24
				lg:max-h-[675px]
				lg:h-full
                md:items-center 
				md:justify-between
				md:flex-col  
				md:max-w-sm 
				md:max-h-[675px]


				sm:max-w-sm 
				sm:flex-col
				sm:items-center pl-10 pt-16 pb-6
				sm:justify-evenly
				xs:items-center 
				xs:justify-between
				xs:flex-col  
				xs:max-w-sm 
				xs:max-h-[675px]
				"
				style={{
					//background: "grey",
					//	backgroundImage: `url(${require("../../Content/Images/woody.png")})`,
					backgroundImage: "url(/woody.png)",
					alignItems: "flex-start",
					backgroundRepeat: "no-repeat",
					objectFit: "cover",
					// 	paddingTop: 123,
					// paddingBottom: 123,
					//height: 675,
				}}
			>
				<span
					className="sm:max-w-xs text-left
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
