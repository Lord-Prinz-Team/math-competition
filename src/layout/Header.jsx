import Button from "../components/Button";
import Heading from "../components/Heading";
import Wave from "../components/Wave";
import classes from "./Header.module.scss";
import logoWhite from "./../assets/img/logo-white.svg";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<div className={classes["header__logo-box"]}>
				<img src={logoWhite} alt="Logo" className={classes.logo} />
			</div>
			<Heading className={classes["heading-primary"]} style={{ textAlign: "center" }}>
				<span className={classes["heading-primary-main"]}>Mechanizm</span>
				<span className={classes["heading-primary-sub"]}>z antykithiry</span>
			</Heading>
			<Button animation={true} type="white" target="#about">
				Co to takiego?
			</Button>
			<Wave className={classes.wave} fill="#eee" />
		</header>
	);
};

export default Header;
