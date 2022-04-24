import Control from "./Control";
import classes from "./Slider.module.scss";
import { useState, useEffect } from "react";
import SliderControler from "./SliderControler";
import options from "./../../assets/data/wizualizacja.json";

const Slider = (props) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const changeSlide = (index) => {
		if (currentSlide === index) {
			return;
		}
		setCurrentSlide(index);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentSlide((prevState) => {
				if (prevState + 1 === options.length) {
					return 0;
				}
				return prevState + 1;
			});
		}, 10000);
		return () => {
			clearTimeout(timeout);
		};
	}, [currentSlide]);

	return (
		<div className={`${classes.slider} ${props.className} `}>
			<Control
				options={options}
				currentSlide={currentSlide}
				changeSlide={changeSlide}
				loadingSlide={options.length === currentSlide + 1 ? 0 : currentSlide + 1}
			/>
			<SliderControler options={options} currentSlide={currentSlide} />
		</div>
	);
};

export default Slider;
