import React from "react";

export default function (props) {
	React.useEffect(() => {
		console.log("width", window.screen.width);
	}, []);
	return (
		<div
			className="flex m-1
			xl:h-[404px]
			xl:max-w-[296px]
			lg:h-[404px]
			lg:max-w-[296px]
			md:max-w-[184.82px]
			md:h-[251.41px]
			sm:max-w-[184.82px]
			sm:h-[251.41px]
			xs:max-w-[184.82px]
			xs:h-[251.41px]
			"
			style={{ position: "relative" }}
		>
			<video
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					borderRadius: 20,
				}}
				src={props.videoUrl}
				onClick={(e) => {
					// console.log("target", e.target);
					// e.currentTarget.play();
					e.currentTarget.currentTime === 0 || e.currentTarget.paused
						? e.currentTarget.play()
						: e.currentTarget.pause();
				}}
			></video>
			<div
				className="
            xl:flex-col
    	    xl:flex
            lg:flex-col
    		lg:flex
            md:flex-col
            md:flex
            sm:hidden
            xs:hidden"
				style={{
					color: "red",
					position: "absolute",
					height: "100%",
					width: "100%",
					top: "70%",
					left: 32,
					bottom: 34.76,
					//left: 0,
				}}
			>
				<span
					className="not-italic font-normal"
					style={{
						fontFamily: "Helvetica Neue",
						//fontStyle: "normal",
						//fontWeight: "lighter",
						fontSize: "23.582px",
						lineHeight: "28px",
						display: "flex",
						alignItems: "center",
						letterSpacing: "0.025em",
						color: "#FFFFFF",
					}}
				>
					Full Name
				</span>
				<span
					className="not-italic font-extralight"
					style={{
						paddingTop: 5.9,
						fontFamily: "Helvetica Neue",
						//fontStyle: "normal",
						//	fontWeight: "200",
						fontSize: "14.4112px",
						lineHeight: "124.9%",
						display: "flex",
						alignItems: "center",
						letterSpacing: "0.025em",
						color: "#FFFFFF",
					}}
				>
					Product Manager @ Google
				</span>
			</div>
		</div>
	);
}
