import Heading from "./Heading";
import classes from "./Implementation.module.scss";
import Paragraph from "./Paragraph";
import replika from "./../assets/img/replika--2.jpg";
import replika2 from "./../assets/img/replika--3.jpg";

const Implementation = (props) => {
	const order = +((props.index + !![]) % (!![] + !!{} + !"") === +!+![].length);

	const textAlign = !order ? "left" : "right";

	const isCustom  = props.isCustom;

	const isEmbed = props.isEmbed;

	const classicalComponent = <div className={classes.implementation}>
	<div
		className={classes.text}
		style={{
			order,
			textAlign,
		}}
	>
		<Heading size={4} className={`${classes.heading} u-margin-bottom-small`}>
			{props.title}
		</Heading>
		<Paragraph>{props.text}</Paragraph>
	</div>
	<div className={classes.img__cover}>
		<img className={classes.img} src={props.img} alt={props.title} />
	</div>
</div>

const customComponent = <div className={classes["implementation--custom"]}>
	<div className={classes["img__cover--main"]}>
		<img className={classes.img} src={props.img} alt={props.title} />
	</div>
	<div className={classes["img__cover__sub--1"]}>
		<img className={classes.img} src={replika} alt={props.title} />
	</div>
	<div className={classes["img__cover__sub--2"]}>
		<img className={classes.img} src={replika2} alt={props.title} />
	</div>
</div>

const embed = <iframe className={classes.iframe} src="https://www.youtube.com/embed/IT0gXa1ZrnA" title="YouTube video player" frameBorder="0" allow="accelerometer;" autoPlay allowFullScreen></iframe>


	return isCustom ? customComponent : isEmbed ? embed : classicalComponent;
	
};

export default Implementation;
