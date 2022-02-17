import classes from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
	return (
		<li className={`${classes.navigation__item} ${props.className ?? ""}`}>
			<a href={props.target} className={classes.navigation__link}>
				<span>{props.id < 10 ? `0${props.id}` : props.id}</span>
				{props.text}
			</a>
		</li>
	);
};

export default NavigationItem;
