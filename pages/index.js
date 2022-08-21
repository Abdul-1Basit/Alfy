import AutoPilot from "../Components/Autopilot";
import Nav from "../Components/Nav";
import "animate.css";
import {
	HomeComponent,
	AnimatedTabs,
	Existance,
	LandJob,
	Faq,
	Footer,
	About,
	Steps,
} from "../Components/Autopilot";

export const getStaticProps = () => {
	const videoUrls = [
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
	return {
		props: {
			videoUrls,
		},
	};
};
export default function Home({ videoUrls }) {
	return (
		<div className="w-full">
			<Nav />
			<div className="w-full flex items-center flex-col justify-center overflow-x-hidden	">
				<HomeComponent />
				<AnimatedTabs />
				<br />
				<Existance />
				<br />
				<Steps />
				<About />
				<LandJob videoUrls={videoUrls} />
				<Faq />
				<div style={{ height: 140 }}></div>
				<br />
				<br />
				<Footer />
			</div>
		</div>
	);
}
