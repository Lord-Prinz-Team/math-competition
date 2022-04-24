import Heading from "../Heading";
import classes from "./Slide.module.scss";
import arrow from "./../../assets/img/arrow--white.svg";
import { useEffect, useState } from "react";

const Slide = (props) => {
	const [isFadeOut, setIsFadeOut] = useState(false);
	console.log(props);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsFadeOut(true);
		}, [9700]);
		return () => {
			clearTimeout(timeout);
			setIsFadeOut(false);
		};
	}, []);

	const normal = (
		<div
			className={`${classes.slide} ${classes.fadeIn} ${
				isFadeOut && classes.fadeOut
			} ${props.className}`}
		>
			<div className={classes.text}></div>
			<div className={classes.img__cover}>
				<img src={`/${props.img}`} className={classes.img} />
				{/* <img src={arrow} className={classes.arrow} /> */}
				{/* <div className={classes.title}>{props.children}</div> */}
			</div>
		</div>
	);

	return props.isCustom ? (
		<div
			className={`${classes.slide} ${classes.fadeIn} ${
				isFadeOut && classes.fadeOut
			} ${props.className}`}
		>
			<div className={classes.img__cover}>
				<img src={`/${props.img}`} className={classes.img} />
			</div>
		</div>
	) : (
		normal
	);
};

export default Slide;
