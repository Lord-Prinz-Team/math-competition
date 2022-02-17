import classes from "./NavigationButton.module.scss";

const NavigationButton = (props) => {
	return (
		<button className={classes.navigation__button}>
			<span className={classes.navigation__icon}>&nbsp;</span>
		</button>
	);
};

export default NavigationButton;
