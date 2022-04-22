import me from "./../assets/img/me.png";
import classes from "./SliderItem.module.scss";

const SliderItem = (props) => {
	return (
		<div className={`each-slide ${classes.slider}`}>
			{props.children}
		</div>
	);
};

export default SliderItem;
