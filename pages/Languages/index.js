import React from "react";
import Image from "next/image";
import Nav from "../../Components/Nav";
import { AiOutlineSearch } from "react-icons/ai";
import { secondaryColor } from "../../Components/Constants";
import cSharp from "../../Content/Images/cSharp logo.png";
import { CgGym } from "react-icons/cg";
import { FaBoxes } from "react-icons/fa";

export default function Languages() {
	const languagesList = [
		{
			logo: cSharp,
			name: "C#",
			exercise: 164,
			concepts: 1,
			tags: ["Object- oriented", "Procedural", "Static"],
			learningMode: false,
		},
		{
			logo: cSharp,
			name: "C#",
			exercise: 164,
			concepts: 1,
			tags: ["Object- oriented", "Procedural", "Static"],
			learningMode: false,
		},
		{
			logo: cSharp,
			name: "C#",
			exercise: 164,
			concepts: 1,
			tags: ["Object- oriented", "Procedural", "Static"],
			learningMode: false,
		},
		{
			logo: cSharp,
			name: "C#",
			exercise: 164,
			concepts: 1,
			tags: ["Object- oriented", "Procedural", "Static"],
			learningMode: false,
		},
		{
			logo: cSharp,
			name: "C#",
			exercise: 164,
			concepts: 1,
			tags: ["Object- oriented", "Procedural", "Static"],
			learningMode: false,
		},
	];

	return (
		<div>
			<Nav />
			<div className="pt-40 w-full flex items-center justify-center flex-col">
				<p
					className="flex text-center font-normal not-italic pb-6
                    xl:text-6x
                lg:text-6xl
                lg:px-[312px]
                md:text-6xl
                sm:text-[30px]
                sm:px-[30px]
                xs:text-[30px]
                xs:px-[30px]
                "
					style={{ color: secondaryColor, fontFamily: "Aeonik TRIAL" }}
				>
					60 Languages for you to master
				</p>
				<span
					className="flex font-normal not-italic text-center pb-[46px]
                    xl:text-base
                lg:text-base
                lg:px-[440px]
                md:text-base
                xs:text-[7px]
                sm:px-[30px]
                xs:px-[30px]
                sm:text-[7px]
                "
					style={{
						fontFamily: "Work Sans",
						color: "rgba(0, 71, 55, 0.6)",
					}}
				>
					We provide a bootcamp-style experience, boosting your accountability,
					helping you through each step of your learning journey, and filtering
					the most relevant content for you. All of that so you will finish your
					learning journey and land a job.
				</span>
				<button
					style={{
						// fontSize: 14,
						fontWeight: "bold",
						backgroundColor: "#CEFFE5",
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
				<br />
				<div className="w-full px-9">
					<div
						className="w-full flex items-center justify-between p-5"
						style={{ backgroundColor: "#fdfdfe" }}
					>
						<div
							className="flex items-center justify-start p-1 border-2 rounded-md"
							style={{ backgroundColor: "#fff", borderColor: "#e0dfe7" }}
						>
							<AiOutlineSearch
								style={{
									fontSize: 20,
									fontWeight: "lighter",
									color: "#e0dfe7",
								}}
							/>
							<input
								className="flex
                                xl:w-[650px]
                                lg:w-[500px]
                                md:w-[500px]
                                sm:w-[350px]
                                xs:2-[250px]
                                "
								type={"search"}
								placeholder="Search language tracks"
								style={{
									color: "#e0dfe7",
									outline: "none",
									paddingLeft: 10,
								}}
							/>
						</div>
						<div
							className="flex items-center justify-between w-full pl-2
                        xl:flex-row
                        xl:pr-10
                        xl:pl-5
                        lg:flex-row
                        lg:pr-10
                        lg:pl-5
                        md:flex-row
                        md:pr-5
                        md:pl-5
                        sm:flex-col
                        sm:pr-0
                        sm:pl-1
                        xs:pl-1
                        xs:pr-0
                        xs:flex-col
                        "
						>
							<div>
								<select
									name="filterTab"
									id="filterTab"
									style={{
										paddingLeft: 15,
										paddingRight: 15,
										borderRadius: 6,
										outline: "none",
										height: 35,
										width: 110,
										border: "1px solid black",
										marginLeft: 10,
									}}
								>
									<option value="Filter By" selected={true} disabled={true}>
										Filter By
									</option>
									<option value="Date">Date</option>
									<option value="Exercise">Exercise</option>
								</select>
							</div>
							<span
								className="
                            lg:flex
                            md:flex
                            sm:hidden
                            xs:hidden
                            "
								style={{
									backgroundColor: "#fdf3e3",
									paddingTop: 10,
									paddingBottom: 10,
									paddingLeft: 20,
									paddingRight: 20,
									borderRadius: 6,
									fontWeight: "500",
								}}
							>
								Showing all 60 tracks
							</span>
							<div>
								<select
									style={{
										paddingLeft: 15,
										paddingRight: 15,
										borderRadius: 6,
										outline: "none",
										height: 35,
										width: 200,
									}}
								>
									<option value="Sort by last touched" selected={true}>
										Sort by last touched
									</option>
									<option value="Sort by Date">Sort by Date</option>
								</select>
							</div>
						</div>
					</div>
				</div>

				{languagesList.map((item, index) => {
					return (
						<div
							key={index}
							className="w-full flex items-center justify-between px-3
                        xl:flex-row
                        lg:flex-row
                        md:flex-row
                        sm:flex-col
                        xs:flex-col
                        "
							style={{ backgroundColor: "#eef1fa" }}
						>
							<div
								className="flex items-center justify-start px-3 py-3 rounded-md w-[730px]
                                xl:m-2
                                lg:m-2
                                md:m-2
                                xs:m-1
                                sm:m-1
                                "
								style={{ backgroundColor: "#fff" }}
							>
								<Image
									src={languagesList[index].logo}
									alt={index + "log"}
									width={180}
									height={180}
								/>
								<div className="flex justify-start flex-col">
									<span
										className="not-italic text-4xl font-bold text-left pb-4"
										style={{ color: "#1a1347" }}
									>
										{languagesList[index].name}
									</span>
									<div className="flex flex-row items-center justify-between">
										<CgGym style={{ fontSize: 25, color: "#79768a" }} />
										<span
											className="not-italic text-base font-semibold pl-3"
											style={{ color: "#79768a" }}
										>
											{languagesList[index].exercise} exercises
										</span>
										&nbsp; &nbsp; &nbsp; &nbsp;
										<FaBoxes style={{ fontSize: 25, color: "#79768a" }} />
										<span
											className="not-italic text-base font-semibold pl-3"
											style={{ color: "#79768a" }}
										>
											{languagesList[index].concepts} concepts
										</span>
									</div>
									<div className="flex-row items-center justify-between mt-3">
										{languagesList[index].tags.map((tag, innerIndex) => {
											return (
												<span
													key={innerIndex}
													className="not-italic text-center mr-3 font-medium rounded-xl"
													style={{
														//	backgroundColor: "pink",
														paddingTop: 2.5,
														paddingBottom: 2.5,
														paddingRight: 7,
														paddingLeft: 7,
														color: "#a4a1bb",
														border: ".15px solid #a4a1bb",
													}}
												>
													{tag}
												</span>
											);
										})}
									</div>
								</div>
							</div>
							{index + 1 < languagesList.length && (
								<div
									className="flex items-center justify-start px-3 py-3 rounded-md w-[730px]
                                xl:m-1
                                lg:m-1
                                md:m-1
                                xs:m-1
                                sm:m-1
                                "
									style={{ backgroundColor: "#fff" }}
								>
									<Image
										src={languagesList[index + 1].logo}
										alt={index + "log"}
										width={180}
										height={180}
									/>
									<div className="flex justify-start flex-col">
										<span
											className="not-italic text-4xl font-bold text-left pb-4"
											style={{ color: "#1a1347" }}
										>
											{languagesList[index + 1].name}
										</span>
										<div className="flex flex-row items-center justify-between">
											<CgGym style={{ fontSize: 25, color: "#79768a" }} />
											<span
												className="not-italic text-base font-semibold pl-3"
												style={{ color: "#79768a" }}
											>
												{languagesList[index + 1].exercise} exercises
											</span>
											&nbsp; &nbsp; &nbsp; &nbsp;
											<FaBoxes style={{ fontSize: 25, color: "#79768a" }} />
											<span
												className="not-italic text-base font-semibold pl-3"
												style={{ color: "#79768a" }}
											>
												{languagesList[index + 1].concepts} concepts
											</span>
										</div>
										<div className="flex-row items-center justify-between mt-3">
											{languagesList[index + 1].tags.map((tag, innerIndex) => {
												return (
													<span
														key={innerIndex}
														className="not-italic text-center mr-3 font-medium rounded-xl"
														style={{
															//	backgroundColor: "pink",
															paddingTop: 2.5,
															paddingBottom: 2.5,
															paddingRight: 7,
															paddingLeft: 7,
															color: "#a4a1bb",
															border: ".15px solid #a4a1bb",
														}}
													>
														{tag}
													</span>
												);
											})}
										</div>
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
