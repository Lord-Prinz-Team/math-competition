import classes from "./Nav.module.scss";
import NavigationList from "./NavigationList";

const linksData = [
	{
		name: "Heading",
		url: "#",
	},
	{
		name: "About",
		url: "#about",
	},
	{
		name: "Origin",
		url: "#origin",
	},
	{
		name: "Construction",
		url: "#construction",
	},
	{
		name: "Link 5",
		url: "#",
	},
	{
		name: "Link 6",
		url: "#",
	},
];

const Nav = (props) => {
	return (
		<nav
			className={`${classes.navigation__nav} ${props.isActive && classes.active}`}
		>
			<NavigationList linksData={linksData} onClick={props.onClick} />
		</nav>
	);
};

export default Nav;
