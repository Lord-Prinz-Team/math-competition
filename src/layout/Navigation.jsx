import NavigationButton from "../components/nav/NavigationButton";
import classes from "./Navigation.module.scss";
const Navigation = (props) => {
	return (
		<div className={classes.navigation}>
			<NavigationButton />
		</div>
	);
};

export default Navigation;
