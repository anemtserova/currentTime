import React, { useState, useEffect } from "react";

const ClockComponent = () => {
	let [currentTime, setTimeout] = useState(new Date());

	useEffect(() => {
		setTimeout(() => new Date(), 1000);
	}, [currentTime]);

	const textColor = {
		color: "red"
	};

	return <div style={textColor}>{currentTime.toString()}</div>;
};

export default ClockComponent;
