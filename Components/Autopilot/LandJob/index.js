import React, { Suspense, useRef } from "react";

const Vid = React.lazy(() => import("./Vid"));

export default function LandJob({ videoUrls }) {
	const videos = videoUrls ?? [
		"https://res.cloudinary.com/joinshelf/video/upload/v1661020352/62b9830bec669bdaec71e2da-processed_cctj2f.mp4",
		"https://res.cloudinary.com/joinshelf/video/upload/v1661022863/62f6b4bef4b60a8c4a5520a2-processed_h97tb9.mp4",
		"https://res.cloudinary.com/joinshelf/video/upload/v1661022747/62f5976ed0b815c68cec7342-processed_g6hoez.mp4",
		"https://res.cloudinary.com/joinshelf/video/upload/v1661022715/no-wm-N4xu7yh32_asjq6l.mp4",
		"https://res.cloudinary.com/joinshelf/video/upload/v1661022702/62fe7da73161f7ff0b2f7846-processed_xpokb2.mp4",
		"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
		"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
		"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
		"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
		"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
	];
	//console.log("not exists");
	return (
		<div
			id="Testimonies"
			className="w-full bg-[#041D18]"
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

			<div className="grid mb-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
				{videos.map((item, index) => {
					return (
						<Suspense
							key={index}
							fallback={
								<svg
									className="animate-spin h-5 w-5 mr-3"
									viewBox="0 0 24 24"
								></svg>
							}
						>
							<Vid videoUrl={item} />
						</Suspense>
					);
				})}
			</div>
		</div>
	);
}
