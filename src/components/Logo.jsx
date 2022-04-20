import classes from "./Logo.module.scss";
import logoWhite from "./../assets/img/logo-white.svg";
import logoBlue from "./../assets/img/logo-blue.svg";
const Logo = (props) => {
	const color = props.color;

	let source = logoWhite;

	if (color === "blue") {
		source = logoBlue;
	}

	return (
		<div className={classes["header__logo-box"]}>
			<img src={source} alt="Logo" className={classes.logo} />
		</div>
	);
};

export default Logo;
