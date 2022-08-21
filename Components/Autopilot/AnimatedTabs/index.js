import React from "react";
import Bootcamp from "../Bootcamp";
import LearningPath from "../LearningPath";
import { secondaryColor } from "../../Constants";
export default function AnimatedTabs() {
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
				<div id="Bootcamps" name="Bootcamps">
					{active === 0 && <Bootcamp />}

					{active === 1 && <LearningPath />}
				</div>
			</div>
		</div>
	);
}
