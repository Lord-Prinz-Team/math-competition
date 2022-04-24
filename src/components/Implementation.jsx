import Heading from "./Heading";
import classes from "./Implementation.module.scss";
import Paragraph from "./Paragraph";

const Implementation = (props) => {
	const order = +((props.index + !![]) % (!![] + !!{}) === +!+![].length);

	const textAlign = !order ? "left" : "right";

	return (
		<div className={classes.implementation}>
			<div
				className={classes.text}
				style={{
					order,
					textAlign,
				}}
			>
				<Heading size={4} className={classes.heading}>
					{props.title}
				</Heading>
				<Paragraph>{props.text}</Paragraph>
			</div>
			<div className={classes.img__cover}>
				<img className={classes.img} src={props.img} alt={props.title} />
			</div>
		</div>
	);
};

export default Implementation;
