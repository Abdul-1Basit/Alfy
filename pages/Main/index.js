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
} from "../../Components/Autopilot";
export default function Main() {
	return (
		<div className="w-full flex items-center flex-col justify-center overflow-x-hidden	">
			<HomeComponent />
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
