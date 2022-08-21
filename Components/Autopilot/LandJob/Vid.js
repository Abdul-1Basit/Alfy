export default function (props) {
	return (
		<div
			className="flex w-full m-3
    xl:max-w-[350px]
    xl:h-[404px]
    lg:max-w-[295px]
    lg:h-[404px]
    md:max-w-[350px]
    md:h-[404px]
    sm:max-w-full
    sm:h-[251px]
    xs:max-w-[184px]
    xs:h-[251px]
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
