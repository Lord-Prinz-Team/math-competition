import Heading from "../components/Heading";
import Wave from "../components/Wave";
import classes from "./Implementations.module.scss";
import { Slide } from "react-slideshow-image";
import SliderItem from "../components/SlideItem";

const Implementations = () => {
	return (
		<section className={classes.implementations}>
			<Wave className={classes.wave} />
			<header className={`${classes.heading} u-center-text u-margin-bottom-medium`}>
				<Heading isAnimated={true} size="2">
					Implementacje
				</Heading>
			</header>

			<div className={`slide-container ${classes["slide-container"]}`}>
				{/* <Slide transitionDuration={500} >
					<SliderItem key={Math.random()}>AAA</SliderItem>
					<SliderItem key={Math.random()}>XDD</SliderItem>
				</Slide> */}
			</div>
		</section>
	);
};

export default Implementations;
