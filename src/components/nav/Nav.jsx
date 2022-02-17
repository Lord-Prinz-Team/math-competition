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
		name: "Link 3",
		url: "#",
	},
	{
		name: "Link 4",
		url:
			"https://kalkulatory.link4.pl/moto/?partner_id=862&saids=58700007567589337_p68192028005&ds_rl=1163567&ds_rl=1167526&ds_rl=1167829&gclid=CjwKCAiAgbiQBhAHEiwAuQ6Bknaa07cUG9utoPUtkqmDslinXmSwYM4mWoJJUefdb6rQK-hWsAuJRxoCcOYQAvD_BwE&gclsrc=aw.ds",
	},
	{
		name: "Link 5",
		url: "#",
	},
];

const Nav = (props) => {
	return (
		<nav
			className={`${classes.navigation__nav} ${props.isActive && classes.active}`}
		>
			<NavigationList linksData={linksData} />
		</nav>
	);
};

export default Nav;
