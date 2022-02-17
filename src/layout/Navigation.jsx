import { useState } from "react";
import Nav from "../components/nav/Nav";
import NavigationBackground from "../components/nav/NavigationBackground";
import NavigationButton from "../components/nav/NavigationButton";
import classes from "./Navigation.module.scss";

const Navigation = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleNavigation = () => {
		setIsActive((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className={classes.navigation}>
			<NavigationButton isActive={isActive} onClick={toggleNavigation} />
			<NavigationBackground isActive={isActive} />
			<Nav isActive={isActive} />
		</div>
	);
};

export default Navigation;
