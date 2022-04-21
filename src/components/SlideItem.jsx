import me from "./../assets/img/me.png";

const SliderItem = (props) => {
	return (
		<div className="each-slide">
			{props.children}
			<img src={me} />
		</div>
	);
};

export default SliderItem;
